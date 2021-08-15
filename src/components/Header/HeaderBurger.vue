<template>
  <button
    :class="burgerClass"
    class="burger"
    type="button"
    aria-label="открыть меню"
  >
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
  </button>
</template>

<script>
export default {
  name: 'HeaderBurger',

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    burgerClass() {
      return {
        'burger--close': this.isOpen,
      };
    },
  },
};
</script>

<style>
.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40px;
  height: 40px;
  padding: 8px 8px;
  margin: 0;
  color: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.burger__line {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: currentColor;
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
