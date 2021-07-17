<template>
  <form class="course-dates" action="">
    <h2 class="course-dates__title">Выбрать дату</h2>

    <div class="dates">
      <div class="dates__list">
        <label class="date">
          <input class="date__input" type="radio" name="date" checked />
          <span class="date__value"> 2 сентября </span>
        </label>
        <label class="date">
          <input class="date__input" type="radio" name="date" />
          <span class="date__value"> 5 сентября </span>
        </label>
        <label class="date">
          <input class="date__input" type="radio" name="date" />
          <span class="date__value"> 12 сентября </span>
        </label>
      </div>
      <span class="dates__time">12:20</span>
      <span class="dates__count">Мест: 12/16</span>
    </div>
    <button class="course-dates__button" type="submit">Записаться</button>
  </form>
</template>

<script>
export default {
  name: 'CourseDates',
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
