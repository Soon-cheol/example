<template>
  <div ref="gnb" class="container">
    <h1>
      <img :src="'/images/' + logoImage" @click="$emit('onMenu', 'mew')" />
    </h1>

    <div class="mainmenu">
      <div class="mew" @click="$emit('onMenu', 'mew')">
        <span>MEW</span><span style="font-size:0.8em">Nursery Rhymes</span>
      </div>
      <div
        class="mew"
        style="line-height: 1.2em"
        @click="$emit('onMenu', 'info-rounge')"
      >
        <span>정보</span><span>라운지</span>
      </div>
    </div>

    <div class="usermenu">
      <!-- <n-link to="/mew"><img src="~assets/images/login.png"/></n-link> -->
      <div class="usermenu-container">
        <div v-if="!logined" class="label" @click="onMenu('login')">
          로그인
        </div>
        <div v-if="!logined" class="label" @click="onMenu('join')">
          회원가입
        </div>
        <div v-if="logined" class="label" @click="onMenu('logout')">
          로그아웃
        </div>
      </div>
      <!--
        <n-link to="/user/login">
        /user/terms
      -->
    </div>
    <div class="usermenu-shortcut" @click="modal_on = true" />

    <transition name="modal">
      <div v-if="modal_on" class="dimmed" @click="modal_on = false">
        <div class="side-mobilemenu" @click.stop>
          <div class="menuitemtitle" @click="modal_on = false">
            <img :src="'/images/' + logoImage" style="width:60%" />
          </div>
          <div class="menuitem" @click="onMenu('mew')">
            Mew Nursery Rhymes
          </div>
          <div class="menuitem" @click="onMenu('info-rounge')">
            정보 라운지
          </div>
          <div v-if="!logined" class="menuitem" @click="onMenu('login')">
            로그인
          </div>
          <div v-if="!logined" class="menuitem" @click="onMenu('join')">
            회원가입
          </div>
          <div v-if="logined" class="menuitem" @click="onMenu('logout')">
            로그아웃
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/variable';
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

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, #f67452, $keyColor);
  border-bottom: 0.2em solid rgba(255, 255, 255, 1);
  height: 5.4em;
  // background: #fff;
  z-index: 1000;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
  transition: top 1s;
  .size {
    position: absolute;
    top: 10px;
    left: 10px;
    content: '';
  }
  h1 {
    position: absolute;
    top: -0.1em;
    left: 0;
    width: 250px;
    transition: all 0.2s;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .mainmenu {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .mew {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Jeju Gothic';
    font-weight: normal;
    font-size: 1.2em;
    padding-left: 1em;
    padding-right: 1em;
    background-color: rgba(0, 0, 0, 0);
    line-height: 1em;
    color: #fff;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.4);
    border-radius: 0.8em;
    transition: all 0.5s;
    user-select: none;
    cursor: pointer;
    min-width: 8em;
  }
  .mew:hover {
    background-color: rgba(0, 0, 0, 0.2);
    min-width: 12em;
  }
  .mew:first-child {
    margin-right: 0.2em;
  }

  .usermenu {
    user-select: none;
    cursor: pointer;
    position: absolute;
    right: 10px;
    min-height: 32px;
    display: block;
    align-items: center;
    background-image: url(~assets/images/login.png);
    background-size: contain;
    background-color: rgba(0, 0, 0, 1);
    background-repeat: no-repeat;

    width: 32px;
    transition: all 0.5s;
    border-radius: 3em;
    overflow: hidden;
    box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.4);
    .usermenu-container {
      margin-left: 32px;
      width: 200px;
      display: flex;
      align-items: center;
      height: 32px;
    }
    // padding-left: 34px;
    // padding-right: 1em;
    .label {
      color: rgb(155, 155, 155);
      font-family: 'Jeju Gothic';
      font-weight: normal;
      padding-left: 10px;
      padding-right: 10px;
      transition: color 1s;
    }
    .label:hover {
      color: #fff;
    }
    img {
      width: 40px;
      transition: all 0.5s;
    }
    // img:hover {
    //   width: 60px;
    // }
  }
  .usermenu:hover {
    width: 180px;
  }

  .btn-user {
    min-width: 5em;
    background-color: rgba(92, 28, 28, 0);
    color: rgba(255, 255, 255, 1);
    justify-content: center;
    transition: all 1s;
    user-select: none;
  }
  .btn-user:hover {
    cursor: pointer;
    background-color: rgba(92, 28, 28, 1);
    border-radius: 2em;
  }

  .usermenu-shortcut {
    user-select: none;
    cursor: pointer;
    position: absolute;
    right: 10px;
    min-height: 48px;
    display: none;
    align-items: center;
    background-image: url(~assets/images/menu_shortcut.png);
    background-size: contain;
    background-color: rgba(0, 0, 0, 1);
    background-repeat: no-repeat;
    width: 48px;
    transition: all 0.5s;
    border-radius: 3em;
    overflow: hidden;
    box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.4);
  }
}

.dimmed {
  position: fixed;
  left: -100vw;
  top: 0vh;
  width: 200vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
}
.modal-enter-active {
  animation: bounce-in 1s;
}
.modal-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    left: 0vw;
    opacity: 0;
  }
  50% {
    left: -0vw;
    opacity: 1;
  }
  100% {
    left: -100vw;
    opacity: 1;
  }
}

.side-mobilemenu {
  position: absolute;
  right: 0vw;
  height: 90vh;
  width: 80vw;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  box-shadow: 0 0 3em rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 1);
  background-image: url('/images/bg_pattern.png');
  background-size: 300%;
}
.menuitemtitle {
  border-top-left-radius: 1em;
  background: linear-gradient(to top, #f67452, $keyColor);

  padding-top: 2em;
  padding-bottom: 2em;
}
.menuitem {
  text-shadow: 1em 1em 3em rgba(0, 0, 0, 0.2);
  padding-top: 1em;
  padding-bottom: 1em;
  font-family: 'Jeju Gothic';
  font-weight: bold;
  font-size: 1.4em;
  transition: transform 0.5s;
  // background-color: #000;
  color: #fff;
}
.menuitem:hover {
  transform: scale(1.2);
}
.menuitem:nth-child(6n + 1) {
  color: #f15d22;
}
.menuitem:nth-child(6n + 2) {
  color: #00a990;
}
.menuitem:nth-child(6n + 3) {
  color: #ffce34;
}
.menuitem:nth-child(6n + 4) {
  color: #69b342;
}
.menuitem:nth-child(6n + 5) {
  color: #753b97;
}
.menuitem:nth-child(6n + 6) {
  color: #e44498;
}
// @media screen and (min-width: $desktopSize) {
//   .container {
//     h1 {
//       width: 250px;
//     }
//   }
// }
@media screen and (max-width: $desktopSize) and (min-width: $mobileSize) {
  .container {
    h1 {
      width: 250px;
    }
    .mainmenu {
      display: flex;
    }
    .usermenu-shortcut {
      display: none;
    }
  }
}
@media screen and (max-width: $mobileSize) {
  .container {
    h1 {
      width: 130px;
    }
    .mainmenu {
      display: none;
    }
    .usermenu {
      display: none;
    }
    .usermenu-shortcut {
      display: block;
    }
  }
}
</style>

<script>
export default {
  props: {
    logined: { type: Boolean, default: false },
    logoImage: { type: String, default: 'logo_sdd2.png' }
  },
  data() {
    return {
      modal_on: false
    }
  },
  mounted() {
    // Wheel움직임에 따라 gnb hide 처리
    const body = document.querySelector('body')
    const gnb = this.$refs.gnb
    body.addEventListener('wheel', function(event) {
      const wheel = event.deltaY
      if (wheel < 0) {
        // 스크롤 업
        gnb.setAttribute('style', 'top:0')
      } else if (wheel > 0) {
        // 스크롤 다운
        gnb.setAttribute('style', 'top:-300px')
      }
    })
  },
  methods: {
    onMenu(v) {
      if (v === 'join') {
        this.$router.push('/join')
      } else {
        this.$emit('onMenu', v)
        this.modal_on = false
      }
    }
  }
}
</script>
