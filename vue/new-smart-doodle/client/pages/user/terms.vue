<template>
  <div class="join">
    <h1>
      <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
    </h1>
    <p class="txt-title">약관동의</p>
    <ul>
      <li v-for="t in result" :key="t.trmsSeqno">
        <Checkbox :terms="t" />
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from '~/components/checkbox'
export default {
  layout: 'clear',
  components: {
    Checkbox
  },
  data() {
    return {
      result: [
        {
          trmsRvsnSeqno: '1',
          trmsCd: '001',
          cdNm: '이용약관',
          agree: false
        },
        {
          trmsRvsnSeqno: '2',
          trmsCd: '002',
          cdNm: '제공동의',
          agree: false
        },
        {
          trmsRvsnSeqno: '2',
          trmsCd: '003',
          cdNm: '취급방침',
          agree: false
        },
        {
          trmsRvsnSeqno: '1',
          trmsCd: '004',
          cdNm: '취급위탁',
          agree: false
        },
        {
          trmsRvsnSeqno: '1',
          trmsCd: '005',
          cdNm: '개인정보수집',
          agree: false
        },
        {
          trmsRvsnSeqno: '1',
          trmsCd: '006',
          cdNm: '할인정책',
          agree: false
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variable';
h1 {
  img {
    width: 100px;
  }
}
input[type='text'],
input[type='password'] {
  width: 100%;
  margin-top: 14px;
  border: 2px solid $inputColor;
  font-size: 16px;
  padding: 12px 14px;
  border-radius: 8px;
  &:focus {
    border: 2px solid $subActiveColor01;
  }
}
.join {
  .txt-title {
    margin-top: 16px;
    font-size: 26px;
  }
  .fwCheck {
    font-size: 18px;
  }
}
</style>
