<template>
  <div id="wrap">
    <div id="header">
      <gnbComponent />
    </div>
    <div id="contants">
      <nuxt />
    </div>
  </div>
</template>

<script>
import gnbComponent from '~/components/layouts/gnb.vue'

export default {
  components: {
    gnbComponent
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
        document.querySelector('#header').setAttribute('style', 'top:-200px')
      }
    })
  }
}
</script>
