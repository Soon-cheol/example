<template>
  <div class="container">
    <div class="center">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variable';
@media screen and (min-width: $loginSize) {
  .container {
    display: table-cell;
    width: 100%;
    vertical-align: middle;
    .center {
      width: 100%;
      max-width: $loginSize;
      margin: 0 auto;
      padding: 50px;
      border: 1px solid #dadce0;
      border-radius: 8px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
    }
  }
}
@media screen and (max-width: $loginSize) {
  .container {
    width: 100%;
    .center {
      width: 92%;
      margin: 50px 4%;
    }
  }
}
</style>
