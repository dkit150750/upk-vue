<template>
  <div :class="classObject">
    <label class="login-input-group__label" :for="id">{{ label }}</label>
    <input
      class="login-input-group__input"
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
  </div>
</template>

<script>
export default {
  name: 'LoginCardInputGroup',

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
  },

  data() {
    return {
      isFocus: false,
    };
  },

  computed: {
    classObject() {
      return {
        'login-input-group': true,
        'login-input-group--active': this.isFocus,
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
.login-input-group {
  position: relative;
  display: grid;
}

.login-input-group__label {
  display: block;
  padding-bottom: 5px;
  font-weight: 500;
}

.login-input-group__input {
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
  border-bottom: 1px solid var(--color-gray-100);
  outline: none;
}

.login-input-group__input:focus,
.login-input-group__input:hover {
  border-color: var(--color-primary-800);
}

.login-input-group::before {
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

.login-input-group--active::before {
  width: 100%;
}
</style>
