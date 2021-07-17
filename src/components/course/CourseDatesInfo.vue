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
      type: String,
      required: true,
    },
    placesAll: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.course-dates__time {
  display: block;
}

.course-dates__places {
  display: block;
}
</style>
