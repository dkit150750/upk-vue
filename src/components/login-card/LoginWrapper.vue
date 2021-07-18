<template>
  <div class="login">
    <div class="login__wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWrapper',
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

.login__login-card {
  margin-bottom: 30px;
}
</style>
