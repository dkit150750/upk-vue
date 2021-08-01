<template>
  <div class="lecture-info">
    <span class="lecture-info__time"> Время: {{ time }}</span>
    <span class="lecture-info__cabinet">Кабинет: {{ cabinet }}</span>
    <span class="lecture-info__places">
      Мест: {{ places }}/{{ total_places }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'LecturesInfo',

  props: {
    time: {
      type: String,
      required: true,
    },
    cabinet: {
      type: String,
      default: '',
    },
    places: {
      type: Number,
      required: true,
    },
    total_places: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.lecture-info {
  display: grid;
  gap: 5px;
}
.lecture-info__cabinet,
.lecture-info__places,
.lecture-info__time {
  font-size: 20px;
}
</style>
