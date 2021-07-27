<template>
  <div class="profile-avatar">
    <div class="profile-avatar__img-wrapper">
      <img class="profile-avatar__img" :src="authUser.avatar" :alt="fullName" />
    </div>
    <div class="profile-avatar__avatar-icon-wrapper">
      <ProfileHeaderAvatarIcon />
    </div>
    <label
      class="profile-avatar__label"
      for="avatar"
      aria-label="изменить аватар"
    ></label>
    <input
      class="profile-avatar__input"
      id="avatar"
      name="avatar"
      type="file"
      accept="image/*"
      tabindex="-1"
      @change="uploadAvatar"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FileService from '@/services/FileService';
import { getError } from '@/utils/helpers';

import ProfileHeaderAvatarIcon from '@/components/profile/ProfileHeaderAvatarIcon.vue';

export default {
  name: 'ProfileHeaderAvatar',

  components: {
    ProfileHeaderAvatarIcon,
  },

  data() {
    return {
      endpoint: '/users/auth/avatar',
    };
  },

  computed: {
    ...mapGetters('auth', ['authUser']),
    fullName() {
      return this.authUser.name + ' ' + this.authUser.lastname;
    },
  },

  methods: {
    async uploadAvatar(event) {
      console.log(event.target.files);
      const file = event.target.files[0];
      const payload = {};
      const formData = new FormData();
      formData.append('avatar', file);
      payload.file = formData;
      payload.endpoint = this.endpoint;

      try {
        this.file = null;
        await FileService.uploadFile(payload);
        this.$store.dispatch('auth/getAuthUser');
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
};
</script>

<style>
.profile-avatar {
  position: relative;
  grid-row: 1 / 3;
  overflow: hidden;
  border-radius: 100%;
}

.profile-avatar__img-wrapper {
  position: relative;
  padding-bottom: 100%;
}

.profile-avatar__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-avatar__avatar-icon-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: hsla(0, 0%, 0%, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

.profile-avatar:hover .profile-avatar__avatar-icon-wrapper {
  opacity: 1;
}

.profile-avatar__label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.profile-avatar__input {
  display: none;
}
</style>
