<template>
  <main class="admin-main">
    <div class="admin-main__header">
      <div class="logo">
        <img
          class="logo__img"
          :src="require('@/assets/images/logo-admin.png')"
          width="40"
          height="40"
          alt="logo"
        />
      </div>

      <button
        class="admin-main__header-btn"
        aria-label="открыть меню"
        type="button"
        @click="$emit('clickOpenAside')"
      >
        <span class="admin-main__header-btn-liner"></span>
        <span class="admin-main__header-btn-liner"></span>
      </button>
    </div>
    <slot />
  </main>
</template>

<script>
export default {
  name: 'TheMain',

  emits: {
    clickOpenAside: null,
  },
};
</script>

<style>
.admin-main {
  flex-grow: 1;
  padding: 20px 16px;
  transition: all 0.3s cubic-bezier(0.26, 0.63, 0.58, 1);
}

@media (max-width: 1319px) {
  .admin-main {
    transform: translateX(0);
  }
}

.show-menu .admin-main {
  transform: translateX(240px);
}

@media (min-width: 520px) {
  .admin-main {
    padding: 40px;
  }
}

.admin-main__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.admin-main__header-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40px;
  height: 40px;
  padding: 6px 3px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  border-radius: 9px;
}

@media (min-width: 1320px) {
  .admin-main__header-btn {
    display: none;
  }
}

.admin-main__header-btn-liner {
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-1100);
  border-radius: 1px;
}

.admin-main__title {
  margin: 0;
  margin-bottom: 55px;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
}

.admin-main__course-info {
  margin-bottom: 60px;
}
</style>
