<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Восстановление пароля"
      buttonName="Отправить письмо"
      isReset="true"
    >
      <LoginCardInputGroup
        label="Email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        v-model="email"
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
import LoginCardInputGroup from '@/components/login-card/LoginCardInputGroup.vue';
import LoginFooter from '@/components/login-card/LoginFooter.vue';

export default {
  name: 'TheResetPassword',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardInputGroup,
    LoginFooter,
  },

  data() {
    return {
      email: null,
      error: null,
    };
  },
};
</script>
