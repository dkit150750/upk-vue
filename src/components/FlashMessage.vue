<template>
  <!-- <teleport to="#layout"> -->
  <transition name="flash-message">
    <div class="flash-message" v-if="message">
      <span class="flash-message__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
        </svg>
      </span>
      <p class="flash-message__text">
        {{ message }}
      </p>
      <button
        class="flash-message__close"
        type="button"
        aria-label="закрыть"
        @click="close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
          />
        </svg>
      </button>
    </div>
  </transition>
  <!-- </teleport> -->
</template>
<script>
export default {
  name: 'FlashMessage',

  props: {
    message: {
      default: null,
    },
  },

  emits: {
    close: null,
  },

  data() {
    return {
      timeout: null,
    };
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },

  watch: {
    message(mess) {
      if (mess === null) {
        this.timeout = null;
      } else {
        this.timeout = setTimeout(() => {
          this.$emit('close');
        }, 4000);
      }
    },
  },
};
</script>

<style>
.flash-message {
  position: fixed;
  top: 5%;
  left: 50%;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  padding: 16px 10px;
  border-radius: 10px;
  background-color: var(--color-gray-0);
  box-shadow: 0 5px 20px 0 hsla(0, 0%, 0%, 0.3);
  transform: translateX(-50%);
  min-width: 300px;
}

.flash-message-enter-active {
  transition: all 0.3s ease-out;
}

.flash-message-leave-active {
  transition: all 0.3s ease-in;
}

.flash-message-enter-from,
.flash-message-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.flash-message__icon {
  margin-right: 5px;
}

.flash-message__icon svg {
  display: block;
  width: 20px;
  height: 20px;
  color: var(--color-green-700);
}

.flash-message__text {
  margin: 0;
  font-size: 14px;
}

.flash-message__close {
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
</style>
