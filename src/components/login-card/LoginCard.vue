<template>
  <div class="login-card">
    <div class="login-card__header">
      <h1 class="login-card__title">{{ title }}</h1>
    </div>
    <form class="login-card__form">
      <slot />
      <button class="login-card__submit" type="submit">{{ buttonName }}</button>
    </form>
    <div class="login-card__footer" v-if="isReset">
      <router-link class="login-card-link" :to="{ name: 'resetPassword' }">
        Забыли пароль?
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    buttonName: {
      type: String,
      required: true,
    },
    isReset: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.login-card {
  --shadow-color: hsl(0, 0%, 87%);
  padding: 52px 15px 36px;
  background-color: var(--color-gray-0);
  border-radius: 5px;
  box-shadow: 0 0 140px -10px var(--shadow-color);
}

@media (min-width: 350px) {
  .login-card {
    padding: 52px 30px 36px;
  }
}

@media (min-width: 470px) {
  .login-card {
    padding: 52px 70px 36px;
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
  margin: 40px 0 24px;
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

.login-card__footer {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.login-card-link {
  font-size: 15px;
  color: #b4b9cb;
  text-decoration: none;
}
</style>
