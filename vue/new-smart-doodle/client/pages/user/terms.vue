<template>
  <div class="join">
    <h1>
      <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
    </h1>
    <div ref="step" class="step">
      <div>
        <h2 class="txt-title">약관동의</h2>
        <p class="txt-all-check" @click="allCheck">
          <Checkbox :terms="allAgree" />
        </p>
        <ul class="terms-list">
          <li v-for="t in termsList" :key="t.trmsSeqno" @click="listCheck">
            <Checkbox :terms="t" />
          </li>
        </ul>
        <div class="option">
          <button class="setBtn setBtn01" @click="goCancle">취소</button>
          <button class="setBtn setBtn02" @click="goInfo">다음</button>
        </div>
      </div>
      <div class="info">
        <h2 class="txt-title">정보입력</h2>
      </div>
    </div>
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
    // 취소
    goCancle() {
      this.$router.push('/user')
    },
    // 약관 모두 동의
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
    // 약관 개별 동의
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
    },
    // 약관동의 -> 정보입력 벨리데이션 체크
    goInfo() {
      const sel = document.querySelectorAll('.terms-list input')
      if (sel.length === this.aNum) {
        this.$refs.step.classList.add('step02')
      } else {
        alert('필수 약관에 모두 동의해주세요.')
      }
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
  overflow: hidden;
  position: relative;
  height: 510px;
  .step {
    position: absolute;
    width: 800px;
    left: 0;
    transition: left 0.4s;
    -webkit-transition: left 0.4s;
    &.step02 {
      left: -448px;
    }
    & > div {
      float: left;
      width: 348px;
      & + div {
        margin-left: 100px;
      }
    }
  }
  .txt-title {
    margin: 16px 0;
    font-size: 26px;
  }
  .txt-all-check {
    font-size: 18px;
    color: $disableColor;
  }
  .terms-list {
    li {
      margin-top: 12px;
      position: relative;
      padding: 0 0 10px 30px;
      border-bottom: 1px solid $inputColor;
      font-size: 18px;
      color: $disableColor;
      &::before {
        position: absolute;
        content: 'ㄴ';
        top: 1px;
        left: 7px;
      }
      &:last-child {
        border-bottom: 0 none;
      }
    }
  }
  .option {
    overflow: hidden;
    margin-top: 30px;
    *:first-child {
      float: left;
    }
    *:last-child {
      float: right;
    }
  }
}
</style>
