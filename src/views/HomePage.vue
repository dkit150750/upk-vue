<template>
  <div class="courses">
    <div class="courses__container">
      <h1 class="courses__title">
        Академия дополнительного профессионального образования
      </h1>
      <CoursesList />
    </div>
  </div>
</template>

<script>
import CoursesList from '@/components/HomePage/CoursesList.vue';
export default {
  name: 'HomePage',
  components: {
    CoursesList,
  },
};
</script>

<style>
.courses__container {
  max-width: var(--max-width);
  padding: 26px 16px 110px;
  margin: 0 auto;
}

@media (min-width: 400px) {
  .courses__container {
    padding: 26px 16px;
    padding-bottom: 150px;
  }
}

@media (min-width: 550px) {
  .courses__container {
    padding-right: 40px;
    padding-left: 40px;
  }
}

@media (min-width: 768px) {
  .courses__container {
    padding-top: 56px;
  }
}

.courses__title {
  margin: 0;
  margin-bottom: 40px;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .courses__title {
    margin-bottom: 60px;
    font-size: 52px;
  }
}
</style>
