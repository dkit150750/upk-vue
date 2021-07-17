<template>
  <div class="login-card">
    <div class="login-card__header">
      <h1 class="login-card__title">Войти</h1>
    </div>
    <form class="login-card__form" action="">
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
      <button class="login-card__submit" type="submit">Войти</button>
    </form>
    <div class="login-card-footer">
      <a class="login-card-link" href="index.html">Забыли пароль?</a>
    </div>
  </div>
</template>

<script>
import LoginCardInputGroup from '@/components/login-card/LoginCardInputGroup.vue';

export default {
  name: 'LoginCard',

  components: {
    LoginCardInputGroup,
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

<style>
.login-card {
  --shadow-color: hsl(0, 0%, 87%);
  padding: 50px 15px;
  margin-bottom: 30px;
  background-color: var(--color-gray-0);
  border-radius: 5px;
  box-shadow: 0 0 140px -10px var(--shadow-color);
}

@media (min-width: 350px) {
  .login-card {
    padding: 50px 30px;
  }
}

@media (min-width: 470px) {
  .login-card {
    padding: 50px 70px;
  }
}

.login-card__header {
  margin-bottom: 50px;
}

.login-card__title {
  font-size: 20px;
  line-height: 1;
}

.login-card__form {
  display: grid;
  gap: 20px;
}

.login-card__submit {
  display: block;
  padding: 12px 0;
  margin: 40px 0 0;
  color: var(--color-gray-0);
  cursor: pointer;
  background-color: var(--color-primary-700);
  border: 0;
  outline: none;
  transition: background-color 0.3s;
}

.login-card__submit:focus,
.login-card__submit:hover {
  background-color: var(--color-primary-800);
}

.login-card-footer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.login-card-link {
  font-size: 15px;
  color: #b4b9cb;
  text-decoration: none;
}
</style>
