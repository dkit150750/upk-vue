<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />
      <template v-if="loggedIn">
        <HeaderBurger
          class="header__burger"
          @click="openMenu"
          :isOpen="isOpenMenu"
        />
      </template>
      <template v-else>
        <router-link class="header__link" :to="{ name: 'login' }">
          <HeaderLinkIcon class="header__link-icon" />
          Войти
        </router-link>
      </template>

      <transition name="header-menu">
        <HeaderMenu v-if="isOpenMenu" @close="isOpenMenu = false" />
      </transition>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderLinkIcon from '@/components/header/HeaderLinkIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';
import HeaderBurger from '@/components/header/HeaderBurger.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';

export default {
  name: 'TheHeader',

  components: {
    HeaderLogo,
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
  justify-content: space-between;
  max-width: var(--max-width);
  height: 84px;
  padding: 10px 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .header__container {
    padding: 30px 40px;
  }
}

@media (min-width: 768px) {
  .header__container {
    height: 108px;
    padding: 36px 40px;
  }
}

.header__link {
  display: flex;
  align-items: center;
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

.header__link:focus,
.header__link:hover {
  color: var(--color-primary-900);
}

.header__link-icon {
  margin-right: 5px;
}
</style>
