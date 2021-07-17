<template>
  <div class="dates-list">
    <CourseDatesListItem
      v-for="date in dates"
      :key="date.id"
      :id="date.id"
      :value="date.value"
      :modelValue="modelValue"
      @change="$emit('update:modelValue', parseInt($event.target.value))"
    />
  </div>
</template>

<script>
import CourseDatesListItem from '@/components/course/CourseDatesListItem.vue';

export default {
  name: 'CourseDatesList',

  components: {
    CourseDatesListItem,
  },

  props: {
    modelValue: Number,
    dates: {
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
.dates-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-bottom: 20px;
}
</style>
