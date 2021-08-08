<template>
  <div class="course-information" ref="course">
    <div class="course-information__inner">
      <h1 class="course-information__title" v-if="title">
        {{ title }}
      </h1>
      <template v-else>
        <span class="course-information__title-null"></span>
        <span
          class="
            course-information__title-null course-information__title-null--short
          "
        ></span>
      </template>
      <div class="course-information__pic">
        <div class="course-information__pic-wrapper">
          <span
            class="course-card__pic-null"
            v-if="picture === 'loading'"
          ></span>
          <img
            class="course-information__pic-img"
            v-else-if="picture"
            :src="picture"
            :alt="title"
          />
          <img
            class="course-information__pic-img"
            v-else
            :src="require('@/assets/images/picture.webp')"
            :alt="title"
          />
        </div>
      </div>
      <p class="course-information__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseInformation',

  props: {
    title: {
      type: String,
    },
    picture: {
      type: String,
    },
    description: {
      type: String,
    },
    background: {
      type: String,
      default: 'hsl(60, 11%, 94%)',
    },
  },
};
</script>

<style>
.course-information {
  max-width: 388px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: v-bind(background);
  border-radius: 10px;
}

@media (min-width: 768px) {
  .course-information {
    max-width: 700px;
  }
}

@media (min-width: 768px) {
  .course-information {
    max-width: 700px;
  }
}

@media (min-width: 1024px) {
  .course-information {
    max-width: 946px;
    border-radius: 20px;
  }
}

@media (min-width: 1280px) {
  .course-information {
    max-width: 100%;
  }
}

.course-information__inner {
  display: grid;
  gap: 10px;
  padding: 50px 24px 40px;
  margin: 0 -10px;
}

@media (min-width: 388px) {
  .course-information__inner {
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .course-information__inner {
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 196px;
    gap: 16px 40px;
    padding: 48px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .course-information__inner {
    grid-template-columns: 1fr 336px;
    gap: 20px 105px;
    max-width: 100%;
  }
}

@media (min-width: 1280px) {
  .course-information__inner {
    grid-template-columns: 1fr 470px;
    gap: 24px 70px;
    max-width: 1270px;
    padding: 80px 58px 68px;
  }
}

.course-information__title {
  margin: 0;
  font-size: 28px;
}

@media (min-width: 768px) {
  .course-information__title {
    font-size: 32px;
  }
}

@media (min-width: 1024px) {
  .course-information__title {
    font-size: 36px;
  }
}

@media (min-width: 1280px) {
  .course-information__title {
    font-size: 50px;
  }
}

.course-information__title-null {
  display: block;
  height: 1em;
  background-color: var(--color-gray-100);
}

.course-information__title-null--short {
  max-width: 200px;
}

.course-information__pic {
  margin-top: 16px;
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .course-information__pic {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    margin: 0;
  }
}

.course-information__pic-wrapper {
  position: relative;
  padding-bottom: 100%;
}

.course-information__pic-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.course-card__pic-null {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-gray-100);
}

.course-information__description {
  align-self: flex-start;
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
}

@media (min-width: 1280px) {
  .course-information__description {
    max-width: 570px;
    font-size: 18px;
  }
}
</style>
