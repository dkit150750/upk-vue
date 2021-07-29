<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Восстановление пароля"
      buttonName="Отправить письмо"
      @formSubmit="forgotPassword"
    >
      <LoginCardField
        label="Email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        v-model.trim="email"
        :error="error.email"
      />
    </LoginCard>
    <LoginFooter>
      У вас уже есть аккаунт?
      <router-link class="login-footer__link" :to="{ name: 'login' }"
        >Войти</router-link
      >
    </LoginFooter>
  </LoginWrapper>
  <FlashMessage :message="message" @close="message = null" />
</template>

<script>
import AuthService from '@/services/AuthService';
import { getErrorData } from '@/utils/helpers';

import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import LoginCardField from '@/components/login-card/LoginCardField.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'TheForgotPassword',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardField,
    LoginFooter,
    FlashMessage,
  },

  data() {
    return {
      email: '',
      error: {
        email: null,
      },
      message: null,
    };
  },

  methods: {
    async forgotPassword() {
      if (!this.validate()) {
        return;
      }

      this.error = {
        email: null,
      };
      this.message = null;
      const payload = {
        email: this.email,
      };

      try {
        await AuthService.forgotPassword(payload);
        this.message = 'Электронное письмо для сброса пароля отправлено';
        this.email = '';
      } catch (error) {
        this.error = getErrorData(error);
      }
    },

    validate() {
      let isValid = true;

      if (!/@[a-zA-Z0-9-]+/i.test(this.email)) {
        this.error.email = 'Неправильный формат почты';
        isValid = false;
      }

      return isValid;
    },
  },
};
</script>
