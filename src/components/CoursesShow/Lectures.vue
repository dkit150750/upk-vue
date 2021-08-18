<template>
  <form class="lectures" @submit.prevent="submitHandler">
    <h2 class="lectures__title">Выбрать дату</h2>

    <div class="lectures__wrapper">
      <LecturesList class="lectures__list">
        <LecturesListItem
          v-for="lecture in lectures"
          :key="lecture.id"
          :id="lecture.id"
          :date="lecture.date"
          :selectId="selectedLectureId"
          @change="changeLecture"
        />
      </LecturesList>
      <LecturesInfo
        :time="selectedLecture.time"
        :cabinet="selectedLecture.cabinet"
        :places="selectedLecture.places"
        :total_places="selectedLecture.total_places"
      />
    </div>
    <button class="lectures__button" type="submit" :disabled="isDisabled">
      Записаться
    </button>
  </form>
  <teleport to="body">
    <transition name="flash-message">
      <FlashMessage
        v-if="message || messageError"
        :message="message"
        :error="messageError"
        @close="messageError = message = null"
      />
    </transition>
  </teleport>
</template>

<script>
import RecordService from '@/services/RecordService';
import { getErrorData } from '@/utils/helpers';
import { mapGetters } from 'vuex';

import LecturesList from '@/components/CoursesShow/LecturesList.vue';
import LecturesListItem from '@/components/CoursesShow/LecturesListItem.vue';
import LecturesInfo from '@/components/CoursesShow/LecturesInfo.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'Lectures',

  components: {
    LecturesList,
    LecturesListItem,
    LecturesInfo,
    FlashMessage,
  },

  props: {
    lectures: {
      type: Array,
      default: () => [],
    },
  },

  emits: {
    success: null,
  },

  data() {
    return {
      selectedLectureId: parseInt(this.lectures[0].id),
      message: null,
      messageError: null,
      isLoading: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['isEmailVerified']),

    selectedLecture() {
      return this.lectures.find(
        (lecture) => lecture.id === parseInt(this.selectedLectureId)
      );
    },

    isDisabled() {
      return (
        this.selectedLecture.total_places === this.selectedLecture.places ||
        this.isLoading
      );
    },
  },

  methods: {
    changeLecture(event) {
      this.selectedLectureId = parseInt(event.target.value);
    },

    async submitHandler() {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;

      if (!this.isEmailVerified) {
        this.$router.push({ name: 'profile' });
        return;
      }

      try {
        const payload = {
          lecture_id: this.selectedLectureId,
        };

        const isRecord = await RecordService.hasRecord(payload);

        if (isRecord.data.data) {
          this.message = null;
          this.messageError = null;
          await this.$nextTick();
          this.messageError = isRecord.data.message;
          this.isLoading = false;
          return;
        }

        const response = await RecordService.setRecord(payload);

        if (response.data.data) {
          this.message = null;
          this.messageError = null;
          await this.$nextTick();
          this.message = 'Приглашение выслано на почту';
          this.$emit('success', payload.lecture_id);
        }
      } catch (error) {
        console.log(getErrorData(error));
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
.lectures {
  padding: 20px 0;
}

@media (min-width: 550px) {
  .lectures {
    padding: 40px 0;
  }
}

.lectures__title {
  margin-bottom: 30px;
  font-weight: 600;
}

.lectures__list {
  margin-bottom: 20px;
}

.light .lectures__button {
  --button-color: var(--color-white);
  --button-background: var(--color-primary-800);
}

.dark .lectures__button {
  --button-color: var(--color-white);
  --button-background: var(--color-primary-600);
}

.lectures__button {
  display: block;
  padding: 13px 20px;
  margin-top: 30px;
  font-family: inherit;
  font-size: 16px;
  color: var(--button-color);
  cursor: pointer;
  background-color: var(--button-background);
  border: 0;
  border-radius: 6px;
  transition: background-color 0.15s ease-out;
}

.lectures__button:disabled {
  cursor: auto;
}

.light .lectures__button:disabled {
  --button-color: var(--color-gray-600);
  --button-background: var(--color-gray-200);
}

.dark .lectures__button:disabled {
  --button-color: var(--color-white);
  --button-background: var(--color-gray-500);
}

.light .lectures__button:not(:disabled):focus,
.light .lectures__button:not(:disabled):hover {
  --button-background: var(--color-gray-900);
}

.dark .lectures__button:not(:disabled):focus,
.dark .lectures__button:not(:disabled):hover {
  --button-background: var(--color-primary-800);
}
</style>
