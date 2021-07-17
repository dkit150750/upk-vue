<template>
  <span class="course-dates__time">{{ time }}</span>
  <span class="course-dates__places">Мест: {{ places }}/{{ placesAll }}</span>
</template>

<script>
export default {
  name: 'CourseDatesInfo',

  props: {
    time: {
      type: String,
      required: true,
    },
    places: {
      type: Number,
      required: true,
    },
    placesAll: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.course-dates__time {
  display: block;
  font-size: 17px;
}

.course-dates__places {
  display: block;
  margin-top: 3px;
  font-size: 17px;
}
</style>
