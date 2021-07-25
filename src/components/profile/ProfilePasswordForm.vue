<template>
  <form class="profile-info-form" @submit.prevent="updatePassword">
    <ProfileFormField
      label="Текущий пароль"
      name="current_password"
      type="password"
      v-model.trim="password.current_password"
      autocomplete="new-password"
      placeholder="password"
      :error="error.current_password"
    />
    <ProfileFormField
      label="Пароль"
      name="password"
      type="password"
      v-model.trim="password.password"
      autocomplete="new-password"
      placeholder="password"
      :error="error.password"
    />
    <ProfileFormField
      label="Подтвердить пароль"
      name="password_confirmation"
      type="password"
      v-model.trim="password.password_confirmation"
      autocomplete="new-password"
      placeholder="password"
      :error="error.password_confirmation"
    />
    <div class="profile-info-form__buttons">
      <button
        class="profile-info-form__button"
        type="submit"
        :disabled="isDisabled"
      >
        Сохранить
      </button>
    </div>
  </form>
  <FlashMessage :message="message" @close="message = null" />
</template>

<script>
import AuthService from '@/services/AuthService';
import { getError } from '@/utils/helpers';

import ProfileFormField from '@/components/profile/ProfileFormField.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'ProfilePasswordForm',

  components: {
    ProfileFormField,
    FlashMessage,
  },

  data() {
    return {
      password: {
        current_password: '',
        password: '',
        password_confirmation: '',
      },
      error: {
        current_password: null,
        password: null,
        password_confirmation: null,
      },
      message: null,
    };
  },

  computed: {
    isDisabled() {
      if (Object.values(this.password).includes('')) {
        return true;
      }
      return false;
    },
  },

  methods: {
    async updatePassword() {
      this.error = {
        current_password: null,
        password: null,
        password_confirmation: null,
      };
      this.message = null;
      const payload = this.password;
      try {
        await AuthService.updatePassword(payload);
        this.message = 'Пароль обновлен';
      } catch (error) {
        this.error = getError(error);
      }
    },
  },

  watch: {
    password: {
      handler(password) {
        if (password.password_confirmation === '') {
          return;
        }

        if (password.password !== password.password_confirmation) {
          this.error.password_confirmation = 'Пароли не совпадают';
        } else {
          this.error.password_confirmation = null;
        }
      },
      deep: true,
    },
  },
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
