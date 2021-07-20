<template>
  <form class="admin-course-info">
    <CourseInfoInputGroup
      class="input-group__input--textarea-name"
      label="Название"
      id="name"
      name="name"
    />
    <CourseInfoInputGroup
      label="Название"
      id="description"
      name="description"
    />
    <button class="admin-course-info__save" type="submit">Сохранить</button>
  </form>
</template>

<script>
import CourseInfoInputGroup from '@/components/admin/course/CourseInfoInputGroup.vue';

export default {
  name: 'CourseInfo',

  components: {
    CourseInfoInputGroup,
  },
};
</script>

<style>
.admin-course-info {
  display: grid;
  gap: 60px;
  max-width: 500px;
}

.admin-course-info__save {
  display: block;
  justify-self: start;
  padding: 10px 20px;
  font-family: inherit;
  color: var(--color-gray-50);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 10px;
}
</style>
