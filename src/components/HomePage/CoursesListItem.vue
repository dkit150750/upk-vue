<template>
  <article class="course-card">
    <router-link
      class="course-card__title"
      v-if="courseId"
      :to="{ name: 'course', params: { courseId: courseId } }"
    >
      {{ title }}
    </router-link>
    <span v-else class="course-card__title-null"></span>
    <div class="course-card__pic-wrapper">
      <span class="course-card__pic-null" v-if="picture === 'loading'"></span>
      <img
        class="course-card__pic"
        v-else-if="picture"
        :src="picture"
        :alt="title"
      />
      <img
        class="course-card__pic"
        v-else
        :src="require('@/assets/images/picture.webp')"
        :alt="title"
      />
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CourseListItem',

  props: {
    courseId: {
      type: Number,
    },
    title: {
      type: String,
    },
    picture: {
      type: String,
    },
    background: {
      type: String,
      default: null,
    },
  },

  computed: {
    ...mapGetters('theme', ['theme']),
    backgroundColor() {
      if (this.background) {
        return this.background;
      }
      if (this.theme === 'light') {
        return 'hsl(60, 10%, 95%)';
      }
      return '#232a34';
    },
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
  background-color: v-bind(backgroundColor);
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

.course-card__title::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

@media (min-width: 768px) {
  .course-card__title::before {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 10px;
    transition: transform 0.3s;
    background-color: v-bind(backgroundColor);
  }

  .course-card__title:focus::before,
  .course-card__title:hover::before {
    transform: scale(1.025);
  }
}

.course-card__title-null {
  display: block;
  height: 1em;
  background-color: var(--color-null);
}

.course-card__pic {
  display: block;
  max-width: 100%;
}

.course-card__pic-null {
  display: block;
  width: 100%;
  padding-top: 100%;
  background-color: var(--color-null);
}
</style>
