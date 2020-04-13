<template>
  <div v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback">
    <div class="swiper-wrapper">
      <div v-for="(banner, index) in banners" :key="index" class="swiper-slide">
        <!-- <img :src="banner" /> -->
        <img src="~assets/images/sample/main_swiper01.jpg" />
      </div>
    </div>
    <div class="swiper-pagination" />
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      banners: this.lists,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {
    // this.banners = this.lists
    // console.log('this.lists', this.lists)
  },
  methods: {
    callback() {}
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
</style>
