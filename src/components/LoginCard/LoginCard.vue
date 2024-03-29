<template>
  <div class="login-card">
    <div class="login-card__header">
      <h1 class="login-card__title">{{ title }}</h1>
    </div>
    <form
      class="login-card__form"
      novalidate
      @submit.prevent="$emit('formSubmit')"
    >
      <slot />
      <button class="login-card__submit" type="submit">{{ buttonName }}</button>
    </form>
    <div class="login-card__footer" v-if="isReset">
      <router-link class="login-card-link" :to="{ name: 'forgotPassword' }">
        Забыли пароль?
      </router-link>
    </div>
    <div class="login-card__footer" v-if="isExit">
      <button class="login-card-link" type="button" @click="logoutHandler">
        Выйти
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
    isExit: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    formSubmit: null,
  },

  methods: {
    ...mapActions('auth', ['logout']),
    logoutHandler() {
      this.$router.push({ name: 'home' });
      this.logout();
    },
  },
};
</script>

<style>
.light .login-card {
  --login-card-background: var(--page-background);
  --login-card-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.1);
}

.dark .login-card {
  --login-card-background: var(--color-gray-1000);
  --login-card-shadow: none;
}

.login-card {
  --shadow-color: hsl(0, 0%, 87%);
  padding: 52px 15px 36px;
  background-color: var(--login-card-background);
  border-radius: 5px;
  box-shadow: var(--login-card-shadow);
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
  color: var(--color-white);
  cursor: pointer;
  background-color: var(--color-primary-600);
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
  color: var(--color-gray-400);
  text-decoration: none;
  font-family: inherit;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
