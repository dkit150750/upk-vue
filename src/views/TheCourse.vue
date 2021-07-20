<template>
  <div class="course">
    <div class="course__conataner">
      <CourseInformation
        :title="course.title"
        :description="course.description"
        :background="course.background"
        :imgSrc="course.imgSrc"
      />
      <CourseDates :dates="course.dates" />
    </div>
  </div>
</template>

<script>
import CourseInformation from '@/components/course/CourseInformation.vue';
import CourseDates from '@/components/course/CourseDates.vue';
import courses from '@/store/courses.js';
export default {
  name: 'TheCourse',

  components: {
    CourseInformation,
    CourseDates,
  },

  data() {
    return {
      course: {
        title: null,
        description: null,
        imgSrc: null,
        background: null,
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
