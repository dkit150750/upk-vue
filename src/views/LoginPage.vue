<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Войти"
      buttonName="Войти"
      :isReset="true"
      @formSubmit="login"
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
        autocomplete="current-password"
        placeholder="password"
        v-model.trim="user.password"
        :error="error.password"
      />
    </LoginCard>
    <LoginFooter>
      Новый пользователь?
      <router-link class="login-footer__link" :to="{ name: 'register' }">
        Зарегистрируйтесь
      </router-link>
    </LoginFooter>
  </LoginWrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import AuthService from '@/services/AuthService';
import { getErrorData } from '@/utils/helpers';

import LoginWrapper from '@/components/LoginCard/LoginWrapper.vue';
import LoginCard from '@/components/LoginCard/LoginCard.vue';
import LoginCardField from '@/components/LoginCard/LoginCardField.vue';
import LoginFooter from '@/components/LoginCard/LoginFooter.vue';

export default {
  name: 'LoginPage',

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
      },
      error: {
        email: null,
        password: null,
      },
    };
  },

  computed: {
    ...mapGetters('auth', ['authUser']),
  },

  methods: {
    async login() {
      this.error = {
        email: null,
        password: null,
      };

      if (!this.validate()) {
        return;
      }

      const payload = this.user;

      try {
        await AuthService.login(payload);
        await this.$store.dispatch('auth/getAuthUser');

        if (this.authUser) {
          this.$store.dispatch('auth/setGuest', { value: 'isNotGuest' });
          this.$router.push({ name: 'profile' });
        } else {
          const error = Error(
            'Невозможно получить пользователя после входа в систему, проверьте настройки API.'
          );
          error.name = 'Fetch User';
          throw error;
        }
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

      return isValid;
    },
  },
};
</script>
