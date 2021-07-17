<template>
  <div class="login">
    <div class="login__wrapper">
      <LoginCard />
    </div>
  </div>
</template>

<script>
import LoginCard from '@/components/login-card/LoginCard.vue';

export default {
  name: 'TheLogin',

  components: {
    LoginCard,
  },
};
</script>

<style>
.login {
  display: flex;
  height: 100%;
  padding: 56px 0 110px;
}

@media (min-width: 400px) {
  .login {
    padding-bottom: 150px;
  }
}

.login__wrapper {
  flex-grow: 1;
  max-width: 490px;
  margin: auto;
}
</style>
