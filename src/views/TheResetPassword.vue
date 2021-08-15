<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Сбросить пароль"
      buttonName="Сбросить"
      @formSubmit="resetPassword"
    >
      <LoginCardField
        label="Email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        v-model.trim="user.email"
        :error="error.email"
      />
      <LoginCardField
        label="Пароль"
        id="password"
        name="password"
        type="password"
        autocomplete="new-password"
        placeholder="password"
        v-model.trim="user.password"
        :error="error.password"
      />
      <LoginCardField
        label="Подтвердить пароль"
        id="password-confirm"
        name="password-confirm"
        type="password"
        autocomplete="new-password"
        placeholder="password"
        v-model.trim="user.password_confirmation"
        :error="error.password_confirmation"
      />
    </LoginCard>
    <LoginFooter>
      У вас уже есть аккаунт?
      <router-link class="login-footer__link" :to="{ name: 'login' }">
        Войти
      </router-link>
    </LoginFooter>
  </LoginWrapper>
</template>

<script>
import AuthService from '@/services/AuthService';
import { getErrorData } from '@/utils/helpers';

import LoginWrapper from '@/components/LoginCard/LoginWrapper.vue';
import LoginCard from '@/components/LoginCard/LoginCard.vue';
import LoginCardField from '@/components/LoginCard/LoginCardField.vue';
import LoginFooter from '@/components/LoginCard/LoginFooter.vue';

export default {
  name: 'TheResetPassword',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardField,
    LoginFooter,
  },

  data() {
    return {
      user: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      error: {
        email: null,
        password: null,
        password_confirmation: null,
      },
      message: null,
    };
  },

  methods: {
    async resetPassword() {
      this.error = {
        email: null,
        password: null,
        password_confirmation: null,
      };

      if (!this.validate()) {
        return;
      }
      this.message = null;
      const payload = this.user;
      payload.token = this.$route.query.token;

      try {
        await AuthService.resetPassword(payload);
        this.$router.push({ name: 'login' });
      } catch (error) {
        this.error = getErrorData(error);
      }
    },

    validate() {
      let isValid = true;

      if (!/@[a-zA-Z0-9-]+/i.test(this.user.email)) {
        this.error.email = 'Неправильно указан email';
        isValid = false;
      }

      if (!this.user.password) {
        this.error.password = 'Введите пароль';
        isValid = false;
      }

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
