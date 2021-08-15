<template>
  <svg
    class="header-link-icon"
    xmlns="http://www.w3.org/2000/svg"
    id="i-login"
    viewBox="0 0 21 17"
    fill="none"
  >
    <path
      d="M1 8a.5.5 0 000 1V8zm14.354.854a.5.5 0 000-.708l-3.182-3.182a.5.5 0 10-.708.708L14.293 8.5l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM1 9h14V8H1v1z"
      fill="currentColor"
    ></path>
    <path
      d="M6.843 14.157a.477.477 0 00.01.696 8.5 8.5 0 100-12.706.477.477 0 00-.01.696c.195.195.51.193.718.012a7.501 7.501 0 110 11.29.526.526 0 00-.718.012z"
      fill="currentColor"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'HeaderLinkIcon',
};
</script>

<style>
.header-link-icon {
  display: none;
}

@media (min-width: 600px) {
  .header-link-icon {
    display: block;
    width: 22px;
    height: 18px;
    fill: currentColor;
  }
}
</style>
