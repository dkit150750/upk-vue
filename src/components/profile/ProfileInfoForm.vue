<template>
  <form class="profile-info-form">
    <slot />
    <div class="profile-info-form__buttons">
      <button class="profile-info-form__button" type="submit" disabled>
        Сохранить
      </button>
      <slot name="footer" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProfileInfoForm',
};
</script>

<style>
.profile-info-form__buttons {
  display: flex;
  justify-content: space-between;
}

.profile-info-form__button {
  padding: 12px 24px;
  margin-top: 25px;
  color: var(--color-gray-0);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 5px;
  transition: background-color 0.15s ease-out;
}

.profile-info-form__button:disabled {
  --color-gray-0: hsl(48, 4%, 50%);
  --color-primary-800: hsl(0, 0%, 90%);
  cursor: auto;
}

.profile-info-form__button:not(:disabled):focus,
.profile-info-form__button:not(:disabled):hover {
  background-color: var(--color-gray-900);
}
</style>
