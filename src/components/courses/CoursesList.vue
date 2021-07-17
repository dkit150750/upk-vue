<template>
  <div class="courses-list">
    <CoursesListItem
      v-for="course in courses"
      :key="course.id"
      :courseId="course.id"
      :title="course.title"
      :imgSrc="course.imgSrc"
      :background="course.background"
    />
  </div>
</template>

<script>
import CoursesListItem from '@/components/courses/CoursesListItem.vue';
import courses from '@/store/courses.js';

export default {
  name: 'CoursesList',
  components: {
    CoursesListItem,
  },

  data() {
    return {
      courses: courses,
    };
  },
};
</script>

<style>
.courses-list {
  display: grid;
  grid-template-columns: 100%;
  gap: 10px;
}

@media (min-width: 768px) {
  .courses-list {
    grid-template-columns: repeat(2, minmax(auto, 425px));
    gap: 20px;
  }
}

@media (min-width: 1500px) {
  .courses-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
</style>
