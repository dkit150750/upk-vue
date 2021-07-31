<template>
  <aside class="aside">
    <div class="aside__overlay" @click="$emit('clickCloseAside')"></div>
    <div class="aside__inner">
      <div class="aside__header">
        <div class="logo">
          <img
            class="logo__img"
            :src="require('@/assets/images/logo-admin.png')"
            width="32"
            height="32"
            alt="logo"
          />
          <p class="logo__title">ДКИТ</p>
        </div>

        <button
          class="aside__header-btn"
          aria-label="закрыть меню"
          type="button"
          @click="$emit('clickCloseAside')"
        >
          <span class="aside__header-btn-liner"></span>
          <span class="aside__header-btn-liner"></span>
        </button>
      </div>
      <nav class="aside-nav">
        <ul class="aside-nav__list">
          <li class="aside-nav__item">
            <router-link
              class="aside-nav__link"
              exact-active-class="aside-nav__link--active"
              :to="{ name: 'admin' }"
              @click="$emit('clickCloseAside')"
            >
              Курсы
            </router-link>
          </li>
          <li class="aside-nav__item">
            <router-link
              class="aside-nav__link"
              exact-active-class="aside-nav__link--active"
              :to="{ name: 'users' }"
              @click="$emit('clickCloseAside')"
            >
              Пользователи
            </router-link>
          </li>
          <li class="aside-nav__item">
            <router-link
              class="aside-nav__link"
              exact-active-class="aside-nav__link--active"
              :to="{ name: 'home' }"
            >
              Выйти
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'TheAside',

  emits: {
    clickCloseAside: null,
  },
};
</script>

<style>
.aside {
  flex-shrink: 0;
  width: 240px;
  padding: 20px;
  background-color: var(--color-gray-0);
  transition: all 0.3s cubic-bezier(0.26, 0.63, 0.58, 1);
}

@media (max-width: 1319px) {
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100vh;
    transform: translateX(-100%);
  }
}

.aside__inner {
  overflow-y: auto;
}

.show-menu .aside {
  transform: translateX(0);
}

.aside__overlay {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  content: none;
  pointer-events: none;
}

.show-menu .aside__overlay {
  pointer-events: all;
}

.aside__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

@media (min-width: 520px) {
  .aside__header {
    padding: 20px 0;
  }
}

.logo {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.logo__title {
  margin: 0;
  font-size: 33px;
  font-weight: 800;
  color: var(--color-primary-800);
}

.aside__header-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 4px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  border-radius: 9px;
}

@media (min-width: 1320px) {
  .aside__header-btn {
    display: none;
  }
}

.aside__header-btn-liner {
  width: 100%;
  height: 2px;
  background-color: #1b1d21;
  border-radius: 10px;
}

.aside__header-btn-liner:nth-child(1) {
  transform: rotate(45deg) translateY(50%);
}

.aside__header-btn-liner:nth-child(2) {
  transform: rotate(-45deg) translateY(-50%);
}

.aside-nav__list {
  padding: 0;
  list-style: none;
}

.aside-nav__link {
  display: block;
  padding: 13px 19px;
  font-size: 16px;
  color: #808191;
  text-decoration: none;
  border-radius: 10px;
  outline: none;
}

.aside-nav__link:focus,
.aside-nav__link:hover {
  color: var(--color-primary-800);
}

.aside-nav__link--active {
  color: #ffffff;
  background-color: var(--color-primary-800);
}

.aside-nav__link--active:focus,
.aside-nav__link--active:hover {
  color: #ffffff;
}
</style>
