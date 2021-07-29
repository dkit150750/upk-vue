<template>
  <article class="admin-course">
    <router-link
      class="admin-course__title"
      :to="{ name: 'admin.course', params: { courseId: courseId } }"
    >
      {{ title }}
    </router-link>
    <div class="admin-course__pic-wrapper">
      <img class="admin-course__pic" :src="picture" :alt="title" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'CoursesListItem',

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
  },
};
</script>

<style>
.admin-course {
  --card-background: hsl(60, 11%, 94%);
  position: relative;
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: minmax(10px, 1fr) 72px;
  gap: 10px;
  max-width: 600px;
  min-height: 130px;
  padding: 20px 16px;
  background-color: var(--card-background);
  border-radius: 10px;
}

@media (min-width: 500px) {
  .admin-course {
    grid-template-columns: 1fr 120px;
    min-height: 174px;
    padding: 24px;
  }
}

.admin-course__date {
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
}

.admin-course__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.05;
  color: inherit;
  text-decoration: none;
  word-wrap: break-word;
  outline: none;
}

@media (min-width: 500px) {
  .admin-course__title {
    margin-top: 10px;
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .admin-course__title {
    font-size: 20px;
  }
}

.admin-course__title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.admin-course__pic {
  display: block;
  max-width: 100%;
}
</style>
