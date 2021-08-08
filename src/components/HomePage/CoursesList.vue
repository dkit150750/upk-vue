<template>
  <div class="courses-list">
    <template v-if="!isLoading">
      <template v-if="courses.length">
        <CoursesListItem
          v-for="course in courses"
          :key="course.id"
          :courseId="course.id"
          :title="course.title"
          :picture="course.picture"
          :background="course.background"
        />
      </template>
      <p class="courses-list__list-null" v-else>Курсов пока нет...</p>
    </template>
    <template v-else>
      <CoursesListItem v-for="n in 6" :key="n" picture="loading" />
    </template>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import CoursesListItem from '@/components/HomePage/CoursesListItem.vue';

export default {
  name: 'CoursesList',
  components: {
    CoursesListItem,
  },

  data() {
    return {
      courses: [],
      isLoading: true,
    };
  },

  async created() {
    try {
      const response = await CourseService.getCourses();
      this.courses = response.data.data;
      this.isLoading = false;
    } catch (error) {
      console.log(getErrorData(error));
    }
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

.courses-list__list-null {
  font-size: 28px;
}
</style>
