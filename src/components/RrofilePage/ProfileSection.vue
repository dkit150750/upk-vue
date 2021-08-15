<template>
  <div class="profile-section">
    <div class="profile-section__inner">
      <div class="profile-section__header">
        <h2 class="profile-section__title">{{ title }}</h2>
        <p class="profile-section__description" v-if="description">
          {{ description }}
        </p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSection',

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
.profile-section {
  padding: 32px 16px;
  background-color: var(--color-gray-150);
  border-radius: 20px;
}

@media (min-width: 1024px) {
  .profile-section {
    padding: 40px 80px;
  }
}

@media (min-width: 1280px) {
  .profile-section {
    padding: 48px 98px;
  }
}

@media (min-width: 768px) {
  .profile-section__inner {
    max-width: 456px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .profile-section__inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 32px;
    max-width: 100%;
  }
}

.profile-section__header {
  margin-bottom: 20px;
}

.profile-section__title {
  margin: 0;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 600;
}

.profile-section__description {
  margin: 0;
  font-size: 14px;
}
</style>
