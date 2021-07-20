<template>
  <h1 class="main__title">Инофрмация о курсе</h1>
  <CourseInfo />
  <CourseInfoDates />
</template>

<script>
import CourseInfo from '@/components/admin/course/CourseInfo.vue';
import CourseInfoDates from '@/components/admin/course/CourseInfoDates.vue';

export default {
  name: 'TheCourse',

  components: {
    CourseInfo,
    CourseInfoDates,
  },

  // data();
};
</script>

<style></style>
