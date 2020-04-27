<template>
  <div class="MGRemocon">
    <transition name="slidein">
      <LoginModule v-if="!logined" @onMenu="onMenu" />
    </transition>
    <MewExcutor
      v-if="logined"
      :music-list="musicList"
      @onStartStudy="onStartStudy"
    />
  </div>
</template>

<script>
import LoginModule from './LoginModule'
import MewExcutor from './MewExcutor'

export default {
  components: { LoginModule, MewExcutor },
  props: {
    logined: { type: Boolean, default: false },
    musicList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    onMenu(v) {
      if (v === 'join') {
        this.$router.push('/join')
      } else {
        this.$emit('onMenu', v)
        this.modal_on = false
      }
    },
    onStartStudy(prodID) {
      this.$emit('onStartStudy', prodID)
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

.MGRemocon {
  position: fixed;
  bottom: 0;
  width: 100vw;
}

.slidein-enter-active,
.slidein-leave-active {
  transition: bottom 1.5s;
}
.slidein-enter,
.slidein-leave-to /* .fade-leave-active below version 2.1.8 */ {
  bottom: -30em;
}
</style>
