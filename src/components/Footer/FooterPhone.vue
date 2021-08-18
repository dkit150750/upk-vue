<template>
  <li class="footer-phone">
    <a class="footer-phone__link" :href="hrefTel">{{ tel }}</a>
    <span class="footer-phone__desc">{{ desc }}</span>
  </li>
</template>

<script>
export default {
  name: 'FooterPhone',

  props: {
    tel: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      hrefTel: `tel:${this.tel}`,
    };
  },
};
</script>

<style>
.footer-phone {
  display: grid;
  gap: 5px;
  justify-content: start;
}

.footer-phone__link {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.04em;
  color: inherit;
  text-decoration: none;
  outline: none;
  transition: color 0.3s;
}

.footer-phone__link:focus,
.footer-phone__link:hover {
  color: var(--color-gray-50);
}

.footer-phone__desc {
  display: block;
  font-size: 13px;
  line-height: 16px;
}
</style>
