<template>
  <form class="add-date">
    <div class="date-input-group">
      <label class="date-input-group__label" for="date">
        Дата проведения
      </label>
      <input
        class="date-input-group__input"
        id="date"
        name="date"
        type="date"
      />
    </div>
    <div class="date-input-group">
      <label class="date-input-group__label" for="date">
        Время проведения
      </label>
      <input
        class="date-input-group__input"
        id="date"
        name="date"
        type="time"
      />
    </div>
    <div class="date-input-group">
      <label class="date-input-group__label" for="count">
        Количество мест
      </label>
      <input
        class="date-input-group__input"
        id="count"
        name="time"
        value="16"
        type="text"
      />
    </div>
    <button class="add-date__button" type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  name: 'CourseInfoDatesAdd',
};
</script>

<style>
.add-date {
  display: grid;
  gap: 20px;
  max-width: 350px;
  padding: 20px;
  margin-bottom: 50px;
  background-color: var(--color-gray-70);
  border-radius: 10px;
}

.date-input-group {
  display: grid;
  gap: 6px;
  max-width: 300px;
}

.date-input-group__label {
  font-size: 16px;
  font-weight: 500;
}

.date-input-group__input {
  display: block;
  width: 100%;
  padding: 8px;
  font-family: inherit;
  font-size: 16px;
  color: inherit;
  background-color: var(--color-gray-50);
  border: 0;
  border-radius: 5px;
  outline: none;
}

.date-input-group__input:focus {
  box-shadow: 0 0 0 2px var(--color-primary-800);
}

.add-date__button {
  display: block;
  justify-self: start;
  padding: 13px 20px;
  margin-top: 10px;
  font-family: inherit;
  font-size: 16px;
  color: var(--color-gray-50);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 6px;
}
</style>
