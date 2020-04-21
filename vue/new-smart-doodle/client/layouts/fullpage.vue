<template>
  <div id="wrap">
    <gnbComponent :logined="logined" @onMenu="onMenu" />
    <div id="contants">
      <nuxt />
    </div>

    <transition name="modal">
      <div v-if="showLoginModal" class="dimmed" @click="showLoginModal = false">
        <loginComponent name="loginComponent" />
      </div>
    </transition>
    <MGRemocon
      :logined="logined"
      @onMenu="onMenu"
      @onStartStudy="onStartStudy"
    />
    <MewCanvas v-if="MGStudyOn" />
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
import MGRemocon from '~/components/MGRemocon'
import MewCanvas from '~/components/MewCanvas'

export default {
  components: {
    gnbComponent,
    loginComponent,
    MGRemocon,
    MewCanvas
  },
  data() {
    return {
      logined: false, // this.$store.state.auth.loggedIn,
      showLoginModal: false,
      MGStudyOn: false
    }
  },
  methods: {
    onMenu(v) {
      console.log('->onMenu:', v)
      switch (v) {
        case 'login':
          this.logined = true
          this.showLoginModal = true
          break
        case 'logout':
          this.logined = false
          break
      }
    },
    onStartStudy(v) {
      console.log('->onStartStudy:', v)
      this.MGStudyOn = true
    }
  }
}
</script>
