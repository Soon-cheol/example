<template>
  <div class="container">
    <div class="center" @click.stop>
      <div ref="join" class="join">
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
                <button>보기</button>
              </li>
            </ul>
            <div class="option">
              <button class="setBtn setBtn02" @click="goCancel">취소</button>
              <button
                ref="btnTerms"
                class="setBtn setBtn01"
                disabled="disabled"
                @click="goInfo"
              >
                다음
              </button>
            </div>
          </div>
          <!-- // Step01: 약관동의 -->
          <div class="info">
            <div v-if="!confirm">
              <!-- Step02-1: 아이디 메일 중복체크 -->
              <div v-if="!count">
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
                  <span class="tit" :class="{ active: idVal.bool }"
                    >아이디 {{ idVal.text }}</span
                  >
                </div>
                <div class="input">
                  <input
                    v-model="user.memEmlNm"
                    type="text"
                    placeholder="이메일"
                    @input="emailValidate"
                  />
                  <span class="tit" :class="{ active: emailVal.bool }"
                    >이메일 {{ emailVal.text }}</span
                  >
                </div>
                <button
                  ref="btnConfirm"
                  class="setBtn setBtn01 btn-confirm"
                  disabled="disabled"
                  @click="emailConfirm"
                >
                  인증하기
                </button>
              </div>
              <!-- // Step02-1: 아이디 메일 중복체크 -->
              <!-- Step02-2: 이메일 인증 -->
              <div v-if="count" class="email-confirm">
                <h2 class="txt-title">인증하기</h2>
                <p class="txt-email">
                  <span>{{ user.memEmlNm }}</span
                  >로 발송된 인증번호를 10분 안에 입력해주세요.
                </p>
                <div class="txt-timer">{{ timer.min }}분 {{ timer.sec }}초</div>
                <input
                  ref="numConfirm"
                  type="text"
                  maxlength="6"
                  minlength="6"
                  @keyup="confirmNumber"
                />
                <button
                  ref="btnNumConfirm"
                  class="setBtn setBtn01 btn-confirm"
                  disabled="disabled"
                  @click="emailNumConfirm"
                >
                  다음
                </button>
              </div>
              <!-- // Step02-2: 이메일 인증 -->
            </div>
            <!-- Step03: 정보입력 -->
            <div v-if="confirm">
              <h2 class="txt-title">정보입력</h2>
              <div class="input">
                <input
                  class="disabled"
                  type="text"
                  disabled="disabled"
                  readonly="readonly"
                  :value="user.loginId"
                />
                <span class="tit active">가입 아이디</span>
              </div>
              <div class="input">
                <input
                  class="disabled"
                  type="text"
                  disabled="disabled"
                  readonly="readonly"
                  :value="user.memEmlNm"
                />
                <span class="tit active">가입 이메일</span>
              </div>
              <div class="input">
                <input
                  v-model="pwdVal1.pwd"
                  type="password"
                  minlength="8"
                  maxlength="20"
                  placeholder="8~20자"
                  @input="pwdValidate1"
                />
                <span class="tit" :class="{ active: pwdVal1.bool }"
                  >비밀번호 {{ pwdVal1.text }}</span
                >
              </div>
              <div class="input">
                <input
                  ref="pwdVal2"
                  v-model="pwdVal2.pwd"
                  type="password"
                  minlength="8"
                  maxlength="20"
                  placeholder="8~20자"
                  :class="{ disabled: !pwdVal1.bool }"
                  disabled="disabled"
                  @input="pwdValidate2"
                />
                <span class="tit" :class="{ active: pwdVal2.bool }"
                  >비밀번호 확인 {{ pwdVal2.text }}</span
                >
              </div>
              <div class="input">
                <input
                  v-model="user.memNm"
                  type="text"
                  minlength="2"
                  maxlength="10"
                  placeholder="이름"
                />
                <span class="tit" :class="{ active: user.memNm.length >= 2 }"
                  >이름</span
                >
              </div>
              <div class="input">
                <select @change="agencySelect">
                  <option value="00">선택하세요</option>
                  <option
                    v-for="p in phoneAgencyList"
                    :key="p.index"
                    :value="p.cd"
                    >{{ p.cdNm }}</option
                  >
                </select>
                <span class="tit" :class="{ active: phoneAgency.bool }"
                  >통신사</span
                >
              </div>
              <div class="input phone">
                <input
                  v-model="user.mblTelRcgnNo"
                  type="text"
                  minlength="3"
                  maxlength="3"
                  @keyup="numberOnly('phone1')"
                />
                <span class="hypen">-</span>
                <input
                  v-model="user.mblTelNatnNo"
                  type="text"
                  minlength="3"
                  maxlength="4"
                  @keyup="numberOnly('phone2')"
                />
                <span class="hypen">-</span>
                <input
                  v-model="user.mblTelSeqno"
                  type="text"
                  minlength="3"
                  maxlength="4"
                  @keyup="numberOnly('phone3')"
                />
                <span
                  class="tit"
                  :class="{
                    active:
                      user.mblTelRcgnNo.length === 3 &&
                      user.mblTelNatnNo.length >= 3 &&
                      user.mblTelSeqno.length === 4
                  }"
                  >휴대전화번호</span
                >
              </div>
              <button
                ref="btnJoin"
                class="setBtn setBtn01 btn-confirm"
                @click="signup"
              >
                가입하기
              </button>
              <!-- // Step03: 정보입력 -->
            </div>
            <button class="setBtn setBtn02" @click="goCancel">
              회원가입 취소
            </button>
          </div>
          <!-- Step04: 가입 완료 -->
          <div class="end">
            <h2 class="txt-title">가입 완료</h2>
            <p class="txt-welcome">
              회원가입을 환영합니다.
            </p>
            <p class="txt-sub">
              안녕하세요. <strong>{{ user.memNm }}</strong> 회원님! <br />
              스마트 두들 회원이 되신 것을 축하 드립니다.<br />로그인 하신 후
              다양한 콘텐츠와 함께 하세요.
            </p>
            <n-link to="/user" class="setBtn setBtn01 btn-login">
              로그인 하기
            </n-link>
          </div>
          <!-- // Step04: 가입 완료 -->
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
    await store.dispatch('user/phoneAgencyGet')
  },
  data() {
    return {
      aNum: 0,
      confirm: false,
      count: false,
      idVal: {
        bool: false,
        text: ''
      },
      emailVal: {
        bool: false,
        text: ''
      },
      timer: {
        total: 600,
        min: 10,
        sec: 0
      },
      pwdVal1: {
        pwd: '',
        text: ': 영문 대/소문자, 숫자, 특수문자 가능',
        bool: false
      },
      pwdVal2: {
        pwd: '',
        text: '',
        bool: false
      },
      allAgree: {
        trmsRvsnSeqno: '0',
        trmsCd: '000',
        cdNm: '약관에 모두 동의합니다.',
        agree: false
      },
      phoneAgency: {
        bool: false
      },
      user: {
        loginId: '', // 로그인_ID
        pwd: '', // 비밀번호
        memNm: '', // 회원_명
        memEmlNm: '', // 이메일_주소_명
        mnoCd: '', // 통신사코드
        mblTelRcgnNo: '', // 휴대_전화_식별번호
        mblTelNatnNo: '', // 휴대_전화_국_번호
        mblTelSeqno: '', // 휴대_전화_일련번호
        trmsI: [], // 회원가입약관동의정보
        // 아래부터 현재 안 받는 정보
        hgrkMemId: 'mini111', // 상위_로그인_ID
        memDivCd: 'G', // 회원_구분_코드
        acDivCd: 'R', // 계정_구분_코드
        brthDivCd: '', // 생일_구분_코드
        memBthYmd: '', // 생년월일
        sexCd: '', // 성별_코드
        joinSnsNm: '', // 가입_SNS_명
        infwSnsCd: '00', // 유입_SNS_코드
        siteInfwPathCd: '', // 사이트_유입_경로_코드
        genTelAreaNo: '02', // 일반_전화_지역_번호
        genTelNatnNo: '111', // 일반_전화_국_번호
        genTelSeqno: '1111', // 일반_전화_일련번호
        ag14LsthYn: 'N', // 만14세_미만_여부
        grdnAgrYn: 'N' // 보호자_동의_여부
      }
    }
  },
  computed: {
    ...mapState({
      termsList: (state) => state.user.terms,
      phoneAgencyList: (state) => state.user.phoneAgency
    })
  },
  // updated() {
  //   console.log('업데이트')
  // },
  // watch: {
  //   user() {}
  // },
  methods: {
    // 취소
    goCancel() {
      this.$router.push('/user')
    },
    // ------------------- step01 -------------------
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
          this.$refs.btnTerms.removeAttribute('disabled')
        } else {
          sel[i].checked = false
          this.aNum = 0
          this.$refs.btnTerms.setAttribute('disabled', 'disabled')
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
      // sel.length === this.aNum ? (all.checked = true) : (all.checked = false)
      if (sel.length === this.aNum) {
        this.$refs.btnTerms.removeAttribute('disabled')
        all.checked = true
      } else {
        this.$refs.btnTerms.setAttribute('disabled', 'disabled')
        all.checked = false
      }
    },
    // 약관동의 -> 정보입력 벨리데이션 체크
    goInfo() {
      const sel = document.querySelectorAll('.terms-list input')
      if (sel.length === this.aNum) {
        for (let i = 0; i < sel.length; i++) {
          if (sel[i].checked) {
            this.user.trmsI.push({
              trmsRvsnSeqno: this.termsList[i].trmsRvsnSeqno,
              trmsCd: this.termsList[i].trmsCd
            })
          }
        }
        this.$refs.join.classList.add('step02')
        this.$refs.join.classList.remove('step03')
        // } else {
        //   alert('필수 약관에 모두 동의해주세요.')
      }
    },
    // ------------------- step02 -------------------
    // 아이디 입력할 때마다 벨리데이션 체크
    idValidate(e) {
      this.user.loginId = e.target.value
      if (this.user.loginId.length > 3) {
        const v = /^[a-z0-9_]{0,15}$/
        if (v.test(this.user.loginId)) {
          this.idCheck()
        } else {
          this.idVal.text = ': 영문 소문자와 숫자만 이용해주세요.'
          this.idVal.bool = false
        }
      } else if (
        this.user.loginId === '' ||
        this.user.loginId === null ||
        this.user.loginId === undefined
      ) {
        this.idVal.text = ''
        this.idVal.bool = false
      } else {
        this.idVal.text = ': 사용할 아이디를 입력하세요. (4글자 이상)'
        this.idVal.bool = false
      }
      this.confirmValidate()
    },
    // 벨리데이션 체크 통과한 경우 등록된 아이디 중복 체크
    async idCheck() {
      try {
        const { data } = await this.$axios.post('member/isuse', {
          loginId: this.user.loginId
        })
        if (data.result.memuserCnt === '0') {
          // 중복 아닌 경우
          this.idVal.text = ': 사용이 가능한 아이디 입니다.'
          this.idVal.bool = true
        } else if (data.result.memuserCnt === '1') {
          // 중복인 경우
          this.idVal.text = ': 등록된 아이디 입니다.'
          this.idVal.bool = false
        } else {
          this.idVal.text = ': 아이디 중복 체크 오류입니다.'
          this.idVal.bool = false
          console.log('중복검사 체크 실패')
        }
      } catch (error) {
        console.error(error)
      }
      this.confirmValidate()
    },
    // 이메일 입력할 때마다 벨리데이션 체크
    emailValidate(e) {
      this.user.memEmlNm = e.target.value
      // eslint-disable-next-line no-useless-escape
      const v = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{0,3}$/i
      if (v.test(this.user.memEmlNm)) {
        this.emailCheck()
      } else if (
        this.user.memEmlNm === '' ||
        this.user.memEmlNm === null ||
        this.user.memEmlNm === undefined
      ) {
        this.emailVal.text = ''
        this.emailVal.bool = false
      } else {
        this.emailVal.text = ': e-mail 형식이 올바르지 않습니다.'
        this.emailVal.bool = false
      }
      this.confirmValidate()
    },
    // 벨리데이션 체크 통과한 경우 등록된 이메일 중복 체크
    async emailCheck() {
      try {
        const { data } = await this.$axios.post('member/isemailuse', {
          memEmlNm: this.user.memEmlNm
        })
        if (data.result.memEmailUserCnt === '0') {
          this.emailVal.text = ': 인증이 가능한 e-mail 형식입니다.'
          this.emailVal.bool = true
        } else if (data.result.memEmailUserCnt === '1') {
          this.emailVal.text = ': 사용중인 이메일 입니다.'
          this.emailVal.bool = false
        } else {
          console.log('이메일 중복검사 체크 실패')
        }
      } catch (error) {
        console.error(error)
      }
      this.confirmValidate()
    },
    // 이메일 인증 활성화
    confirmValidate() {
      if (this.idVal.bool && this.emailVal.bool) {
        this.$refs.btnConfirm.removeAttribute('disabled')
      } else {
        this.$refs.btnConfirm.setAttribute('disabled', 'disabled')
      }
    },
    // 이메일 인증 진행
    emailConfirm() {
      this.$axios.post('email/sendJoin', {
        toemail: this.user.memEmlNm
      })
      this.count = true
      this.sendEmail()
      // 인증 성공 시
      // this.$refs.join.classList.add('confirm')
      // this.confirm = true
    },
    // 인증 카운트 다운 스타트
    sendEmail() {
      const _this = this
      setInterval(function() {
        _this.timer.min = parseInt(_this.timer.total / 60)
        _this.timer.sec = _this.timer.total % 60
        _this.timer.total--
        if (_this.timer.total <= 0) {
          _this.$emit('closeCall')
        }
      }, 1000)
    },
    // 인증번호 숫자 체크
    confirmNumber(e) {
      const v = /^[0-9]+$/
      if (!v.test(e.target.value)) {
        e.target.value = ''
      }
      if (e.target.value.length === 6) {
        this.$refs.btnNumConfirm.removeAttribute('disabled')
      } else {
        this.$refs.btnNumConfirm.setAttribute('disabled', 'disabled')
      }
    },
    // 인증번호 확인
    async emailNumConfirm() {
      const { data } = await this.$axios.post('email/selsendcurrentdiff', {
        toemail: this.user.memEmlNm,
        currentCode: this.$refs.numConfirm.value
      })
      // console.log('data', data.result)
      if (data.result) {
        this.$refs.join.classList.add('confirm')
        this.confirm = true
      } else {
        alert('인증번호를 확인해주세요.')
        this.$refs.btnNumConfirm.value = ''
      }
    },
    // ------------------- step03 -------------------
    // 비번 밸리 체크 후 -> 비번 확인 활성화
    pwdValidate1(e) {
      this.pwdVal1.pwd = e.target.value
      if (this.pwdVal1.pwd.length > 8) {
        this.pwdVal1.text = ': 사용 가능한 비밀번호 입니다.'
        this.pwdVal1.bool = true
        this.$refs.pwdVal2.removeAttribute('disabled')
      } else {
        this.pwdVal1.text = ': 영문 대/소문자, 숫자, 특수문자 가능'
        this.pwdVal2.text = ''
        this.pwdVal1.bool = false
        this.pwdVal2.bool = false
        this.$refs.pwdVal2.setAttribute('disabled', 'disabled')
        this.pwdVal2.pwd = ''
        this.user.pwd = ''
      }
      // const v = /^(?=.*[a-zA-Z])(?=.* [^a-zA-Z0-9])(?=.*[0-9]).{8,20}$/
      // v.test(this.pwdVal1.pwd)
      //   ? (this.pwdVal1.text = ': 사용 가능한 비밀번호 입니다.')
      //   : (this.pwdVal1.text = ': 영문 대/소문자, 숫자, 특수문자 가능')
    },
    // 비번 확인과 비번 비교
    pwdValidate2(e) {
      if (this.pwdVal2.pwd === this.pwdVal1.pwd) {
        this.pwdVal2.text = ': 비밀번호가 일치합니다.'
        this.pwdVal2.bool = true
        this.user.pwd = this.pwdVal1.pwd
      } else {
        this.pwdVal2.text = ': 비밀번호가 일치하지 않습니다.'
        this.pwdVal2.bool = false
        this.user.pwd = ''
      }
    },
    // nameValidate(e) {
    //   if (e.target.value.length >= 2) this.user.memNm = e.target.value
    // },
    // 통신사 선택
    agencySelect(e) {
      this.user.mnoCd = e.target.value
      this.user.mnoCd === '00'
        ? (this.phoneAgency.bool = false)
        : (this.phoneAgency.bool = true)
    },
    // 전화번호 입력 숫자만
    numberOnly(txt) {
      const v = /^[0-9]+$/
      if (txt === 'phone1') {
        if (!v.test(this.user.mblTelRcgnNo)) {
          this.user.mblTelRcgnNo = ''
        }
      } else if (txt === 'phone2') {
        if (!v.test(this.user.mblTelNatnNo)) {
          this.user.mblTelNatnNo = ''
        }
      } else if (txt === 'phone3') {
        if (!v.test(this.user.mblTelSeqno)) {
          this.user.mblTelSeqno = ''
        }
      }
    },
    // 가입하기
    async signup() {
      if (this.user.trmsI.length <= 0) {
        alert('가입을 다시 진행해주세요.')
        console.log('약관동의 오류')
        this.$router.push('/join')
        return
      }
      if (
        this.user.memNm === '' ||
        this.user.memNm === undefined ||
        this.user.memNm === null
      ) {
        alert('이름을 입력해주세요.')
        return
      }
      if (
        this.user.pwd === '' ||
        this.user.pwd === undefined ||
        this.user.pwd === null
      ) {
        alert('비밀번호를 입력해주세요.')
        return
      }
      if (this.user.mnoCd === '00') {
        alert('통신사를 선택해주세요.')
        return
      }
      if (
        this.user.mblTelRcgnNo === '' ||
        this.user.mblTelRcgnNo === undefined ||
        this.user.mblTelRcgnNo === null ||
        this.user.mblTelNatnNo === '' ||
        this.user.mblTelNatnNo === undefined ||
        this.user.mblTelNatnNo === null ||
        this.user.mblTelSeqno === '' ||
        this.user.mblTelSeqno === undefined ||
        this.user.mblTelSeqno === null
      ) {
        alert('전화번호를 입력해주세요.')
        return
      }
      try {
        const rs = await this.$store.dispatch('user/signup', this.user)
        console.log('rs', rs)
        if (rs) {
          alert('회원가입이 완료 되었습니다.')
          this.$refs.join.classList.add('step03')
          this.$refs.join.classList.remove('step02')
        }
      } catch (error) {
        console.error(error)
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
  background-color: #fff;
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
    font-weight: 400;
  }
  .terms {
    .txt-all-check {
      font-size: 18px;
      color: $disableColor;
    }
    .terms-list {
      li {
        display: table;
        position: relative;
        width: 100%;
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
        & > * {
          display: table-cell;
          vertical-align: middle;
        }
        & > div {
          width: 78%;
        }
        & > button {
          width: 100%;
          background: $inputColor;
          border-radius: 4px;
          line-height: 24px;
          color: $defaultColor;
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
        color: $subActiveColor01;
        z-index: 1;
        &.active {
          color: $greenColor;
        }
      }
      & + .input {
        margin-top: 10px;
      }
      input.disabled {
        background: #f3f3f3;
      }
    }
    .phone {
      display: table;
      margin-bottom: 20px;
      & > * {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
      .hypen {
        padding: 14px 6px 0;
      }
    }
    .email-confirm {
      font-size: 16px;
      .txt-email {
        line-height: 22px;
        span {
          font-weight: 400;
          color: $greenColor;
        }
      }
      .txt-timer {
        overflow: hidden;
        padding: 10px;
        margin-top: 10px;
        background: #eaeaea;
        border-radius: 4px;
        font-size: 20px;
      }
      input[type='text'] {
        text-align: center;
      }
    }
    button {
      width: 100%;
      margin: 10px 0;
      padding: 14px 20px;
    }
  }
  .end {
    .txt-welcome {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 600;
      color: $subActiveColor01;
    }
    .txt-sub {
      margin-top: 20px;
      font-size: 16px;
      line-height: 28px;
    }
    a {
      display: block;
      margin-top: 20px;
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
      max-height: 80%;
      margin: 0 auto;
      padding: 50px;
      border: 1px solid #dadce0;
      border-radius: 8px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
      .join {
        overflow: hidden;
        position: relative;
        height: 508px;
        transition: height 0.4s;
        -webkit-transition: height 0.4s;
        .step {
          position: absolute;
          left: 0;
          width: 1260px;
          transition: left 0.4s;
          -webkit-transition: left 0.4s;
          & > div {
            float: left;
            width: 348px;
            & + div {
              margin-left: 100px;
            }
            &:nth-child(2) {
              overflow-y: auto;
              height: 100%;
              max-height: 64vh;
            }
          }
        }
        &.step02 {
          &.confirm {
            height: 66vh;
          }
          .step {
            left: -448px;
          }
        }
        &.step03 {
          .step {
            left: -896px;
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
          & > div:nth-child(2),
          & > div:nth-child(3) {
            display: none;
          }
        }
        &.step02 {
          .step {
            & > div:first-child,
            & > div:nth-child(3) {
              display: none;
            }
            & > div:nth-child(2) {
              display: block;
            }
          }
        }
        &.step03 {
          .step {
            & > div:first-child,
            & > div:nth-child(2) {
              display: none;
            }
            & > div:nth-child(3) {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
