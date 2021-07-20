<template>
  <h1 class="main__title">Инофрмация о курсе</h1>
  <CourseInfo class="main__course-info">
    <CourseInfoInputGroup
      class="input-group__input--textarea-name"
      label="Название"
      id="name"
      name="name"
      v-model="course.title"
    />
    <CourseInfoInputGroup
      label="Описание"
      id="description"
      name="description"
      v-model="course.description"
    />
  </CourseInfo>
  <CourseInfoDates :dates="course.dates" />
</template>

<script>
import CourseInfo from '@/components/admin/course/CourseInfo.vue';
import CourseInfoInputGroup from '@/components/admin/course/CourseInfoInputGroup.vue';
import CourseInfoDates from '@/components/admin/course/CourseInfoDates.vue';
import courses from '@/store/courses.js';

export default {
  name: 'TheCourse',

  components: {
    CourseInfo,
    CourseInfoInputGroup,
    CourseInfoDates,
  },

  data() {
    return {
      course: {
        title: null,
        description: null,
        dates: null,
      },
    };
  },

  methods: {
    getCourse(id) {
      this.course = courses.find((course) => course.id === parseInt(id));
    },
  },

  created() {
    this.getCourse(this.$route.params.courseId);

    this.$watch(
      () => this.$route.params.courseId,
      (courseId) => {
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
