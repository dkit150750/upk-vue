<template>
  <div class="profile-info">
    <div class="profile-info__inner">
      <div class="profile-info__header">
        <h2 class="profile-info__title">{{ title }}</h2>
        <p class="profile-info__description" v-if="description">
          {{ description }}
        </p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
.profile-info {
  padding: 32px 16px;
  background-color: var(--profile-card-backgrouind);
  border-radius: 20px;
}

@media (min-width: 1024px) {
  .profile-info {
    padding: 40px 80px;
  }
}

@media (min-width: 1280px) {
  .profile-info {
    padding: 48px 98px;
  }
}

@media (min-width: 768px) {
  .profile-info__inner {
    max-width: 456px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .profile-info__inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 32px;
    max-width: 100%;
  }
}

.profile-info__header {
  margin-bottom: 20px;
}

.profile-info__title {
  margin: 0;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 600;
}

.profile-info__description {
  margin: 0;
  font-size: 14px;
}
</style>
