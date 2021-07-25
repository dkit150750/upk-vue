<template>
  <div class="profile">
    <div class="profile__container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileWrapper',
};
</script>

<style>
.profile__container {
  padding: 30px 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .profile__container {
    padding: 30px 40px;
  }
}

@media (min-width: 768px) {
  .profile__container {
    max-width: 776px;
  }
}

@media (min-width: 1024px) {
  .profile__container {
    max-width: 1008px;
  }
}

@media (min-width: 1280px) {
  .profile__container {
    max-width: 1248px;
  }
}
</style>
