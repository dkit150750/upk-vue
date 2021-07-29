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
import AuthService from '@/services/AuthService';
import { getErrorData } from '@/utils/helpers';

import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import LoginCardField from '@/components/login-card/LoginCardField.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';

export default {
  name: 'TheRegister',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardField,
    LoginFooter,
  },

  data() {
    return {
      user: {
        lastname: '',
        name: '',
        patronymic: '',
        email: '',
        password: '',
        password_confirmation: '',
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
      if (!this.validate()) {
        return;
      }

      this.error = {
        lastname: null,
        name: null,
        patronymic: null,
        email: null,
        password: null,
        password_confirmation: null,
      };
      const payload = this.user;

      try {
        await AuthService.registerUser(payload);
        this.$router.push({ name: 'profile' });
      } catch (error) {
        this.error = getErrorData(error);
      }
    },

    validate() {
      let isValid = true;

      if (!this.user.lastname) {
        this.error.lastname = 'Введите фамилию';
        isValid = false;
      }

      if (!this.user.name) {
        this.error.name = 'Введите ммя';
        isValid = false;
      }

      if (!this.user.patronymic) {
        this.error.patronymic = 'Введите отчество';
        isValid = false;
      }

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
