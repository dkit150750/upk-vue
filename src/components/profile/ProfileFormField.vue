<template>
  <div class="profile-form-field">
    <label :class="classObject">
      {{ label }}
      <input
        class="profile-form-field__input"
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
    <span class="profile-form-field__error" v-if="firstError">
      {{ firstError }}&nbsp;
    </span>
  </div>
</template>

<script>
export default {
  name: 'ProfileFormField',

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
    error: {
      default: null,
    },
  },

  emits: {
    'update:modelValue': null,
  },

  data() {
    return {
      isFocus: false,
    };
  },

  computed: {
    firstError() {
      if (Array.isArray(this.error)) {
        return this.error[0];
      }
      return this.error;
    },

    classObject() {
      return {
        'profile-form-field__label': true,
        'profile-form-field__label--focus': this.isFocus && !this.error,
        'profile-form-field__label--error': !!this.error,
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
.profile-form-field {
  margin-bottom: 16px;
}

.profile-form-field__label {
  --shadow-color: hsl(0, 0%, 89%);
  --background-color: var(--color-gray-0);
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  padding: 16px 18px 10px;
  font-size: 13px;
  color: var(--color-gray-500);
  background-color: var(--background-color);
  border-radius: 10px;
  box-shadow: 0 0 0 1.5px var(--shadow-color);
  transition: all 0.3s;
}

.profile-form-field__label--focus,
.profile-form-field__label:not(.profile-form-field__label--error):hover {
  --shadow-color: hsl(240, 5%, 70%);
}
.profile-form-field__label--error {
  --shadow-color: var(--color-red-700);
  --background-color: var(--color-red-100);
}

.profile-form-field__input {
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

.profile-form-field__error {
  font-size: 12px;
  line-height: 2.4;
  color: var(--color-red-700);
}
</style>
