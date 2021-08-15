<template>
  <li class="records-pagination-item">
    <div class="records-pagination-item__wrapper">
      <router-link
        class="records-pagination-item__page"
        :to="{ name: 'profile', query: { page: page } }"
      >
        <slot />
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'RecordsPaginationItem',

  props: {
    page: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style>
.records-pagination-item__wrapper {
  position: relative;
  padding-bottom: 100%;
}

.light .records-pagination-item__page {
  --page-background: var(--color-gray-150);
}

.dark .records-pagination-item__page {
  --page-background: var(--color-gray-800);
}

.records-pagination-item__page {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 500;
  line-height: 1;
  color: inherit;
  text-decoration: none;
  background-color: var(--page-background);
  border: 0;
  border-radius: 33%;
  outline: none;
  transition: all 0.1s;
}

.light .records-pagination-item__page:focus,
.light .records-pagination-item__page:hover {
  --page-background: var(--color-gray-200);
}

.dark .records-pagination-item__page:focus,
.dark .records-pagination-item__page:hover {
  --page-background: var(--color-gray-700);
}

.records-pagination-item--active .records-pagination-item__page {
  background-color: var(--color-primary-800);
  color: var(--color-white);
}

.records-pagination-item--active .records-pagination-item__page:focus,
.records-pagination-item--active .records-pagination-item__page:hover {
  background-color: var(--color-primary-800);
  color: var(--color-white);
}
</style>
