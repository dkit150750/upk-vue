<template>
  <h1 class="main__title">Инофрмация о курсе</h1>
  <CourseInfo class="main__course-info" @updateCourse="updateCourse">
    <BaseField
      label="Название"
      id="name"
      name="name"
      type="text"
      v-model.trim="course.title"
    />
    <BaseField
      label="Описание"
      id="description"
      name="description"
      v-model.trim="course.description"
    />
    <CourseInfoPicture
      class="admin-course-info__picture"
      :id="course.id"
      :title="course.title"
      :picture="course.picture"
      @updatePicture="setPicture"
    />
    <BaseField
      class="admin-course-info__background"
      label="Цвет"
      id="background"
      name="background"
      type="text"
      v-model.trim="course.background"
    />
  </CourseInfo>
  <CourseInfoLectureAdd />
  <CourseInfoLectures v-if="lectures.length" :lectures="lectures" />
  <FlashMessage :message="message" @close="message = null" />
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import BaseField from '@/components/admin/base/BaseField.vue';
import FlashMessage from '@/components/FlashMessage.vue';
import CourseInfo from '@/components/admin/course/CourseInfo.vue';
import CourseInfoPicture from '@/components/admin/course/CourseInfoPicture.vue';
import CourseInfoLectureAdd from '@/components/admin/course/CourseInfoLectureAdd.vue';
import CourseInfoLectures from '@/components/admin/course/CourseInfoLectures.vue';

export default {
  name: 'TheCourse',

  components: {
    BaseField,
    CourseInfo,
    CourseInfoPicture,
    CourseInfoLectures,
    CourseInfoLectureAdd,
    FlashMessage,
  },

  data() {
    return {
      course: {
        id: 0,
        title: '',
        description: '',
        picture: '',
        background: '',
      },
      lectures: [],
      message: null,
    };
  },

  methods: {
    async getCourse(id) {
      try {
        const response = await CourseService.getCourseEdit(id);
        this.course = response.data.data;
      } catch (error) {
        console.log(getErrorData(error));
      }
    },

    async updateCourse() {
      console.log(1);
      try {
        const course = this.course;
        const payload = {
          id: course.id,
          title: course.title,
          description: course.description,
          background: course.background,
        };
        const response = await CourseService.updateCourse(payload);
        this.course = response.data.data;
        this.lectures = this.course.lectures ?? [];
      } catch (error) {
        console.log(getErrorData(error));
      }
    },

    setPicture(picture) {
      this.course.picture = picture;
      this.message = 'Данные обновлены';
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
        console.log(courseId);
        this.getCourse(courseId);
      }
    );
  },
};
</script>

<style>
.main__course-info {
  margin-bottom: 60px;
}
</style>
