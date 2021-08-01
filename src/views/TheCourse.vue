<template>
  <div class="course">
    <div class="course__conataner">
      <CourseInformation
        :title="course.title"
        :description="course.description"
        :background="course.background"
        :picture="course.picture"
      />
      <Lectures
        v-if="course.lectures.length"
        :lectures="course.lectures"
        @addPlaces="addPlacesHandler"
      />
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

  data() {
    return {
      course: {
        id: 0,
        title: '',
        description: '',
        picture: '',
        background: '',
        lectures: [],
      },
      message: null,
    };
  },

  methods: {
    async getCourse(id) {
      try {
        const response = await CourseService.getCourse(id);
        this.course = response.data.data;
      } catch (error) {
        console.log(getErrorData(error));
      }
    },

    addPlacesHandler(id) {
      console.log(id);
      this.course.lectures = this.course.lectures.map((lecture) => {
        console.log(lecture);
        if (lecture.id === id) {
          lecture.places = lecture.places + 1;
        }
        return lecture;
      });
    },
  },

  created() {
    this.getCourse(this.$route.params.courseId);

    this.$watch(
      () => this.$route.params.courseId,
      (courseId) => {
        if (!courseId) {
          return;
        }
        this.getCourse(courseId);
      }
    );
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
