<template>
  <div id="wrap">
    <gnbComponent :logined="logined" @onMenu="onMenu" />
    <div id="contants">
      <nuxt />
    </div>

    <transition name="modal">
      <div
        v-if="canShowLoginModal"
        class="dimmed"
        @click="showLoginModal = false"
      >
        <loginComponent name="loginComponent" />
      </div>
    </transition>
    <MGRemocon
      :logined="logined"
      :music-list="musicList"
      @onMenu="onMenu"
      @onStartStudy="onStartStudy"
    />
    <MewCanvas
      v-if="MGStudyOn"
      :pid="productID"
      :music-list="musicList"
      @close="MGStudyOn = false"
    />
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
  animation: fade-in 0.2s;
}
.modal-leave-active {
  animation: fade-in 0.2s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
import { mapState } from 'vuex'
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
      showLoginModal: false,
      MGStudyOn: false,
      productID: ''
    }
  },
  computed: {
    canShowLoginModal() {
      if (this.showLoginModal) {
        if (!this.logined) return true
        else return false
      } else {
        return false
      }
    },

    logined() {
      return this.$store.state.auth.loggedIn
    },
    ...mapState({
      musicList: (state) => state.lectures.musicList
    })
  },
  created() {
    if (this.musicList.length === 0 && this.logined) {
      this.$store.dispatch('lectures/getMusicList')
    }
  },
  mounted() {
    // console.log('->musicList:', this.musicList)
  },
  methods: {
    onMenu(v) {
      console.log('->onMenu:', v)
      switch (v) {
        case 'login':
          this.showLoginModal = true
          break
        case 'logout':
          this.$store.dispatch('user/logout')
          break
        case 'mew':
          this.$router.push('/')
          break
        case 'info-rounge':
          this.$router.push('/rounge')
          break
      }
    },
    onStartStudy(prodID) {
      this.productID = prodID
      this.MGStudyOn = true
    }
  }
}
</script>
