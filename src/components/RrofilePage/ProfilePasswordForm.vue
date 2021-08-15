<template>
  <form class="profile-section-form" @submit.prevent="updatePassword">
    <ProfileFormField
      label="Текущий пароль"
      name="current_password"
      type="password"
      autocomplete="new-password"
      placeholder="password"
      v-model.trim="user.current_password"
      :error="error.current_password"
    />
    <ProfileFormField
      label="Пароль"
      name="password"
      type="password"
      autocomplete="new-password"
      placeholder="password"
      v-model.trim="user.password"
      :error="error.password"
    />
    <ProfileFormField
      label="Подтвердить пароль"
      name="password_confirmation"
      type="password"
      autocomplete="new-password"
      placeholder="password"
      v-model.trim="user.password_confirmation"
      :error="error.password_confirmation"
    />
    <ProfileFormButton :disabled="isDisabled" />
  </form>
</template>

<script>
import AuthService from '@/services/AuthService';
import { getErrorData } from '@/utils/helpers';

import ProfileFormField from '@/components/RrofilePage/ProfileFormField.vue';
import ProfileFormButton from '@/components/RrofilePage/ProfileFormButton.vue';

export default {
  name: 'ProfilePasswordForm',

  components: {
    ProfileFormField,
    ProfileFormButton,
  },

  emits: {
    update: null,
  },

  data() {
    return {
      user: {
        current_password: '',
        password: '',
        password_confirmation: '',
      },
      error: {
        current_password: null,
        password: null,
        password_confirmation: null,
      },
      isLoading: false,
    };
  },

  computed: {
    isDisabled() {
      if (this.isLoading) {
        return true;
      }

      if (Object.values(this.user).includes('')) {
        return true;
      }
      return false;
    },
  },

  methods: {
    async updatePassword() {
      if (!this.validate()) {
        return;
      }
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;

      this.error = {
        current_password: null,
        password: null,
        password_confirmation: null,
      };
      const payload = this.user;

      try {
        await AuthService.updatePassword(payload);
        this.$emit('update');
        this.user = {
          current_password: null,
          password: null,
          password_confirmation: null,
        };
      } catch (error) {
        this.error = getErrorData(error);
      }

      this.isLoading = false;
    },

    validate() {
      let isValid = true;

      if (this.user.password.length < 8) {
        this.error.password = 'Длина пароля меньше 8 символов';
        isValid = false;
      }

      if (this.user.password !== this.user.password_confirmation) {
        this.error.password_confirmation = 'Пароли не совпадают';
        isValid = false;
      }

      return isValid;
    },
  },
};
</script>

<style>
.profile-section-form__buttons {
  display: flex;
  justify-content: space-between;
}
</style>
