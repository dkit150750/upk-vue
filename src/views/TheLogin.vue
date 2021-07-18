<template>
  <LoginWrapper>
    <LoginCard class="login__login-card" title="Войти" buttonName="Войти">
      <LoginCardInputGroup
        label="Email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        v-model="email"
      />
      <LoginCardInputGroup
        label="Пароль"
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        placeholder="password"
        v-model="password"
      />
    </LoginCard>
    <LoginFooter>
      Новый пользователь?
      <router-link class="login-footer__link" :to="{ name: 'register' }"
        >Зарегистрируйтесь</router-link
      >
    </LoginFooter>
  </LoginWrapper>
</template>

<script>
import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import LoginCardInputGroup from '@/components/login-card/LoginCardInputGroup.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';

export default {
  name: 'TheLogin',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardInputGroup,
    LoginFooter,
  },

  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
};
</script>
