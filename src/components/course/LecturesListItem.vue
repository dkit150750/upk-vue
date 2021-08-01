<template>
  <label class="lecture">
    <input
      class="lecture__input"
      type="radio"
      name="date"
      :checked="shouldBeChecked"
      :value="id"
    />
    <span class="lecture__date">{{ fullDate }}</span>
  </label>
</template>

<script>
export default {
  name: 'LecturesListItem',

  props: {
    modelValue: Number,
    id: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },

  months: [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ],

  computed: {
    shouldBeChecked() {
      return this.modelValue === this.id;
    },
    fullDate() {
      const dateArray = this.date.split('-');
      const month = this.$options.months[parseInt(dateArray[1])];
      return `${dateArray[2]} ${month} ${dateArray[0]}`;
    },
  },
};
</script>

<style>
.lecture {
  position: relative;
}

.lecture__date {
  position: relative;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
}

.lecture__date::before {
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  content: '';
  background-color: var(--color-primary-800);
  transform: translateX(-50%);
}

.lecture__input:checked + .lecture__date::before {
  width: 100%;
}

.lecture__input {
  position: absolute;
  appearance: none;
}
</style>
