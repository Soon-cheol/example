<template>
  <div class="container">
    <div class="center" @click.stop>
      <div ref="login" class="login">
        <h1>
          <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
        </h1>
        <h2 class="txt-title">로그인</h2>
        <div class="step">
          <!-- Step01: 아이디 입력 -->
          <div>
            <input type="text" placeholder="아이디" />
            <n-link to="#" class="txt-forget">아이디를 잊으셨나요?</n-link>
            <div class="option">
              <n-link to="/join" class="setBtn setBtn02">계정 만들기</n-link>
              <button class="setBtn setBtn01" @click="goStep02">다음</button>
            </div>
          </div>
          <!-- // Step01: 아이디 입력 -->
          <!-- Step02: 비밀번호 입력 -->
          <div>
            <span class="txt-id">{{ loginId }}</span>
            <input type="password" placeholder="비밀번호 입력" />
            <n-link to="#" class="txt-forget">비밀번호를 잊으셨나요?</n-link>
            <div class="option">
              <button class="setBtn setBtn02" @click="goStep01">취소</button>
              <button class="setBtn setBtn01">다음</button>
            </div>
          </div>
          <!-- // Step02: 비밀번호 입력 -->
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
  methods: {
    goStep01() {
      this.$refs.login.classList.remove('step02')
    },
    goStep02() {
      this.$refs.login.classList.add('step02')
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
  margin-top: 24px;
  border: 2px solid $inputColor;
  font-size: 16px;
  padding: 12px 14px;
  border-radius: 8px;
  &:focus {
    border: 2px solid $subActiveColor01;
  }
}

.container {
  .center {
    background: #fff;
    .txt-id {
      display: block;
      margin-top: 20px;
      font-size: 20px;
    }
    .txt-title {
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
      *:first-child {
        float: left;
      }
      *:last-child {
        float: right;
      }
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
          & > div {
            float: left;
            width: 348px;
            & + div {
              margin-left: 100px;
            }
          }
        }
        &.step02 {
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
      .login {
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
