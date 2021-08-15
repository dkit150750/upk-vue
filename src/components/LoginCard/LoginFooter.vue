<template>
  <div class="login-footer">
    <p class="login-footer__text">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoginFooter',
};
</script>

<style>
.login-footer {
  display: flex;
  justify-content: center;
}

.login-footer__text {
  margin: 0;
  font-size: 15px;
}

@media (min-width: 350px) {
  .login-footer__text {
    font-size: 16px;
  }
}

.login-footer__link {
  position: relative;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  outline: none;
}

.login-footer__link::before {
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  content: '';
  background-color: var(--color-primary-800);
  transition: background-color 0.1s;
  pointer-events: none;
}

.login-footer__link:focus::before,
.login-footer__link:hover::before {
  background-color: currentColor;
}
</style>
