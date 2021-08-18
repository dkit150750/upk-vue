<template>
  <footer class="footer">
    <div class="footer__container">
      <address class="footer__contacts">
        <ul class="footer__phones">
          <FooterPhone tel="+7 (48746) 3-68-85" desc="Телефон для справок" />
        </ul>
        <p class="footer__address">
          Донской, микрорайон Бобрик-Гора, ул. 30 лет Победы, 4
        </p>
      </address>
    </div>
  </footer>
</template>

<script>
import FooterPhone from '@/components/Footer/FooterPhone.vue';

export default {
  name: 'TheFooter',

  components: {
    FooterPhone,
  },
};
</script>

<style>
.light .footer {
  --footer-color: var(--color-gray-400);
  --footer-background: var(--color-gray-800);
}

.dark .footer {
  --footer-color: var(--color-gray-400);
  --footer-background: var(--color-gray-1000);
}

.footer {
  background-color: var(--footer-background);
  color: var(--footer-color);
  min-height: 282px;
}

.dark {
  --page-color: var(--color-gray-100);
  --page-background: var(--color-gray-900);
}

.footer__container {
  max-width: var(--max-width);
  padding: 64px 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .footer__container {
    padding: 64px 40px;
  }
}

.footer__contacts {
  font-style: normal;
}

.footer__phones {
  display: grid;
  grid-gap: 16px;
  align-items: flex-start;
  padding: 0;
  margin: 0 0 32px;
  margin-bottom: 28px;
  list-style: none;
}

.footer__address {
  max-width: 300px;
  margin: 0;
  font-size: 15px;
}
</style>
