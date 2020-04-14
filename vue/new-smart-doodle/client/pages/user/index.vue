<template>
  <div class="login">
    <h1>
      <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
    </h1>
    <p class="txt-login">로그인</p>
    <div ref="step" class="step">
      <div class="step01">
        <input type="text" placeholder="아이디" />
        <n-link to="#" class="txt-forget">아이디를 잊으셨나요?</n-link>
        <div class="option">
          <button>계정 만들기</button>
          <button @click="goStep02">다음</button>
        </div>
      </div>
      <div class="step02">
        <span class="txt-id">{{ loginId }}</span>
        <input type="password" placeholder="비밀번호 입력" />
        <n-link to="#" class="txt-forget">비밀번호를 잊으셨나요?</n-link>
        <div class="option">
          <button @click="goStep01">취소</button>
          <button>다음</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: 'lasertank2'
    }
  },
  mounted() {},
  methods: {
    goStep01() {
      this.$refs.step.classList.remove('pwd')
    },
    goStep02() {
      this.$refs.step.classList.add('pwd')
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
a {
  &:hover {
    color: $mainColor;
  }
}
.login {
  overflow: hidden;
  position: relative;
  height: 350px;
  .step {
    position: absolute;
    width: 800px;
    left: 0;
    transition: left 0.4s;
    -webkit-transition: left 0.4s;
    &.pwd {
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
  .txt-id {
    display: block;
    margin-top: 20px;
    font-size: 20px;
  }
  .txt-login {
    margin-top: 16px;
    font-size: 26px;
  }
  .txt-forget {
    display: block;
    margin-top: 18px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
  }
  .option {
    overflow: hidden;
    margin-top: 40px;
    button {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 16px;
    }
    *:first-child {
      float: left;
      background: $mainColor;
      color: $whiteColor;
      &:hover {
        background: $mainActiveColor;
      }
    }
    *:last-child {
      float: right;
      background: $subColor01;
      color: $whiteColor;
      &:hover {
        background: $subActiveColor01;
      }
    }
  }
}
</style>
