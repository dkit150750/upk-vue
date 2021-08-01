<template>
  <form class="profile-info-form" @submit.prevent="updateUser">
    <ProfileFormField
      label="Фамилия"
      name="lastname"
      v-model.trim="user.lastname"
      placeholder="Степанов"
      :error="error.lastname"
    />
    <ProfileFormField
      label="Имя"
      name="name"
      v-model.trim="user.name"
      placeholder="Валентин"
      :error="error.name"
    />
    <ProfileFormField
      label="Отчество"
      name="patronymic"
      v-model.trim="user.patronymic"
      placeholder="Иванович"
      :error="error.patronymic"
    />
    <ProfileFormField
      label="Телефон"
      name="telephone"
      v-model.trim="user.telephone"
      placeholder="8 (999) 750 15 03"
      :error="error.telephone"
    />
    <div class="profile-info-form__buttons">
      <button
        class="profile-info-form__button"
        type="submit"
        :disabled="isDisabledSaveInfo"
      >
        Сохранить
      </button>
    </div>
  </form>
  <teleport to="#app">
    <transition name="flash-message">
      <FlashMessage
        v-if="message || messageError"
        :message="message"
        :error="messageError"
        @close="messageError = message = null"
      />
    </transition>
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';
import { getErrorData } from '@/utils/helpers';
import AuthService from '@/services/AuthService';

import ProfileFormField from '@/components/profile/ProfileFormField.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'ProfileInfoForm',

  components: {
    ProfileFormField,
    FlashMessage,
  },

  data() {
    return {
      user: {
        lastname: '',
        name: '',
        patronymic: '',
        telephone: '',
      },
      error: {
        lastname: null,
        name: null,
        patronymic: null,
        telephone: null,
      },
      message: null,
      messageError: null,
    };
  },

  computed: {
    ...mapGetters('auth', ['authUser']),
    isDisabledSaveInfo() {
      if (
        this.user.lastname === '' ||
        this.user.name === '' ||
        this.user.patronymic === ''
      ) {
        return true;
      }
      return (
        JSON.stringify(Object.values(this.user)) ===
        JSON.stringify(Object.values(this.authUser))
      );
    },
  },

  methods: {
    async updateUser() {
      this.error = {
        lastname: null,
        name: null,
        patronymic: null,
        telephone: null,
      };
      this.message = null;

      const payload = this.user;
      payload.email = this.authUser.email;

      try {
        await AuthService.updateUser(payload);
        await this.$store.dispatch('auth/getAuthUser');
        this.message = 'Данные обновлены';
      } catch (error) {
        this.error = getErrorData(error);
      }
    },
  },

  created() {
    this.user = Object.assign({}, this.authUser);
  },
};
</script>

<style>
.profile-info-form__button {
  padding: 12px 24px;
  margin-top: 25px;
  color: var(--color-gray-0);
  cursor: pointer;
  background-color: var(--color-primary-800);
  border: 0;
  border-radius: 5px;
  transition: background-color 0.15s ease-out;
}

.profile-info-form__button:disabled {
  --color-gray-0: hsl(48, 4%, 50%);
  --color-primary-800: hsl(0, 0%, 90%);
  cursor: auto;
}

.profile-info-form__button:not(:disabled):focus,
.profile-info-form__button:not(:disabled):hover {
  background-color: var(--color-gray-900);
}
</style>
