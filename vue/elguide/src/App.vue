<template>
        <div id="wrap">
        <!-- header -->
        <div id="header" v-if="config.layout">
            <h1><img class="hanwha-logo" src="./assets/svg/hanwha_logo.svg"></h1>
            <div id="gnb">
              <Gnb :menu="menuInfo" />
            </div>
        </div>
        <!-- // header -->
        <!-- container -->
        <div id="container">
            <div id="lnb" v-if="config.layout">
              <Lnb :menu="menuInfo" />
            </div>
            <div id="contents">
              <router-view />
            </div>
        </div>
        <!-- // container -->
        <div id="footer"></div>
    </div>
</template>
<script>
import Gnb from '@/components/layout/Gnb'
import Lnb from '@/components/layout/Lnb'
import { setGlbConfig } from '@/components/module/common.js'

export default {
  name: 'App',
  components: {
    Gnb,
    Lnb
  },
  methods: {
  },
  data () {
    return {
      config: {
        layout: true
      },
      // menuInfo: {
      //   menuList: menuList, // 메뉴 리스트
      // }
    }
  },
  created () {
  },
  mounted () {
    const vm = this
    if (location.pathname === '/html/publishing' || location.pathname === '/login') {
      this.config.layout = false
      document.querySelector('#contents').setAttribute('class', 'no-layout')
    } else {
      this.config.layout = true
    }
  }
}
</script>

<style>
@import url('../static/css/reset.css');
@import url('../static/css/layout.css');
@import url('../static/css/element-ui.css');
</style>
