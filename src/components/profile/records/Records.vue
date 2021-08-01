<template>
  <div class="records">
    <div class="records__contaner">
      <h2 class="records__title">Мои записи</h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Records',
};
</script>

<style>
.records__contaner {
  max-width: var(--max-width);
  padding: 30px 16px 140px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .records__contaner {
    padding: 30px 40px 140px;
  }
}

@media (min-width: 768px) {
  .records__contaner {
    max-width: 776px;
  }
}

@media (min-width: 1024px) {
  .records__contaner {
    max-width: 1008px;
  }
}

@media (min-width: 1280px) {
  .records__contaner {
    max-width: 1248px;
  }
}

.records__title {
  margin-bottom: 40px;
}
</style>
