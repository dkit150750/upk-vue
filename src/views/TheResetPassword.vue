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
import { getError } from '@/utils/helpers';

import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import LoginCardField from '@/components/login-card/LoginCardField.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';

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
      if (!this.validate()) {
        return;
      }

      this.error = {
        email: null,
        password: null,
        password_confirmation: null,
      };
      this.message = null;
      const payload = this.user;
      payload.token = this.$route.query.token;

      try {
        await AuthService.resetPassword(payload);
        this.$router.push({ name: 'login' });
      } catch (error) {
        this.error = getError(error);
      }
    },

    validate() {
      let isValid = true;

      if (!/@[a-zA-Z0-9-]+/i.test(this.user.email)) {
        this.error.email = 'Неправильный формат почты';
        isValid = false;
      }

      if (!this.user.password) {
        this.error.password = 'Введите пароль';
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
