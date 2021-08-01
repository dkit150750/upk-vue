<template>
  <div class="records-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RecordsList',
};
</script>

<style>
.records-list {
  display: grid;
  gap: 20px;
  justify-items: center;
  margin-bottom: 30px;
}

@media (min-width: 1024px) {
  .records-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
