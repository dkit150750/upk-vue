<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />

      <div class="header__left">
        <HeaderTheme />

        <template v-if="loggedIn">
          <HeaderBurger
            class="header__burger"
            @click="openMenu"
            :isOpen="isOpenMenu"
          />
        </template>
        <template v-else>
          <router-link class="header__link" :to="{ name: 'login' }">
            <HeaderLinkIcon />
            Войти
          </router-link>
        </template>
      </div>

      <transition name="header-menu">
        <HeaderMenu v-if="isOpenMenu" @close="isOpenMenu = false" />
      </transition>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderLinkIcon from '@/components/Header/HeaderLinkIcon.vue';
import HeaderLogo from '@/components/Header/HeaderLogo.vue';
import HeaderTheme from '@/components/Header/HeaderTheme.vue';
import HeaderBurger from '@/components/Header/HeaderBurger.vue';
import HeaderMenu from '@/components/Header/HeaderMenu.vue';

export default {
  name: 'TheHeader',

  components: {
    HeaderLogo,
    HeaderTheme,
    HeaderBurger,
    HeaderLinkIcon,
    HeaderMenu,
  },

  data() {
    return {
      isOpenMenu: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },

  methods: {
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style>
.header__container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  max-width: var(--max-width);
  height: 84px;
  padding: 0 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .header__container {
    padding: 0 40px;
  }
}

@media (min-width: 768px) {
  .header__container {
    height: 108px;
    padding: 0 40px;
  }
}

.header__left {
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  gap: 20px;
}

.header__link {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
  color: inherit;
  text-decoration: none;
  outline: none;
}

@media (min-width: 400px) {
  .header__link {
    font-size: 19px;
  }
}

.light .header__link:focus,
.light .header__link:hover {
  color: var(--color-primary-900);
}

.dark .header__link:focus,
.dark .header__link:hover {
  color: var(--color-primary-600);
}
</style>
