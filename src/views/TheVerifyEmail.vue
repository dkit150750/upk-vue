<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Подтвердите email"
      buttonName="Отправить письмо еще раз"
      :isExit="true"
      @formSubmit="sendVerification"
    >
      <p class="login-card__tetx">
        На почту <b>{{ authUser.email }}</b> было выслано письмо для
        подтвержения.
      </p>
    </LoginCard>
    <FlashMessage :message="message" @close="message = null" />
  </LoginWrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import { getError } from '@/utils/helpers';
import AuthService from '@/services/AuthService';

import LoginWrapper from '@/components/login-card/LoginWrapper.vue';
import LoginCard from '@/components/login-card/LoginCard.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'TheVerifyEmail',

  components: {
    LoginWrapper,
    LoginCard,
    FlashMessage,
  },

  data() {
    return {
      error: null,
      message: null,
    };
  },

  computed: {
    ...mapGetters('auth', ['authUser']),
  },

  methods: {
    async sendVerification() {
      this.error = null;
      this.message = null;
      const payload = {
        user: this.authUser.id,
      };
      try {
        await AuthService.sendVerification(payload);
        this.message = 'Письмо с подтверждением отправлено';
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
};
</script>

<style>
.login-card__tetx {
  margin: 0;
}
</style>
