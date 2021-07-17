<template>
  <label class="dates-item">
    <input
      class="dates-item__input"
      type="radio"
      name="date"
      :checked="shouldBeChecked"
      :value="id"
    />
    <span class="dates-item__value">{{ value }}</span>
  </label>
</template>

<script>
export default {
  name: 'CourseDatesListItem',

  props: {
    modelValue: Number,
    id: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },

  computed: {
    shouldBeChecked() {
      return this.modelValue === this.id;
    },
  },
};
</script>

<style>
.dates-item {
  position: relative;
}

.dates-item__value {
  position: relative;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
}

.dates-item__value::before {
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  content: '';
  background-color: var(--color-primary-800);
  transform: translateX(-50%);
}

.dates-item__input:checked + .dates-item__value::before {
  width: 100%;
}

.dates-item__input {
  position: absolute;
  appearance: none;
}
</style>
