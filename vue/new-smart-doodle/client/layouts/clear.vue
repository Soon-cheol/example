<template>
  <div id="wrap">
    <div id="contants">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variable';
@media screen and (min-width: $loginSize) {
  #wrap {
    #contants {
      position: fixed;
      top: 0;
      left: 0;
      display: table;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
</style>
