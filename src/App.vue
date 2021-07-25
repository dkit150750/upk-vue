<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',

  setup() {
    const layout = shallowRef(LayoutDefault);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await require(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || LayoutDefault;
        } catch (e) {
          layout.value = LayoutDefault;
        }
      }
    );
    return { layout };
  },
};
</script>

<style>
@import './assets/styles/fonts.module.css';
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

:root {
  /* --color-primary-800: hsl(246, 100%, 58%);
  --color-gray-0: hsl(240, 2%, 98%);
  --color-primary-800: hsl(241, 100%, 62%); */

  --max-width: 1250px;
  --color-primary-700: hsl(241, 80%, 70%);
  --color-primary-800: hsl(237, 54%, 55%);
  --color-primary-900: hsl(237, 54%, 45%);
  --color-gray-0: hsl(210, 0%, 100%);
  --color-gray-50: hsl(210, 10%, 98%);
  --color-gray-60: hsl(210, 20%, 98%);
  --color-gray-70: hsl(0, 0%, 93%);
  --color-gray-100: hsl(0, 0%, 80%);
  --color-gray-200: hsl(210, 1%, 63%);
  --color-gray-500: hsl(240, 10%, 50%);
  --color-gray-800: hsl(240, 0%, 14%);
  --color-gray-900: hsl(240, 10%, 10%);
  --color-red-100: hsl(0, 100%, 95%);
  --color-red-700: hsl(11, 100%, 60%);
  --color-green-700: hsl(123, 41%, 45%);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

body {
  margin: 0;
  font-family: Graphik, Arial, Helvetica, sans-serif;
  line-height: 1.2;
  color: var(--color-gray-900);
  background-color: var(--color-gray-0);
  overflow-x: hidden;
}
</style>
