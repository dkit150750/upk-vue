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
  <FlashMessage :message="message" @close="message = null" />
</template>

<script>
import AuthService from '@/services/AuthService';
import { getError } from '@/utils/helpers';

import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import LoginCardField from '@/components/login-card/LoginCardField.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'TheResetPassword',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardField,
    LoginFooter,
    FlashMessage,
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

  computed: {
    isDisabled() {
      if (Object.values(this.user).includes('')) {
        return true;
      }
      if (this.user.password !== this.user.password_confirmation) {
        return true;
      }
      return false;
    },
  },

  methods: {
    async resetPassword() {
      if (this.isDisabled) {
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
        this.message = 'Пароль изменен';
      } catch (error) {
        this.error = getError(error);
      }
    },
  },

  watch: {
    user: {
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
