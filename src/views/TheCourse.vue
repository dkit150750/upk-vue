<template>
  <div class="course">
    <div class="course__conataner">
      <template v-if="!isLoading">
        <CourseInformation
          :title="course.title"
          :description="course.description"
          :background="course.background"
          :picture="course.picture"
        />
        <Lectures
          v-if="course.lectures.length"
          :lectures="course.lectures"
          @record="plusPlaces"
        />
      </template>
      <template v-else>
        <h2>Загрузка...</h2>
      </template>
    </div>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import CourseInformation from '@/components/course/CourseInformation.vue';
import Lectures from '@/components/course/Lectures.vue';
export default {
  name: 'TheCourse',

  components: {
    CourseInformation,
    Lectures,
  },

  async beforeRouteUpdate(to) {
    this.getCourse(to.params.courseId);
  },

  created() {
    this.getCourse(this.$route.params.courseId);
  },

  data() {
    return {
      course: {
        id: null,
        title: '',
        description: '',
        picture: '',
        background: '',
        lectures: [],
      },
      message: null,
      isLoading: true,
    };
  },

  methods: {
    async getCourse(id) {
      try {
        const response = await CourseService.getCourse(id);
        this.course = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.log(getErrorData(error));
      }
    },

    plusPlaces(id) {
      this.course.lectures = this.course.lectures.map((lecture) => {
        if (lecture.id === id) {
          lecture.places = lecture.places + 1;
        }
        return lecture;
      });
    },
  },
};
</script>

<style>
.course__conataner {
  max-width: var(--max-width);
  padding: 26px 16px 110px;
  margin: 0 auto;
}

@media (min-width: 400px) {
  .course__conataner {
    padding-bottom: 150px;
  }
}

@media (min-width: 550px) {
  .course__conataner {
    padding-right: 40px;
    padding-bottom: 170px;
    padding-left: 40px;
  }
}
</style>
