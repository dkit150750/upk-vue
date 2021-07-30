<template>
  <div class="admin-course-info">
    <form class="admin-course-info__form" @submit.prevent="updateCourse">
      <slot />
      <div class="admin-course-info__buttons">
        <BaseButton class="admin-course-info__save" type="submit">
          Сохранить
        </BaseButton>
        <BaseButton class="admin-course-info__del">Удалить</BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from '@/components/admin/base/BaseButton.vue';

export default {
  name: 'CourseInfo',

  components: {
    BaseButton,
  },

  emits: {
    updateCourse: null,
  },

  methods: {
    updateCourse() {
      console.log(2);
      this.$emit('updateCourse');
    },
  },
};
</script>

<style>
.admin-course-info {
  max-width: 700px;
  padding: 20px;
  background-color: var(--color-gray-70);
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
  background-color: var(--color-red-800);
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
