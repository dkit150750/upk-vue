<template>
  <form class="course-dates" action="">
    <h2 class="course-dates__title">Выбрать дату</h2>

    <div class="course-dates__wrapper">
      <div class="dates__list">
        <label class="date" v-for="date in dates" :key="date.id">
          <input
            class="date__input"
            type="radio"
            :value="date.id"
            v-model="modedlDate"
          />
          <span class="date__value">{{ date.value }}</span>
        </label>
      </div>
      <span class="dates__time">{{ selectedDate.time }}</span>
      <span class="dates__count"
        >Мест: {{ selectedDate.places }}/{{ selectedDate.placesAll }}</span
      >
      <span class="dates__count">Выбрано: {{ modedlDate }}</span>
    </div>
    <button class="course-dates__button" type="submit">Записаться</button>
  </form>
</template>

<script>
export default {
  name: 'CourseDates',

  props: {
    dates: {
      type: Array,
    },
  },

  data() {
    return {
      modedlDate: this.dates[0].id,
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
