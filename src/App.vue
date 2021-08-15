<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';

export default {
  name: 'App',

  components: {
    AppLayout,
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
  --color-primary-100: #c6ccff;
  --color-primary-200: #b2b8ff;
  --color-primary-300: #9ea4ff;
  --color-primary-400: #8a90ff;
  --color-primary-500: #767cf2;
  --color-primary-600: #6268de;
  --color-primary-700: #4e54ca;
  --color-primary-800: #3a40b6;
  --color-primary-900: #262ca2;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-150: #f6f6f4;
  --color-gray-180: #f0f0ef;
  --color-gray-200: #e9e8e7;
  --color-gray-300: #d3d5da;
  --color-gray-400: #9ca3af;
  --color-gray-500: #71747a;
  --color-gray-600: #4b5563;
  --color-gray-700: #384252;
  --color-gray-800: #272b30;
  --color-gray-900: #191b1f;
  --color-gray-1000: #121316;
  --color-gray-1100: #070709;
  --color-red-100: #fff5f5;
  --color-red-200: #fed7d7;
  --color-red-300: #feb2b2;
  --color-red-400: #fc8181;
  --color-red-500: #f56565;
  --color-red-600: #e53e3e;
  --color-red-700: #c53030;
  --color-red-800: #9b2c2c;
  --color-red-900: #742a2a;
  --color-green-100: #f0fff4;
  --color-green-200: #c6f6d5;
  --color-green-300: #9ae6b4;
  --color-green-400: #68d391;
  --color-green-500: #48bb78;
  --color-green-600: #38a169;
  --color-green-700: #2f855a;
  --color-green-800: #276749;
  --color-green-900: #22543d;
  --color-purple-100: #faf5ff;
  --color-purple-200: #e9d8fd;
  --color-purple-300: #d6bcfa;
  --color-purple-400: #b794f4;
  --color-purple-500: #9f7aea;
  --color-purple-600: #805ad5;
  --color-purple-700: #6b46c1;
  --color-purple-800: #553c9a;
  --color-purple-900: #44337a;
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
