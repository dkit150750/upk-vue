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
          @success="plusPlaces"
        />
        <p class="course__lectures-null" v-else>Записи на курс пока нет...</p>
      </template>
      <CourseInformation v-else picture="loading" />
    </div>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import CourseInformation from '@/components/CoursesShow/CourseInformation.vue';
import Lectures from '@/components/CoursesShow/Lectures.vue';
export default {
  name: 'CoursesShow',

  components: {
    CourseInformation,
    Lectures,
  },

  beforeRouteUpdate(to) {
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
        this.$router.go(-1);
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

.course__lectures-null {
  font-size: 24px;
}
</style>
