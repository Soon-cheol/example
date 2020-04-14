<template>
  <div class="container">
    <div class="center">
      <h1>
        <n-link to="/"><img src="~assets/images/logo_sdd.png"/></n-link>
      </h1>
      <p class="txt-login"><strong>Smart Doodle</strong>에 로그인</p>
      <input type="text" placeholder="아이디" />
      <p class="txt-forget">아이디를 잊으셨나요?</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variable';
.container {
  display: table-cell;
  width: 100%;
  vertical-align: middle;
  .center {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 40px 20px;
    border: 1px solid #dadce0;
    border-radius: 8px;
    h1 {
      img {
        width: 100px;
      }
    }
    .txt-login {
      margin-top: 16px;
      font-size: 1.4rem;
      strong {
        display: inline-block;
        margin-right: 4px;
        color: $mainColor;
      }
    }
    input[type='text'] {
      width: 80%;
      margin-top: 14px;
      border: 1px solid #dfdfdf;
      font-size: 1.2rem;
      padding: 12px 14px;
      border-radius: 8px;
    }
    .txt-forget {
      color: $mainColor;
    }
  }
}
</style>
