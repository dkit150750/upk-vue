<template>
  <div class="add-lecture">
    <h2 class="add-lecture__title">Добавить лекцию</h2>
    <form class="add-lecture__form" @submit.prevent="storeLecture">
      <BaseField
        class="add-lecture__field-fill"
        label="Дата проведения"
        id="date"
        name="date"
        type="date"
        v-model.trim="lecture.date"
      />
      <BaseField
        class="add-lecture__field-fill"
        label="Время проведения"
        id="time"
        name="time"
        type="time"
        v-model.trim="lecture.time"
      />
      <BaseField
        label="Мест"
        id="total_places"
        name="total_places"
        type="text"
        v-model.trim="lecture.total_places"
      />
      <BaseField
        label="Кабинет"
        id="cabinet"
        name="cabinet"
        type="text"
        v-model.trim="lecture.cabinet"
      />
      <BaseButton class="add-lecture__button" type="submit"
        >Добавить</BaseButton
      >
    </form>
  </div>
</template>

<script>
import LectureService from '@/services/LectureService';
import { getErrorData } from '@/utils/helpers';

import BaseButton from '@/components/admin/Base/BaseButton.vue';
import BaseField from '@/components/admin/Base/BaseField.vue';

export default {
  name: 'CourseInfoLectureAdd',

  components: {
    BaseButton,
    BaseField,
  },

  props: {
    course_id: Number,
  },

  emits: {
    addLecture: null,
  },

  data() {
    return {
      lecture: {
        date: this.getDate(),
        time: '13:30',
        total_places: '16',
        cabinet: '',
      },
    };
  },

  methods: {
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      return `${year}-${month}-${day}`;
    },

    async storeLecture() {
      try {
        const payload = this.lecture;
        if (!this.course_id) {
          return;
        }
        payload.course_id = this.course_id;
        const response = await LectureService.addLecture(payload);
        this.lecture.date = this.getDate();
        this.lecture.time = '13:30';
        this.lecture.total_places = '16';
        this.$emit('addLecture', response.data.data);
      } catch (error) {
        console.log(getErrorData(error));
      }
    },
  },
};
</script>

<style>
.add-lecture {
  padding: 20px;
  margin-bottom: 50px;
  background-color: var(--color-gray-180);
  border-radius: 10px;
}

@media (min-width: 540px) {
  .add-lecture {
    max-width: 350px;
  }
}

.add-lecture__title {
  margin: 10px 0 20px;
  font-size: 20px;
  font-weight: 600;
}

.add-lecture__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.add-lecture__field-fill {
  grid-column: 1 / -1;
}
</style>
