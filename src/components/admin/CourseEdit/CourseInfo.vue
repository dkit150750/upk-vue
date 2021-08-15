<template>
  <div class="admin-course-info">
    <form class="admin-course-info__form" @submit.prevent="updateCourse">
      <slot />
      <div class="admin-course-info__buttons">
        <BaseButton class="admin-course-info__save" type="submit">
          Сохранить
        </BaseButton>
        <BaseButton class="admin-course-info__del" @click="deleteCourse">
          Удалить
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import BaseButton from '@/components/admin/Base/BaseButton.vue';

export default {
  name: 'CourseInfo',

  components: {
    BaseButton,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  emits: {
    updateCourse: null,
    deleteCourse: null,
  },

  methods: {
    updateCourse() {
      this.$emit('updateCourse');
    },

    async deleteCourse() {
      try {
        await CourseService.deleteCourse(this.id);
        this.$emit('deleteCourse');
      } catch (error) {
        console.log(getErrorData(error));
      }
    },
  },
};
</script>

<style>
.admin-course-info {
  max-width: 700px;
  padding: 20px;
  background-color: var(--color-gray-180);
  border-radius: 10px;
}

.admin-course-info__form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 25px;
}

@media (min-width: 640px) {
  .admin-course-info__form {
    grid-template-columns: 1fr 200px;
  }
}

.admin-course-info__picture {
  justify-self: center;
}

@media (min-width: 640px) {
  .admin-course-info__picture {
    align-self: flex-start;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  .admin-course-info__background {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
}

.admin-course-info__buttons {
  display: grid;
  gap: 20px;
  align-items: flex-end;
}

.admin-course-info__del {
  background-color: var(--color-red-600);
}

@media (min-width: 640px) {
  .admin-course-info__buttons {
    grid-column: 1 / 2;
    grid-template-columns: min-content min-content;
  }

  .admin-course-info__save,
  .admin-course-info__del {
    justify-self: stretch;
  }
}
</style>
