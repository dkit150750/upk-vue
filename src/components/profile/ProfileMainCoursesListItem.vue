<template>
  <article class="main-course-card">
    <p class="main-course-card__date">
      23 сентября 2019<br />
      12:40
    </p>
    <a class="main-course-card__title" href="profession.html">
      Сетевое и сестемное администрирование
    </a>
    <div class="main-course-card__pic-wrapper">
      <img
        class="main-course-card__pic"
        :src="require(`@/assets/${imgSrc}`)"
        :alt="title"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProfileMainCoursesListItem',

  props: {
    courseId: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.main-course-card {
  position: relative;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: minmax(10px, 1fr) 72px;
  gap: 10px;
  max-width: 600px;
  min-height: 130px;
  padding: 20px 16px;
  background-color: var(--profile-card-backgrouind);
  border-radius: 10px;
}

@media (min-width: 500px) {
  .main-course-card {
    grid-template-columns: 1fr 120px;
    min-height: 174px;
    padding: 24px;
  }
}

.main-course-card__date {
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
}

.main-course-card__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.05;
  color: inherit;
  text-decoration: none;
  word-wrap: break-word;
  outline: none;
}

@media (min-width: 500px) {
  .main-course-card__title {
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .main-course-card__title {
    font-size: 20px;
  }
}

.main-course-card__title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.main-course-card__pic-wrapper {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
}

.main-course-card__pic {
  display: block;
  max-width: 100%;
}
</style>
