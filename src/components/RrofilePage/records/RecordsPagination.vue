<template>
  <nav class="records-pagination">
    <ul class="records-pagination__list">
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'RecordsPagination',
};
</script>

<style>
.records-pagination__list {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  justify-items: space-between;
  max-width: 400px;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
