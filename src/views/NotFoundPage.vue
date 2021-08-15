<template>
  <div class="error-404">
    <div class="error-404__container">
      <h1 class="error-404__title">404</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style>
.error-404 {
  height: 100%;
}
.error-404__container {
  display: flex;
  max-width: var(--max-width);
  height: 100%;
  padding: 30px 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .error-404__container {
    padding: 30px 40px;
  }
}

@media (min-width: 768px) {
  .error-404__container {
    padding: 90px 40px;
  }
}

.error-404__title {
  margin: auto;
  font-size: 30vw;
  font-weight: 900;
}

@media (min-width: 1300px) {
  .error-404__title {
    font-size: 400px;
  }
}
</style>
