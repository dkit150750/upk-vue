<template>
  <button class="profile-form-button" type="submit" :disabled="disabled">
    Сохранить
  </button>
</template>

<script>
export default {
  name: 'ProfileFormButton',

  props: {
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style>
.light .profile-form-button {
  --button-color: var(--color-white);
  --button-background: var(--color-primary-800);
}

.dark .profile-form-button {
  --button-color: var(--color-white);
  --button-background: var(--color-primary-600);
}

.profile-form-button {
  padding: 12px 24px;
  margin-top: 25px;
  color: var(--button-color);
  cursor: pointer;
  background-color: var(--button-background);
  border: 0;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.15s ease-out;
}

.light .profile-form-button:disabled {
  --button-color: var(--color-gray-600);
  --button-background: var(--color-gray-200);
}

.dark .profile-form-button:disabled {
  --button-color: var(--color-white);
  --button-background: var(--color-gray-500);
}

.profile-form-button:disabled {
  cursor: auto;
}

.light .profile-form-button:not(:disabled):focus,
.light .profile-form-button:not(:disabled):hover {
  --button-background: var(--color-gray-900);
}

.dark .profile-form-button:not(:disabled):focus,
.dark .profile-form-button:not(:disabled):hover {
  --button-background: var(--color-primary-800);
}
</style>
