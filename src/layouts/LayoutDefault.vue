<template>
  <div id="layout">
    <TheHeader />
    <TheMain>
      <router-view />
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue';
import TheMain from '@/components/main/TheMain.vue';
import TheFooter from '@/components/footer/TheFooter.vue';

export default {
  name: 'LayoutDefault',
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style>
#layout {
  --profile-card-backgrouind: hsl(375, 8%, 95%);
  --max-width: 1250px;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
}

@media (min-width: 1500px) {
  #layout {
    --max-width: 1630px;
  }
}
</style>
