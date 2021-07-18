<template>
  <div class="main-courses">
    <div class="main-courses__contaner">
      <h2 class="main-courses__title">Мои курсы</h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMainCourses',
};
</script>

<style>
.main-courses__contaner {
  max-width: var(--max-width);
  padding: 30px 16px 140px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .main-courses__contaner {
    padding: 30px 40px 140px;
  }
}

@media (min-width: 768px) {
  .main-courses__contaner {
    max-width: 776px;
  }
}

@media (min-width: 1024px) {
  .main-courses__contaner {
    max-width: 1008px;
  }
}

@media (min-width: 1280px) {
  .main-courses__contaner {
    max-width: 1248px;
  }
}

.main-courses__title {
  margin-bottom: 40px;
}
</style>
