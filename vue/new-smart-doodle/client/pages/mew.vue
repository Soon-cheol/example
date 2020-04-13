<template>
  <div class="container">
    <client-only>
      <full-page id="fullpage" ref="fullpage" :options="options">
        <div class="section">
          노래로 배우는 영어<br />
          놀이로 배우는 영어<br />
          NEW 특징과 장점
        </div>
        <div class="section">
          아동 발달에 알맞은 다중지능 + 누리과정 연계 프로그램<br /><br />
          뮤 너서리라임은 다중지능과 누리과정을 반영하여 학습활동을
          구성하였습니다.<br />
          단일 지능 발달 뿐만 아니라 각 지능영역의 상호작용을 통해 <br />
          성장중인 우리 아이의 문제 해결능력 발달과 창의력 확장에 도움을 줍니다.
        </div>
        <div class="section">
          단계별로 스스로 성취할 수 있도록 친절한 가이드 제공<br />
          단계별로 난이도를 높여가며 자연스러운 반복학습을 통해 습득한 정보를
          강화해줍니다.
        </div>
        <div class="section">
          프로그램 상세 구성<br />
          단순한 영어 동요만 보는 것이 아니라 놀이를 통해 영어를 배우는
          프로그램<br />
          학습 코너 구성은 아이들의 집중 시간을 고려해 짧고, 다양한 형태로
          반복하여 학습 효과를 높였습니다. 학습 내용을 인지하고 기억하며
          수행하고 쉬어가는 코너에서 두뇌를 이완시켜주는 재미있는 창작활동으로
          구성되어 아이들이 끝까지 지루해하거나 지치지 않도록 다양한 활동을
          제공합니다.
        </div>
        <div class="section">
          <img src="~assets/images/sample/mew.JPG" />
          <footerComponent />
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import footerComponent from '~/components/layouts/footer.vue'
export default {
  layout: 'fullpage',
  components: {
    footerComponent
  },
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        afterLoad: this.afterLoad,
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
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

<style lang="scss" scoped></style>
