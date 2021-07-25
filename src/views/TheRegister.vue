<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Зарегистрируйтесь"
      buttonName="Зарегистироваться"
      @formSubmit="register"
    >
      <LoginCardField
        label="Фамилия"
        id="lastname"
        name="lastname"
        type="text"
        autocomplete="family-name"
        placeholder="Степанов"
        v-model.trim="user.lastname"
        :error="error.lastname"
      />
      <LoginCardField
        label="Имя"
        id="name"
        name="name"
        type="text"
        autocomplete="given-name"
        placeholder="Валентин"
        v-model.trim="user.name"
        :error="error.name"
      />
      <LoginCardField
        label="Отчество"
        id="patronymic"
        name="patronymic"
        type="text"
        autocomplete="additional-name"
        placeholder="Сергеевич"
        v-model.trim="user.patronymic"
        :error="error.patronymic"
      />
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
      <router-link class="login-footer__link" :to="{ name: 'login' }"
        >Войти</router-link
      >
    </LoginFooter>
  </LoginWrapper>
</template>

<script>
import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import LoginCardField from '@/components/login-card/LoginCardField.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';

import AuthService from '@/services/AuthService';
import { getError } from '@/utils/helpers';

export default {
  name: 'TheLogin',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardField,
    LoginFooter,
  },

  data() {
    return {
      user: {
        lastname: null,
        name: null,
        patronymic: null,
        email: null,
        password: 'password',
        password_confirmation: 'password',
      },
      error: {
        lastname: null,
        name: null,
        patronymic: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },

  methods: {
    async register() {
      this.error = null;
      const payload = this.user;

      try {
        await AuthService.registerUser(payload);
        this.$router.push({ name: 'profile' });
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
};
</script>
