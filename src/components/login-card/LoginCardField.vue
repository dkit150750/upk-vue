<template>
  <div :class="classObject">
    <label class="login-field__label" :for="id">{{ label }}</label>
    <input
      class="login-field__input"
      :id="id"
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
    <span class="login-field__error" v-if="firstError">
      {{ firstError }}&nbsp;
    </span>
  </div>
</template>

<script>
export default {
  name: 'LoginCardField',

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
        'login-field': true,
        'login-field--fosuc': this.isFocus,
        'login-field--error': !!this.error,
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
.login-field {
  position: relative;
  display: grid;
}

.login-field__label {
  display: block;
  padding-bottom: 5px;
  font-weight: 500;
}

.login-field__input {
  display: block;
  width: 100%;
  padding: 10px;
  padding-right: 0;
  padding-left: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  color: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-gray-100);
  outline: none;
}

.login-field__input:focus,
.login-field__input:hover {
  border-color: var(--color-primary-800);
}

.login-field::before {
  position: absolute;
  bottom: -1px;
  left: 50%;
  display: block;
  width: 0;
  height: 2px;
  content: '';
  background-color: var(--color-primary-800);
  transition: all 0.3s;
  transform: translateX(-50%);
}

.login-field--fosuc::before {
  width: 100%;
}

.login-field--error::before {
  width: 100%;
  background-color: var(--color-red-700);
}

.login-field__error {
  position: absolute;
  top: 100%;
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-red-700);
}
</style>
