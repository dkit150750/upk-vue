<template>
  <div class="admin-courses">
    <CoursesListItem
      v-for="course in courses"
      :key="course.id"
      :courseId="course.id"
      :title="course.title"
      :imgSrc="course.imgSrc"
    />
  </div>
</template>

<script>
import CoursesListItem from '@/components/admin/courses/CoursesListItem.vue';
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
.admin-courses {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 40px 0 80px;
}

@media (min-width: 900px) {
  .admin-courses {
    grid-template-columns: repeat(2, minmax(auto, 450px));
  }
}
</style>
