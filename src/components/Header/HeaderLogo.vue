<template>
  <router-link class="header-logo" :to="{ name: 'home' }">
    ГПОУ ТО "ДКИТ"
  </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo',
};
</script>

<style>
.header-logo {
  font-size: 20px;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
}

@media (min-width: 768px) {
  .header-logo {
    font-size: 30px;
  }
}
</style>
