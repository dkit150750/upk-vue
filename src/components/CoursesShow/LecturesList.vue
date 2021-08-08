<template>
  <div class="lectures-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LecturesList',
};
</script>

<style>
.lectures-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
}
</style>
