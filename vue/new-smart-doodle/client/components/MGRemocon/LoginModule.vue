<template>
  <div class="loginmodule">
    <div class="body">
      <img class="logo" src="~/assets/images/logo_sdd.png" />
      <div class="comment" style="padding-top: 4.3em;">
        회원가입하여 <br />스마트두들의 컨텐츠를 즐기세요.
      </div>
      <div class="btn-group" style="padding-top:0.5em;">
        <div class="btn" @click="onMenu('join')">회원가입</div>
        <div class="btn" @click="onMenu('login')">로그인</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    onMenu(v) {
      this.$emit('onMenu', v)
      this.modal_on = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variable';

/* @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css); */
/* @import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css); */

@font-face {
  font-family: 'Jeju Gothic';
  font-style: normal;
  font-weight: 400;
  src: url(/font/JejuGothic-Regular.eot);
  src: url(/font/JejuGothic-Regular.eot?#iefix) format('embedded-opentype'),
    url(/font/JejuGothic-Regular.woff2) format('woff2'),
    url(/font/JejuGothic-Regular.woff) format('woff'),
    url(/font/JejuGothic-Regular.ttf) format('truetype');
}

$keyColor: rgb(240, 76, 84);

.loginmodule {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  .body {
    flex: 1;
    background-color: rgb(255, 255, 255);
    min-height: 12em;
    max-width: 90%;
    border-top-left-radius: 9em;
    border-top-right-radius: 9em;
    box-shadow: 0em 0em 1em rgba(0, 0, 0, 0.2);
    border: 0.4em solid rgb(240, 76, 84);
    border-bottom: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 100px;
    position: absolute;
    top: 10px;
    z-index: 1000;
  }
}

.comment {
  color: $keyColor;
  font-family: 'Jeju Gothic';
  font-weight: normal;
}

.btn-group {
  display: flex;
  .btn {
    cursor: pointer;
  }
}

.btn {
  padding: 0.3em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 1em;
  border: 0.2em solid rgb(241, 149, 153);
  color: rgb(240, 76, 84);
  font-family: 'NanumSquare';
  font-weight: 800;
  font-size: 1.3em;
  /*
  .normal		{ font-weight: 400 }
  .bold		{ font-weight: 700 }
  .bolder		{ font-weight: 800 }
  .light		{ font-weight: 300 };
  */
}
.btn:first-child {
  margin-right: 0.3em;
}
.btn:hover {
  background-color: $keyColor;
  color: #fff;
}
</style>
