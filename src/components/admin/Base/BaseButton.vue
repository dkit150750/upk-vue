<template>
  <button class="admin-base-button" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style>
.admin-base-button {
  display: block;
  padding: 13px 20px;
  font-family: inherit;
  font-size: 14px;
  color: var(--color-gray-50);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 6px;
}
</style>
