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
  background-color: var(--profile-card-backgrouind);
  border: 0;
  border-radius: 33%;
  outline: none;
  transition: all 0.2s;
}

.records-pagination-item__page:focus,
.records-pagination-item__page:hover {
  --bg-color: hsl(60, 5%, 88%);
}

.records-pagination-item--active .records-pagination-item__page {
  background-color: var(--color-primary-800);
  color: var(--color-gray-0);
}

.records-pagination-item--active .records-pagination-item__page:focus,
.records-pagination-item--active .records-pagination-item__page:hover {
  background-color: var(--color-primary-800);
  color: var(--color-gray-0);
}
</style>
