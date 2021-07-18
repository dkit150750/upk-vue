<template>
  <div class="main-courses-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProfileMainCoursesList',
};
</script>

<style>
.main-courses-list {
  display: grid;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
}

@media (min-width: 1024px) {
  .main-courses-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
