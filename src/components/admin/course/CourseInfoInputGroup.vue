<template>
  <div class="admin-input-group">
    <label class="admin-input-group__label" :for="id">{{ label }}</label>
    <textarea
      class="admin-input-group__input admin-input-group__input--textarea"
      :id="id"
      :name="name"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CourseInfoInputGroup',

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
  },
};
</script>

<style>
.admin-input-group__label {
  display: block;
  margin-bottom: 16px;
  font-size: 20px;
}

.admin-input-group__input {
  display: block;
  width: 100%;
  padding: 5px;
  font: inherit;
  font-size: 15px;
  background-color: var(--color-gray-70);
  border: 0;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 2px 0 0 var(--color-gray-200);
}

.admin-input-group__input:focus {
  box-shadow: 0 0 0 2px var(--color-primary-800);
}

.admin-input-group__input--textarea {
  min-height: 100px;
  line-height: 1.2;
  resize: none;
}

.admin-input-group__input--textarea-name {
  min-height: 70px;
}
</style>
