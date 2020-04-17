<template>
  <div id="wrap">
    <gnbComponent @onMainMenu="onMainMenu" @onUserMenu="onUserMenu" />
    <div id="contants">
      <nuxt />
    </div>
    <transition name="modal">
      <div v-if="loginModal" class="dimmed" @click="loginModal = false">
        <loginComponent name="loginComponent" />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.dimmed {
  z-index: 1000;
  position: fixed;
  left: 0vw;
  top: 0vh;
  width: 100vw;
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
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
import gnbComponent from '~/components/layouts/gnb.vue'
import loginComponent from '~/components/login.vue'

export default {
  components: {
    gnbComponent,
    loginComponent
  },
  data() {
    return {
      loginModal: false
    }
  },
  beforeMount() {
    // const _this = this
    $('body').on('mousewheel', function(event) {
      const wheel = event.originalEvent.wheelDelta
      if (wheel > 0) {
        // 스크롤 업
        document.querySelector('#header').setAttribute('style', 'top:0')
      } else if (wheel < 0) {
        // 스크롤 다운
        document.querySelector('#header').setAttribute('style', 'top:-200px')
      }
    })
  },
  methods: {
    onMainMenu(v) {},
    onUserMenu(v) {
      if (v === 'login') {
        this.loginModal = true
      }
    }
  }
}
</script>
