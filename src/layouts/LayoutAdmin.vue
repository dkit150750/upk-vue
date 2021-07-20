<template>
  <div :class="classObject" id="layout-admin">
    <TheAside @clickCloseAside="closeAside" />
    <TheMain @clickOpenAside="openAside">
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

  data() {
    return {
      isOpenAside: false,
    };
  },

  computed: {
    classObject() {
      return {
        'show-menu': this.isOpenAside,
        'page-lock': this.isOpenAside,
      };
    },
  },

  methods: {
    openAside() {
      this.isOpenAside = true;
    },
    closeAside() {
      this.isOpenAside = false;
    },
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

.page-lock {
  height: 100vh;
  overflow: hidden;
}
</style>
