<template>
  <div id="layout-admin">
    <TheAside />
    <TheMain>
      <router-view />
    </TheMain>
  </div>
</template>

<script>
import TheAside from '@/components/admin/aside/TheAside.vue';
import TheMain from '@/components/admin/main/TheMain.vue';
export default {
  name: 'LayoutDefault',
  components: {
    TheAside,
    TheMain,
  },
};
</script>

<style>
#layout-admin {
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--color-gray-60);
}
</style>
