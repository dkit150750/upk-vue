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

.light .profile-form-field__label {
  --field-color: var(--color-gray-500);
  --field-shadow-color: var(--color-gray-300);
  --field-background: var(--color-white);
}

.dark .profile-form-field__label {
  --field-color: var(--color-gray-100);
  --field-shadow-color: var(--color-gray-800);
  --field-background: var(--color-gray-1100);
}

.profile-form-field__label {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  padding: 16px 18px 10px;
  font-size: 13px;
  color: var(--field-color);
  background-color: var(--field-background);
  border-radius: 10px;
  box-shadow: 0 0 0 1.5px var(--field-shadow-color);
  transition: all 0.3s;
}

.light .profile-form-field__label--focus,
.light .profile-form-field__label:not(.profile-form-field__label--error):hover {
  --field-shadow-color: var(--color-gray-500);
}

.dark .profile-form-field__label--focus,
.dark .profile-form-field__label:not(.profile-form-field__label--error):hover {
  --field-shadow-color: var(--color-gray-400);
}

.light .profile-form-field__label--error {
  --field-shadow-color: var(--color-red-600);
  --field-background: var(--color-red-100);
}

.dark .profile-form-field__label--error {
  --field-shadow-color: var(--color-red-500);
  --field-background: var(--color-red-900);
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

.light .profile-form-field__input {
  color: var(--color-gray-900);
}

.dark .profile-form-field__input {
  color: var(--color-gray-400);
}

.profile-form-field__error {
  font-size: 12px;
  line-height: 2.4;
  color: var(--color-red-700);
}
</style>
