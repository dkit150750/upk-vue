<template>
  <div :class="classObject">
    <label class="profile-input-group__label">
      {{ label }}
      <input
        class="profile-input-group__input"
        :name="name"
        :type="type"
        :value="modelValue"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        @focus="addFocus"
        @blur="removeFosuc"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfoFormInputGroup',

  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    autocomplete: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isFocus: false,
    };
  },

  computed: {
    classObject() {
      return {
        'profile-input-group': true,
        'profile-input-group--active': this.isFocus,
      };
    },
  },

  methods: {
    addFocus() {
      this.isFocus = true;
    },
    removeFosuc() {
      this.isFocus = false;
    },
  },
};
</script>

<style>
.profile-input-group {
  --shadow-color: hsl(0, 0%, 89%);
  display: block;
  padding: 16px 18px 10px;
  margin-bottom: 16px;
  background-color: var(--color-gray-0);
  border-radius: 10px;
  box-shadow: 0 0 0 1.5px var(--shadow-color);
  transition: all 0.3s;
}

.profile-input-group--active,
.profile-input-group:hover {
  --shadow-color: hsl(240, 5%, 70%);
}

.profile-input-group__label {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  font-size: 13px;
  color: var(--color-gray-500);
}

.profile-input-group__input {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  font-family: inherit;
  font-size: 16px;
  color: var(--color-gray-900);
  background-color: transparent;
  border: 0;
  outline: none;
}
</style>
