<template>
  <LoginWrapper>
    <LoginCard
      class="login__login-card"
      title="Подтвердите email"
      buttonName="Отправить письмо еще раз"
      :isExit="true"
      @formSubmit="sendVerification"
    >
      <p class="login-card__text">
        На почту <b>{{ authUser.email }}</b> было выслано письмо для
        подтвержения.
      </p>
    </LoginCard>
    <teleport to="#app">
      <transition name="flash-message">
        <FlashMessage
          v-if="message"
          :message="message"
          @close="message = null"
        />
      </transition>
    </teleport>
  </LoginWrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import { getErrorData } from '@/utils/helpers';
import AuthService from '@/services/AuthService';

import LoginWrapper from '@/components/LoginCard/LoginWrapper.vue';
import LoginCard from '@/components/LoginCard/LoginCard.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'VerifyEmailPage',

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
      const payload = {
        user: this.authUser.id,
      };
      try {
        await AuthService.sendVerification(payload);
        this.message = null;
        await this.$nextTick();
        this.message = 'Письмо с подтверждением отправлено';
      } catch (error) {
        this.error = getErrorData(error);
      }
    },
  },
};
</script>

<style>
.login-card__text {
  margin: 0;
}
</style>
