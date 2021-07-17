<template>
  <form class="course-dates" action="">
    <h2 class="course-dates__title">Выбрать дату</h2>

    <div class="course-dates__wrapper">
      <CourseDatesList :dates="dates" v-model="modedlDate" />
      <CourseDatesInfo
        :time="selectedDate.time"
        :places="selectedDate.places"
        :placesAll="selectedDate.placesAll"
      />
    </div>
    <button class="course-dates__button" type="submit">Записаться</button>
  </form>
</template>

<script>
import CourseDatesList from '@/components/course/CourseDatesList.vue';
import CourseDatesInfo from '@/components/course/CourseDatesInfo.vue';

export default {
  name: 'CourseDates',

  components: {
    CourseDatesList,
    CourseDatesInfo,
  },

  props: {
    dates: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      modedlDate: parseInt(this.dates[0].id),
    };
  },

  computed: {
    selectedDate() {
      return this.dates.find((date) => date.id === parseInt(this.modedlDate));
    },
  },
};
</script>

<style>
.course-dates {
  padding: 20px 0;
}

@media (min-width: 550px) {
  .course-dates {
    padding: 40px 0;
  }
}

.course-dates__title {
  margin-bottom: 30px;
  font-weight: 600;
}

.course-dates__button {
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 15px 15px;
  margin-top: 40px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-gray-0);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 10px;
}
</style>
