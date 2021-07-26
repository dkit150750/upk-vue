<template>
  <article class="course-card course-card--devops" ref="course">
    <router-link
      class="course-card__title"
      :to="{ name: 'course', params: { courseId: courseId } }"
    >
      {{ title }}
    </router-link>
    <div class="course-card__pic-wrapper">
      <img class="course-card__pic" :src="picture" :alt="title" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'CourseCard',

  props: {
    courseId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: 'hsl(60, 11%, 94%)',
    },
  },

  data() {
    return {
      logo: 'logo.png',
    };
  },

  mounted() {
    this.$refs.course.style.setProperty('--color-background', this.background);
  },
};
</script>

<style>
.course-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(10px, 1fr) 72px;
  gap: 10px;
  min-height: 130px;
  padding: 20px 16px;
  background-color: var(--color-background);
  border-radius: 10px;
}

@media (min-width: 500px) {
  .course-card {
    grid-template-columns: 1fr 120px;
    min-height: 174px;
    padding: 24px;
  }
}

@media (min-width: 1500px) {
  .course-card {
    min-height: 222px;
  }
}

.course-card__title {
  margin-top: 5px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.05;
  color: inherit;
  text-decoration: none;
  word-wrap: break-word;
  outline: none;
}

@media (min-width: 500px) {
  .course-card__title {
    margin-top: 20px;
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .course-card__title {
    font-size: 20px;
  }
}

.course-card__title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

@media (min-width: 768px) {
  .course-card__title::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 10px;
    transition: transform 0.3s;
  }

  .course-card__title:focus::after,
  .course-card__title:hover::after {
    z-index: -1;
    background-color: var(--card-background);
    transform: scale(1.025);
  }
}

.course-card__pic {
  display: block;
  max-width: 100%;
}
</style>
