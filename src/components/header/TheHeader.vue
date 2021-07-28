<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />
      <template v-if="!loggedIn">
        <button
          :class="burgerClass"
          class="burger header__burger"
          aria-label="открыть меню"
          @click="openMenu"
        >
          <!-- <img src="" alt="аватар" /> -->
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </template>
      <template v-else>
        <router-link class="header__link" :to="{ name: 'login' }">
          <HeaderLinkIcon class="header__link-icon" />
          Войти
        </router-link>
      </template>
      <HeaderMenu :isOpen="isOpenMenu" @close="isOpenMenu = false" />
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderLinkIcon from '@/components/header/HeaderLinkIcon.vue';
import HeaderLogo from '@/components/header/HeaderLogo.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';

export default {
  name: 'TheHeader',

  components: {
    HeaderLogo,
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
    burgerClass() {
      return {
        'burger--close': this.isOpenMenu,
      };
    },
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

@media (min-width: 768px) {
  .header__container {
    height: 108px;
  }
}

@media (min-width: 550px) {
  .header__container {
    padding: 30px 40px;
  }
}

@media (min-width: 768px) {
  .header__container {
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

.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40px;
  height: 40px;
  padding: 8px 8px;
  margin: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.burger__line {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: var(--color-gray-900);
}

.burger--close {
  justify-content: center;
}

.burger--close .burger__line:nth-child(3) {
  display: none;
}
.burger--close .burger__line:nth-child(1) {
  transform: translateY(50%) rotate(45deg);
}

.burger--close .burger__line:nth-child(2) {
  transform: translateY(-50%) rotate(-45deg);
}
</style>
