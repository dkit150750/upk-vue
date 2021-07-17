<template>
  <li class="footer-phone">
    <a class="footer-phone__link" :href="hrefTel">{{ tel }}</a>
    <span class="footer-caption">{{ desc }}</span>
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
.footer-phone__link {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: var(--color-gray-0);
  text-decoration: none;
  outline: none;
  transition: color 0.3s;
}

.footer-phone__link:focus,
.footer-phone__link:hover {
  --color-gray-0: hsl(0, 0%, 44%);
}

.footer-caption {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-gray-0);
}
</style>
