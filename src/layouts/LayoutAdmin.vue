<template>
  <div :class="classObject" id="layout-admin">
    <TheAside @clickCloseAside="closeAside" />
    <TheMain @clickOpenAside="openAside">
      <router-view />
    </TheMain>
  </div>
</template>

<script>
import TheAside from '@/components/admin/Aside/TheAside.vue';
import TheMain from '@/components/admin/Main/TheMain.vue';
export default {
  name: 'LayoutAdmin',

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
  --admin-color-null: var(--color-gray-300);
  --admin-page-color: var(--color-gray-1000);
  --admin-page-backgound: var(--color-white);
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--admin-page-color);
  background-color: var(--admin-page-backgound);
}

.page-lock {
  height: 100vh;
  overflow: hidden;
}
</style>
