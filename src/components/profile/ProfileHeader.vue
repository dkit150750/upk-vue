<template>
  <div class="profile-header">
    <ProfileHeaderAvatar />
    <h1 class="profile-header__full-name">{{ fullName }}</h1>
    <p class="profile-header__email">{{ this.authUser.email }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProfileHeaderAvatar from '@/components/profile/ProfileHeaderAvatar.vue';

export default {
  name: 'ProfileHeader',

  components: {
    ProfileHeaderAvatar,
  },

  computed: {
    ...mapGetters('auth', ['authUser']),
    fullName() {
      return this.authUser.name + ' ' + this.authUser.lastname;
    },
  },
};
</script>

<style>
.profile-header {
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: 48px 1fr;
  gap: 10px 20px;
  align-items: center;
}

@media (min-width: 768px) {
  .profile-header {
    grid-template-columns: 80px max-content;
    gap: 15px 20px;
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .profile-header {
    grid-template-columns: 100px max-content;
    gap: 16px 20px;
    justify-content: center;
  }
}

.profile-header__full-name {
  align-self: flex-end;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
}

@media (min-width: 768px) {
  .profile-header__full-name {
    font-size: 22px;
  }
}

@media (min-width: 1024px) {
  .profile-header__full-name {
    font-size: 25px;
  }
}

.profile-header__email {
  align-self: flex-start;
  margin: 0;
  font-size: 16px;
  line-height: 1;
}
</style>
