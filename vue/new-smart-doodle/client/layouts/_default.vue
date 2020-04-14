<template>
  <div id="wrap">
    <div id="header">
      <gnbComponent />
    </div>
    <div id="contants">
      <nuxt />
    </div>
    <footerComponent />
  </div>
</template>

<script>
import gnbComponent from '~/components/layouts/gnb.vue'
import footerComponent from '~/components/layouts/footer.vue'

export default {
  components: {
    gnbComponent,
    footerComponent
  },
  data() {
    return {}
  },
  beforeMount() {
    // const _this = this
    $('body').on('mousewheel', function(event) {
      const wheel = event.originalEvent.wheelDelta
      if (wheel > 0) {
        // 스크롤 업
        document.querySelector('#header').setAttribute('style', 'top:0')
      } else if (wheel < 0) {
        // 스크롤 다운
        document.querySelector('#header').setAttribute('style', 'top:-104px')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#wrap {
  #contants {
    width: 100%;
    margin-top: 150px;
    text-align: center;
    .container {
      width: 100%;
      max-width: 1600px;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
</style>
