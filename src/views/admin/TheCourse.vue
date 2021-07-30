<template>
  <h1 class="main__title">Инофрмация о курсе</h1>
  <CourseInfo class="main__course-info">
    <CourseInfoField
      class="input-group__input--textarea-name"
      label="Название"
      id="name"
      name="name"
      v-model.trim="course.title"
    />
    <CourseInfoField
      label="Описание"
      id="description"
      name="description"
      v-model.trim="course.description"
    />
    <CourseInfoPicture
      :id="course.id"
      :title="course.title"
      :picture="course.picture"
      @updatePicture="setPicture"
    />
    <CourseInfoField
      label="Цвет"
      id="background"
      name="background"
      type="text"
      v-model.trim="course.background"
    />
  </CourseInfo>
  <CourseInfoDates v-if="course.dates" :dates="course.dates" />
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import CourseInfo from '@/components/admin/course/CourseInfo.vue';
import CourseInfoField from '@/components/admin/course/CourseInfoField.vue';
import CourseInfoPicture from '@/components/admin/course/CourseInfoPicture.vue';
import CourseInfoDates from '@/components/admin/course/CourseInfoDates.vue';

export default {
  name: 'TheCourse',

  components: {
    CourseInfo,
    CourseInfoField,
    CourseInfoPicture,
    CourseInfoDates,
  },

  data() {
    return {
      course: {
        id: '',
        title: '',
        description: '',
        picture: '',
        dates: [],
      },
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

    setPicture(picture) {
      this.course.picture = picture;
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
