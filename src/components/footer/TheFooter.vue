<template>
  <footer class="footer">
    <div class="footer__container">
      <address class="footer__contacts">
        <ul class="footer__phones">
          <FooterPhone
            v-for="phone in phones"
            :key="phone.id"
            :tel="phone.tel"
            :desc="phone.desc"
          />
        </ul>
        <p class="footer__address">
          Донской, микрорайон Бобрик-Гора, ул. 30 лет Победы, 4
        </p>
      </address>
    </div>
  </footer>
</template>

<script>
import FooterPhone from '@/components/footer/FooterPhone.vue';

export default {
  name: 'TheFooter',

  components: {
    FooterPhone,
  },

  data() {
    return {
      phones: [
        {
          id: 1,
          tel: '8 (800) 500-05-22',
          desc: 'Контактный центр',
        },
        {
          id: 2,
          tel: '+7 499 444 90 36',
          desc: 'Отдел заботы о студентах',
        },
      ],
    };
  },
};
</script>

<style>
.footer {
  background-color: var(--color-gray-800);
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
  color: var(--color-gray-0);
}
</style>
