<template>
  <div class="join">
    <h1>
      <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
    </h1>
    <p class="txt-title">약관동의</p>
    <p class="txt-all-check" @click="allCheck">
      <Checkbox :terms="allAgree" />
    </p>
    <ul class="terms-list">
      <li v-for="t in termsList" :key="t.trmsSeqno" @click="listCheck">
        <Checkbox :terms="t" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Checkbox from '~/components/checkbox'
export default {
  layout: 'clear',
  components: {
    Checkbox
  },
  async asyncData({ store }) {
    await store.dispatch('user/termsGet')
  },
  data() {
    return {
      aNum: 0,
      allAgree: {
        trmsRvsnSeqno: '0',
        trmsCd: '000',
        cdNm: '약관에 모두 동의합니다.',
        agree: false
      }
    }
  },
  computed: {
    ...mapState({
      termsList: (state) => state.user.terms
    })
  },
  // watch: {
  //   termsList() {
  //     console.log('list')
  //     this.list = this.termsList
  //   }
  // },
  methods: {
    allCheck() {
      this.allAgree.agree = document.querySelector(
        '.txt-all-check input'
      ).checked
      const sel = document.querySelectorAll('.terms-list input')
      for (let i = 0; i < sel.length; i++) {
        if (this.allAgree.agree) {
          sel[i].checked = true
          this.aNum = sel.length
        } else {
          sel[i].checked = false
          this.aNum = 0
        }
      }
    },
    listCheck(e) {
      this.aNum = 0
      const all = document.querySelector('.txt-all-check input')
      const sel = document.querySelectorAll('.terms-list input')
      for (let i = 0; i < sel.length; i++) {
        if (sel[i].checked) {
          this.aNum += 1
        }
      }
      sel.length === this.aNum ? (all.checked = true) : (all.checked = false)
    }
  }
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
    margin: 16px 0;
    font-size: 26px;
  }
  .txt-all-check {
    font-size: 18px;
    color: $disableColor;
  }
  .terms-list {
    margin: 4px 0 0 7px;
    li {
      margin-top: 12px;
      position: relative;
      padding-left: 20px;
      font-size: 18px;
      color: $disableColor;
      &::before {
        position: absolute;
        content: 'ㄴ';
        top: 1px;
        left: 0;
      }
    }
  }
}
</style>
