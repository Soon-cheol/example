<template>
  <div class="join">
    <h1>
      <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
    </h1>
    <div ref="step" class="step step02">
      <!-- Step01: 약관동의 -->
      <div class="terms">
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
      <!-- // Step01: 약관동의 -->
      <!-- Step02: 정보입력 -->
      <div class="info">
        <h2 class="txt-title">정보입력</h2>
        <div class="input">
          <span class="tit">아이디</span>
          <input type="text" />
        </div>
        <div class="input">
          <span class="tit">이메일</span>
          <input type="text" />
        </div>
        <div class="input">
          <span class="tit">비밀번호</span>
          <input type="password" />
        </div>
        <div class="input">
          <span class="tit">비밀번호 확인</span>
          <input type="password" />
        </div>
        <div class="input">
          <span class="tit">이름</span>
          <input type="text" />
        </div>
        <div class="input">
          <span class="tit">통신사</span>
          <select>
            <option>asf</option>
            <option>asf</option>
            <option>asf</option>
          </select>
        </div>
      </div>
      <!-- // Step02: 정보입력 -->
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
input[type='password'],
select {
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
  .terms {
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
  }
  .info {
    .input {
      position: relative;
      .tit {
        position: absolute;
        padding: 0 6px;
        background: #fff;
        top: 7px;
        left: 14px;
        font-size: 14px;
        z-index: 1;
      }
      & + .input {
        margin-top: 10px;
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

@media screen and (min-width: 451px) {
  .step {
    & > div:first-child {
      display: block;
    }
    & > div:last-child {
      display: none;
    }
    &.step02 {
      & > div:first-child {
        display: none;
      }
      & > div:last-child {
        display: block;
      }
    }
  }
}
</style>
