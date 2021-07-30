<template>
  <div class="admin-course-field">
    <label class="admin-course-field__label" :for="id">{{ label }}</label>
    <template v-if="type">
      <input
        class="admin-course-field__input"
        :id="id"
        :name="name"
        :value="modelValue"
        :type="type"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      />
    </template>
    <template v-else>
      <textarea
        class="admin-course-field__input admin-course-field__input--textarea"
        :id="id"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      ></textarea>
    </template>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CourseInfoField',

  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
  },

  emits: {
    'update:modelValue': null,
  },
};
</script>

<style>
.admin-course-field__label {
  display: block;
  margin-bottom: 16px;
  font-size: 20px;
}

.admin-course-field__input {
  display: block;
  width: 100%;
  padding: 10px;
  font: inherit;
  font-size: 16px;
  background-color: var(--color-gray-70);
  border: 0;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 2px 0 0 var(--color-gray-200);
}

.admin-course-field__input:focus {
  box-shadow: 0 0 0 2px var(--color-primary-800);
}

.admin-course-field__input--textarea {
  height: 100px;
  line-height: 1.2;
  resize: none;
}

.admin-course-field__input--textarea-name {
  height: 70px;
}

.input-group__input--textarea-color {
  min-height: auto;
  height: 39px;
}
</style>
