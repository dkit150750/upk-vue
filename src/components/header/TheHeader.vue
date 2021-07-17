<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />
      <router-link class="header__link" :to="{ name: 'login' }">
        <HeaderLinkIcon class="header__link-icon" />
        Войти
      </router-link>
    </div>
  </header>
</template>
<script>
import HeaderLinkIcon from '@/components/header/HeaderLinkIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';
export default {
  name: 'TheHeader',
  components: {
    HeaderLogo,
    HeaderLinkIcon,
  },
};
</script>
<style>
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  padding: 30px 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .header__container {
    padding: 30px 40px;
  }
}

@media (min-width: 768px) {
  .header__container {
    padding: 36px 40px;
  }
}

.header__link {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
  color: inherit;
  text-decoration: none;
  outline: none;
}

@media (min-width: 400px) {
  .header__link {
    font-size: 19px;
  }
}

.header__link:focus,
.header__link:hover {
  color: var(--color-primary-900);
}

.header__link-icon {
  margin-right: 5px;
}
</style>
