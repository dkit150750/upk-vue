<template>
  <div class="course-lectures">
    <div class="course-lecture" v-for="lecture in lectures" :key="lecture.id">
      <span class="course-lecture__date">{{ lecture.date }}</span>
      <button
        class="course-lecture__remove"
        aria-label="удалить запись"
      ></button>
      <span class="course-lecture__time">{{ lecture.time }}</span>
      <span class="course-lecture__users"
        >Мест: {{ lecture.places }}/{{ lecture.total_places }}</span
      >
      <a class="course-lecture__users-list" href="./users.html">Участники</a>
    </div>
  </div>
  <CourseInfoDatesAdd />
</template>

<script>
export default {
  name: 'CourseInfoLectures',

  props: {
    lectures: {
      taype: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.course-lectures {
  display: grid;
  grid-template-columns: max-content;
  gap: 30px;
  margin-bottom: 50px;
}

@media (min-width: 640px) {
  .course-lectures {
    grid-template-columns: max-content max-content;
  }
}

.course-lecture {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 10px 40px;
  padding: 20px;
  background-color: var(--color-gray-70);
  border-radius: 10px;
}

.course-lecture__date {
  font-size: 18px;
  font-weight: 600;
}

.course-lecture__remove {
  grid-column: 2 /3;
  grid-row: 1 / 3;
  align-items: flex-start;
  justify-self: flex-end;
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: var(--color-primary-800);
  cursor: pointer;
  border-radius: 5px;
}

.course-lecture__remove::before,
.course-lecture__remove::after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 60%;
  height: 3px;
  background-color: var(--color-gray-50);
  border-radius: 5px;
  content: '';
}

.course-lecture__remove::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.course-lecture__remove::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.course-lecture__time {
  font-weight: 500;
}

.course-lecture__users-list {
  font-weight: 500;
  color: var(--color-primary-800);
  text-decoration: none;
}
</style>
