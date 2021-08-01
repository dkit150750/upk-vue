<template>
  <div class="flash-message">
    <span class="flash-message__icon" v-if="message">
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
    <span class="flash-message__icon flash-message__icon--error" v-if="error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
        />
      </svg>
    </span>
    <p class="flash-message__text" v-if="message">{{ message }}</p>
    <p class="flash-message__text" v-if="error">{{ error }}</p>
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
</template>
<script>
export default {
  name: 'FlashMessage',

  props: {
    message: {
      default: null,
    },
    error: {
      default: null,
    },
  },

  emits: {
    close: null,
    closeError: null,
  },

  mounted() {
    this.timeout = setTimeout(() => {
      this.close();
    }, 6000);
  },

  unmounted() {
    clearTimeout(this.timeout);
    this.timeout = null;
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
    // message(mess) {
    //   if (!mess === null) {
    //     this.timeout = setTimeout(() => {
    //       this.$emit('close');
    //     }, 6000);
    //   }
    // },
    // error(error) {
    //   if (!error === null) {
    //     this.closeError = setTimeout(() => {
    //       this.$emit('close');
    //     }, 6000);
    //   }
    // },
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
  padding: 12px 10px;
  border-radius: 10px;
  background-color: var(--color-gray-0);
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.1),
    0px 4px 22px 10px rgb(0, 0, 0, 0.04);
  transform: translateX(-50%);
  width: calc(100% - 36px);
}

@media (min-width: 550px) {
  .flash-message {
    width: 500px;
    left: auto;
    right: 16px;
    transform: translateX(0);
  }
}

.flash-message-enter-active {
  transition: all 0.2s ease-in;
}

.flash-message-leave-active {
  transition: all 0.2s ease-out;
}

.flash-message-enter-from,
.flash-message-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.flash-message__icon {
  margin-right: 10px;
}

.flash-message__icon svg {
  display: block;
  width: 20px;
  height: 20px;
  color: var(--color-green-700);
}

.flash-message__icon--error svg {
  color: var(--color-red-800);
}

.flash-message__text {
  margin: 0;
  font-size: 13px;
}

@media (min-width: 550px) {
  .flash-message__text {
    font-size: 14px;
  }
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
