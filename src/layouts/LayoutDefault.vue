<template>
  <div id="layout" class="light">
    <TheHeader />
    <TheMain>
      <router-view />
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import TheHeader from '@/components/Header/TheHeader.vue';
import TheMain from '@/components/Main/TheMain.vue';
import TheFooter from '@/components/Footer/TheFooter.vue';

export default {
  name: 'LayoutDefault',
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },

  mounted() {
    const theme = localStorage.getItem('theme') || 'light';
    const layout = document.querySelector('#layout');
    layout.classList.add(theme);
    this.setTheme(theme);
  },

  methods: {
    ...mapActions('theme', ['setTheme']),
  },
};
</script>

<style>
#layout {
  --max-width: 1250px;
}

#layout.light {
  --color-null: var(--color-gray-300);
  --page-color: var(--color-gray-1000);
  --page-background: var(--color-white);
}

#layout.dark {
  --color-null: var(--color-gray-1000);
  --page-color: var(--color-gray-100);
  --page-background: var(--color-gray-900);
}

#layout {
  --max-width: 1250px;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
  color: var(--page-color);
  background-color: var(--page-background);
}

@media (min-width: 1500px) {
  #layout {
    --max-width: 1630px;
  }
}
</style>
