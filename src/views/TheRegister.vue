<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Зарегистрируйтесь"
      buttonName="Зарегистироваться"
    >
      <LoginCardInputGroup
        label="Фамилия"
        id="surname"
        name="surname"
        type="text"
        autocomplete="family-name"
        placeholder="Степанов"
        v-model="data.surname"
      />
      <LoginCardInputGroup
        label="Имя"
        id="name"
        name="name"
        type="text"
        autocomplete="given-name"
        placeholder="Валентин"
        v-model="data.name"
      />
      <LoginCardInputGroup
        label="Отчество"
        id="patronymic"
        name="patronymic"
        type="text"
        autocomplete="additional-name"
        placeholder="Сергеевич"
        v-model="data.patronymic"
      />
      <LoginCardInputGroup
        label="Email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        v-model="data.email"
      />
      <LoginCardInputGroup
        label="Пароль"
        id="password"
        name="password"
        type="password"
        autocomplete="new-password"
        placeholder="password"
        v-model="data.password"
      />
      <LoginCardInputGroup
        label="Подтвердить пароль"
        id="password-confirm"
        name="password-confirm"
        type="password"
        autocomplete="new-password"
        placeholder="password"
        v-model="data.passwordСonfirm"
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
  name: 'TheLogin',

  components: {
    LoginWrapper,
    LoginCard,
    LoginCardInputGroup,
    LoginFooter,
  },

  data() {
    return {
      data: {
        surname: null,
        name: null,
        patronymic: null,
        email: null,
        password: null,
        passwordСonfirm: null,
      },
      error: null,
    };
  },
};
</script>
