<template>
  <button type="button" @click="logout">Выйти</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProfileLogout',

  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>
