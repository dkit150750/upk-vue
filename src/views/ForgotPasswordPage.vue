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
      <router-link class="login-footer__link" :to="{ name: 'login' }">
        Войти
      </router-link>
    </LoginFooter>
  </LoginWrapper>
  <teleport to="body">
    <transition name="flash-message">
      <FlashMessage v-if="message" :message="message" @close="message = null" />
    </transition>
  </teleport>
</template>

<script>
import AuthService from '@/services/AuthService';
import { getErrorData } from '@/utils/helpers';

import LoginWrapper from '@/components/LoginCard/LoginWrapper.vue';
import LoginCard from '@/components/LoginCard/LoginCard.vue';
import LoginCardField from '@/components/LoginCard/LoginCardField.vue';
import LoginFooter from '@/components/LoginCard/LoginFooter.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'ForgotPasswordPage',

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
      this.error = {
        email: null,
      };

      if (!this.validate()) {
        return;
      }
      const payload = {
        email: this.email,
      };

      try {
        await AuthService.forgotPassword(payload);
        this.message = null;
        await this.$nextTick();
        this.message = 'Электронное письмо для сброса пароля отправлено';
        this.email = '';
      } catch (error) {
        this.error = getErrorData(error);
      }
    },

    validate() {
      let isValid = true;

      if (!/@[a-zA-Z0-9-]+/i.test(this.email)) {
        this.error.email = 'Неправильно указан email';
        isValid = false;
      }

      return isValid;
    },
  },
};
</script>
