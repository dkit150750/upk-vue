<template>
  <h1 class="main__title">Список курсов</h1>
  <BaseButton @click="addCourse">Добавить курс</BaseButton>
  <template v-if="courses.length">
    <div class="admin-courses">
      <Course
        v-for="course in courses"
        :key="course.id"
        :courseId="course.id"
        :title="course.title"
        :picture="course.picture"
      />
    </div>
  </template>
  <p class="admin-courses-null" v-else>Пока нет курсов</p>
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import BaseButton from '@/components/admin/Base/BaseButton.vue';
import Course from '@/components/admin/HomePage/Course.vue';

export default {
  name: 'HomePage',

  components: {
    Course,
    BaseButton,
  },

  async created() {
    try {
      const response = await CourseService.getCourses();
      this.courses = response.data.data;
    } catch (error) {
      console.log(getErrorData(error));
    }
  },

  data() {
    return {
      courses: [],
    };
  },

  methods: {
    async addCourse() {
      try {
        const response = await CourseService.addCourse();
        this.courses.unshift(response.data.data);
      } catch (error) {
        console.log(getErrorData(error));
      }
    },
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

.admin-courses-null {
  font-size: 20px;
}
</style>
