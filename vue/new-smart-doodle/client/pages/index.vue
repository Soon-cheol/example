<template>
  <div class="container">
    <Swiper :lists="swiperList" />
    <div class="section">
      <h3>특징1</h3>
      <p>노래를 통해 영어로 즐겁게 놀이할 수 있습니다.</p>
    </div>
    <div class="section">
      <h3>특징2</h3>
      <p>아동 발달에 알맞은 다중지능 + 누리과정 연계 프로그램</p>
    </div>
    <div class="section">
      <h3>특징3</h3>
      <p>단계별로 스스로 성취할 수 있도록 친절한 가이드 제공</p>
    </div>
    <div class="section">
      <h3>MEW 프로그램</h3>
      <p>
        단순한 영어 동요만 보는 것이 아니라 놀이를 통해 영어를 배우는 프로그램
      </p>
    </div>
  </div>
</template>

<script>
import Swiper from '~/components/swiper'
export default {
  components: {
    Swiper
  },
  data() {
    return {
      swiperList: [
        '~assets/images/sample/main_swiper01.jpg',
        '~assets/images/sample/main_swiper02.jpg'
      ]
    }
  },
  mounted() {},
  methods: {
    afterLoad() {
      console.log("Emitted 'after load' event.")
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #2fb0c0;
$defaultColor: #333;
.container {
  .section {
    background: #dfdfdf;
    padding: 200px;
    margin-top: 20px;
  }
}
</style>
