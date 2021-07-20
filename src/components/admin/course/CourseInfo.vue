<template>
  <form class="admin-course-info">
    <slot />
    <button class="admin-course-info__save" type="submit">Сохранить</button>
  </form>
</template>

<script>
export default {
  name: 'CourseInfo',
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
  padding: 13px 20px;
  font-family: inherit;
  font-size: 16px;
  color: var(--color-gray-50);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 6px;
}
</style>
