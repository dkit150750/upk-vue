<template>
  <h1 class="main__title">Инофрмация о курсе</h1>
  <CourseInfo
    class="main__course-info"
    :id="course.id"
    @updateCourse="updateCourse"
    @deleteCourse="deleteCourse"
  >
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
  <CourseInfoLectureAdd :course_id="course.id" @addLecture="addLecture" />

  <LecturesList>
    <LecturesListItem
      v-for="lecture in course.lectures"
      :key="lecture.id"
      :id="lecture.id"
      :date="lecture.date"
      :time="lecture.time"
      :cabinet="lecture.cabinet"
      :places="lecture.places"
      :total_places="lecture.total_places"
      @deleteLecture="deleteLecture"
    />
  </LecturesList>
  <teleport to="#app">
    <transition name="flash-message">
      <FlashMessage v-if="message" :message="message" @close="message = null" />
    </transition>
  </teleport>
</template>

<script>
import CourseService from '@/services/CourseService';
import { getErrorData } from '@/utils/helpers';

import BaseField from '@/components/admin/base/BaseField.vue';
import FlashMessage from '@/components/FlashMessage.vue';
import CourseInfo from '@/components/admin/course/CourseInfo.vue';
import CourseInfoPicture from '@/components/admin/course/CourseInfoPicture.vue';
import CourseInfoLectureAdd from '@/components/admin/course/CourseInfoLectureAdd.vue';
import LecturesList from '@/components/admin/course/LecturesList.vue';
import LecturesListItem from '@/components/admin/course/LecturesListItem.vue';

export default {
  name: 'TheCourse',

  components: {
    BaseField,
    CourseInfo,
    CourseInfoPicture,
    CourseInfoLectureAdd,
    LecturesList,
    LecturesListItem,
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

    async updateCourse() {
      try {
        const course = this.course;
        const payload = {
          id: course.id,
          title: course.title,
          description: course.description,
          background: course.background,
        };
        const response = await CourseService.updateCourse(payload);
        Object.keys(response.data.data).forEach((key) => {
          this.course[key] = response.data.data[key];
        });
        this.lectures = this.course.lectures ?? [];
      } catch (error) {
        console.log(getErrorData(error));
      }
    },

    async setPicture(picture) {
      this.course.picture = picture;
      this.message = null;
      await this.$nextTick();
      this.message = 'Данные обновлены';
    },

    deleteCourse() {
      this.$router.push({ name: 'admin' });
    },

    async addLecture(lecture) {
      this.course.lectures.unshift(lecture);
      this.message = null;
      await this.$nextTick();
      this.message = 'Запись создана';
    },

    async deleteLecture(id) {
      this.course.lectures = this.course.lectures.filter(
        (lecture) => lecture.id !== id
      );
      this.message = null;
      await this.$nextTick();
      this.message = 'Запись удалена';
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
.main__course-info {
  margin-bottom: 60px;
}
</style>
