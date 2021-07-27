<template>
  <li class="pagination-item">
    <div class="pagination-item__wrapper">
      <button class="pagination-item__page" type="button">
        <slot />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ProfileMainCoursesPaginationItem',
};
</script>

<style>
.pagination-item__wrapper {
  position: relative;
  padding-bottom: 100%;
}

.pagination-item__page {
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

.pagination-item__page:focus,
.pagination-item__page:hover {
  --bg-color: hsl(60, 5%, 88%);
}

.pagination-item__page--active {
  --bg-color: var(--color-primary-800);
  color: var(--color-gray-0);
}

.pagination-item__page--active:focus,
.pagination-item__page--active:hover {
  --bg-color: var(--color-primary-800);
  color: var(--color-gray-0);
}
</style>
