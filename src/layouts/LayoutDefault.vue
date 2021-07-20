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
:root {
  --max-width: 1250px;
}

@media (min-width: 1500px) {
  :root {
    --max-width: 1630px;
  }
}

#layout {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
}
</style>
