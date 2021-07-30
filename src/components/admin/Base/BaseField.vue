<template>
  <div class="admin-field">
    <label class="admin-field__label" :for="id">{{ label }}</label>
    <template v-if="type">
      <input
        class="admin-field__input"
        :id="id"
        :name="name"
        :value="modelValue"
        :type="type"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
    <template v-else>
      <textarea
        class="admin-field__input admin-field__input--textarea"
        :id="id"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </template>
  </div>
</template>

<script>
export default {
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
.admin-field {
  display: grid;
  grid-auto-rows: min-content;
  gap: 6px;
}

.admin-field__label {
  font-size: 16px;
  font-weight: 500;
}

.admin-field__input {
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

.admin-field__input:focus {
  box-shadow: 0 0 0 2px var(--color-primary-800);
}

.admin-field__input--textarea {
  height: 100px;
  line-height: 1.2;
  resize: none;
}

.admin-field__input--textarea-name {
  height: 70px;
}

.input-group__input--textarea-color {
  min-height: auto;
  height: 39px;
}
</style>
