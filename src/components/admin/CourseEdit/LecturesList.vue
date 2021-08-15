<template>
  <div class="admin-course-lectures">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LecturesList',
};
</script>

<style>
.admin-course-lectures {
  display: grid;
  grid-template-columns: max-content;
  gap: 30px;
  margin-bottom: 50px;
}

@media (min-width: 640px) {
  .admin-course-lectures {
    grid-template-columns: max-content max-content;
  }
}
</style>
