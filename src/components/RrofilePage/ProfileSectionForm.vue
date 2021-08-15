<template>
  <form class="profile-section-form" @submit.prevent="updateUser">
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
    <div class="profile-section-form__buttons">
      <button
        class="profile-section-form__button"
        type="submit"
        :disabled="isDisabledSaveInfo"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';
import { getErrorData } from '@/utils/helpers';
import AuthService from '@/services/AuthService';

import ProfileFormField from '@/components/RrofilePage/ProfileFormField.vue';

export default {
  name: 'ProfileSectionForm',

  components: {
    ProfileFormField,
  },

  created() {
    this.user = Object.assign({}, this.authUser);
  },

  emits: {
    update: null,
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
      isLoading: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['authUser']),
    isDisabledSaveInfo() {
      if (this.isLoading) {
        return true;
      }

      if (
        this.user.lastname === '' ||
        this.user.name === '' ||
        this.user.patronymic === ''
      ) {
        return true;
      }

      return (
        this.user.lastname === this.authUser.lastname &&
        this.user.name === this.authUser.name &&
        this.user.patronymic === this.authUser.patronymic &&
        this.user.telephone === this.authUser.telephone
      );
    },
  },

  methods: {
    async updateUser() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      this.error = {
        lastname: null,
        name: null,
        patronymic: null,
        telephone: null,
      };

      const payload = this.user;
      payload.email = this.authUser.email;

      try {
        await AuthService.updateUser(payload);
        await this.$store.dispatch('auth/getAuthUser');
        this.$emit('update');
      } catch (error) {
        this.error = getErrorData(error);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
.profile-section-form__button {
  --button-color: var(--color-white);
  --button-background: var(--color-primary-800);
  padding: 12px 24px;
  margin-top: 25px;
  color: var(--button-color);
  cursor: pointer;
  background-color: var(--button-background);
  border: 0;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.15s ease-out;
}

.profile-section-form__button:disabled {
  --button-color: var(--color-white);
  --button-background: var(--color-gray-300);
  cursor: auto;
}

.profile-section-form__button:not(:disabled):focus,
.profile-section-form__button:not(:disabled):hover {
  --button-background: var(--color-gray-900);
}
</style>
