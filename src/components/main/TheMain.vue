<template>
  <main class="main">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'TheMain',
};
</script>

<style>
.main {
  min-height: calc(100vh - 84px);
}

@media (min-width: 768px) {
  .main {
    min-height: calc(100vh - 108px);
  }
}
</style>
