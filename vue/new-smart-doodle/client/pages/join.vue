<template>
  <div class="container">
    <div class="center" @click.stop>
      <div ref="join" class="join step02">
        <h1>
          <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
        </h1>
        <div class="step">
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
              <input
                v-model="user.loginId"
                placeholder="아이디"
                type="text"
                minlength="4"
                maxlength="15"
                @input="idValidate"
              />
              <span class="tit">아이디</span>
            </div>
            <div class="input">
              <input type="text" />
              <span class="tit">이메일</span>
            </div>
            <button class="setBtn setBtn01 btn-confirm" disabled="disabled">
              인증하기
            </button>
            <div class="input">
              <input type="password" />
              <span class="tit">비밀번호</span>
            </div>
            <div class="input">
              <input type="password" />
              <span class="tit">비밀번호 확인</span>
            </div>
            <div class="input">
              <input type="text" />
              <span class="tit">이름</span>
            </div>
            <div class="input">
              <select>
                <option>asf</option>
                <option>asf</option>
                <option>asf</option>
              </select>
              <span class="tit">통신사</span>
            </div>
            <div class="input">
              <span class="tit">휴대전화번호</span>
              <select>
                <option>asf</option>
                <option>asf</option>
                <option>asf</option>
              </select>
            </div>
            <button class="setBtn setBtn01 btn-confirm" disabled="disabled">
              가입하기
            </button>
          </div>
          <!-- // Step02: 정보입력 -->
        </div>
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
      },
      user: {
        loginId: '',
        email: '',
        pwd1: '',
        pwd2: '',
        memNm: '',
        mblTelRcgnNo: '',
        mblTelNatnNo: '',
        mblTelSeqno: ''
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
        this.$refs.join.classList.add('step02')
      } else {
        alert('필수 약관에 모두 동의해주세요.')
      }
    },
    // 아이디 입력할 때마다 벨리데이션 체크
    idValidate(e) {
      this.user.loginId = e.target.value
      if (e.target.value.length > 3) {
        const v = /^[a-z0-9_]{0,15}$/
        if (v.test(e.target.value)) {
          this.idCheck()
        } else {
          console.log('영문 소문자와 숫자만 이용해주세요.')
        }
      } else {
        console.log('사용할 아이디를 입력하세요. (4글자 이상)')
      }
    },
    // 벨리데이션 체크 통과한 경우 등록된 아이디 중복 체크
    async idCheck(v) {
      try {
        const { data } = await this.$axios.post('member/isuse', {
          loginId: this.user.loginId
        })
        if (data.result.memuserCnt === '0') {
          // 중복 아닌 경우
          console.log('중복 아님')
        } else if (data.result.memuserCnt === '1') {
          // 중복인 경우
          console.log('중복임')
        } else {
          console.log('중복검사 체크 실패')
        }
      } catch (error) {
        console.error(error)
      }
      // this.useBtnActive()
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
    & + span {
      color: $subActiveColor01;
    }
  }
}
.join {
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
        position: relative;
        padding: 0 0 10px 30px;
        margin-top: 12px;
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
    .btn-confirm {
      width: 100%;
      margin: 10px 0;
      padding: 14px 20px;
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

@media screen and (min-width: $loginSize) {
  .container {
    display: table-cell;
    width: 100%;
    vertical-align: middle;
    .center {
      width: 100%;
      max-width: $loginSize;
      margin: 0 auto;
      padding: 50px;
      border: 1px solid #dadce0;
      border-radius: 8px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
      .join {
        overflow: hidden;
        position: relative;
        height: 500px;
        transition: height 0.4s;
        -webkit-transition: height 0.4s;
        .step {
          position: absolute;
          width: 800px;
          left: 0;
          transition: left 0.4s;
          -webkit-transition: left 0.4s;
          & > div {
            float: left;
            width: 348px;
            & + div {
              margin-left: 100px;
            }
          }
        }
        &.step02 {
          height: 718px;
          .step {
            left: -448px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: $loginSize) {
  .container {
    width: 100%;
    .center {
      width: 96%;
      margin: 50px 2%;
      padding: 10% 6%;
      .join {
        .step {
          & > div:first-child {
            display: block;
          }
          & > div:last-child {
            display: none;
          }
        }
        &.step02 {
          .step {
            & > div:first-child {
              display: none;
            }
            & > div:last-child {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
