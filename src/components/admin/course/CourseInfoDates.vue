<template>
  <div class="course-dates">
    <template v-if="dates.length">
      <div class="course-date" v-for="date in dates" :key="date.id">
        <span class="course-date__value">{{ date.value }}</span>
        <button
          class="course-date__remove"
          aria-label="удалить запись"
        ></button>
        <span class="course-date__time">{{ date.time }}</span>
        <span class="course-date__users"
          >Мест: {{ date.places }}/{{ date.placesAll }}</span
        >
        <a class="course-date__users-list" href="./users.html">Участники</a>
      </div>
    </template>
  </div>
  <CourseInfoDatesAdd />
</template>

<script>
import CourseInfoDatesAdd from '@/components/admin/course/CourseInfoDatesAdd.vue';

export default {
  name: 'CourseInfoDates',

  components: {
    CourseInfoDatesAdd,
  },

  props: {
    dates: {
      taype: Array,
      require: true,
    },
  },
};
</script>

<style>
.course-dates {
  display: grid;
  grid-template-columns: max-content;
  gap: 30px;
  margin-bottom: 50px;
}

@media (min-width: 640px) {
  .course-dates {
    grid-template-columns: max-content max-content;
  }
}

.course-date {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 10px 40px;
  padding: 20px;
  background-color: var(--color-gray-70);
  border-radius: 10px;
}

.course-date__value {
  font-size: 18px;
  font-weight: 600;
}

.course-date__remove {
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

.course-date__remove::before,
.course-date__remove::after {
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

.course-date__remove::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.course-date__remove::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.course-date__time {
  font-weight: 500;
}

.course-date__users-list {
  font-weight: 500;
  color: var(--color-primary-800);
  text-decoration: none;
}
</style>
