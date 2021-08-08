<template>
  <div class="lectures-list">
    <LecturesListItem
      v-for="lecture in lectures"
      :key="lecture.id"
      :id="lecture.id"
      :date="lecture.date"
      :modelValue="modelValue"
      @change="$emit('update:modelValue', parseInt($event.target.value))"
    />
  </div>
</template>

<script>
import LecturesListItem from '@/components/CoursesShow/LecturesListItem.vue';

export default {
  name: 'LecturesList',

  components: {
    LecturesListItem,
  },

  props: {
    modelValue: Number,
    lectures: {
      type: Array,
      default: () => [],
    },
  },

  emits: {
    'update:modelValue': null,
  },
};
</script>

<style>
.lectures-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
}
</style>
