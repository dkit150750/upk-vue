<template>
  <div class="header-menu" @click.self="$emit('close')">
    <div class="header-menu__content">
      <ul class="header-menu__list">
        <li class="header-menu__item">
          <router-link
            class="header-menu__link"
            exact-active-class="header-menu__link--active"
            :to="{ name: 'profile' }"
            @click="$emit('close')"
          >
            Профиль
          </router-link>
        </li>
        <li class="header-menu__item" v-if="isAdmin">
          <router-link
            class="header-menu__link"
            :to="{ name: 'admin' }"
            @click="$emit('close')"
          >
            Админка
          </router-link>
        </li>
        <li class="header-menu__item">
          <button class="header-menu__link" type="button" @click="logout">
            Выйти
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HeaderMenu',

  emits: {
    close: null,
  },

  computed: {
    ...mapGetters('auth', ['isAdmin']),
  },

  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>

<style>
.header-menu {
  position: absolute;
  top: calc(100% - 10px);
  right: 16px;
  z-index: 2000;
}

@media (min-width: 550px) {
  .header-menu {
    top: calc(100% - 16px);
    right: 40px;
  }
}

.header-menu::before {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: '';
}

.header-menu-enter-active {
  transition: all 0.15s ease-in;
}

.header-menu-leave-active {
  transition: all 0.15s ease-out;
}

.header-menu-enter-from,
.header-menu-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.header-menu__content {
  width: 270px;
  padding: 8px 0;
  border-radius: 16px;
  background-color: var(--color-gray-0);
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.1),
    0px 4px 22px 10px rgb(0, 0, 0, 0.04);
}

.header-menu__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.header-menu__link {
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 15px;
  line-height: 20px;
  font-size: 16px;
  font-family: inherit;
  text-decoration: none;
  color: var(--ui-sb-color-text-main);
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}

.header-menu__link:focus,
.header-menu__link:hover {
  background-color: var(--profile-card-backgrouind);
}

.header-menu__link--active {
  color: var(--color-primary-900);
  background-color: var(--profile-card-backgrouind);
}
</style>
