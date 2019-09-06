<template id='gnbTemplate'>
  <div>

    <ul class='menu-list'>
      <li v-for="(detail, index) in menu.menuList" :key="index" >
        <a href="#menu" :class="{active:detail.isActive }" @click="onClickToPage(detail, index)">{{ detail.name }}</a>
      </li>
    </ul>

    <div class="gnb-option mgr10">
      <!-- <el-input placeholder='Search'
        aria-label='Search'
        v-model='input1' clearable></el-input>
      <el-button size="large" >Sign out</el-button> -->
      <div class="login-info">
        <span v-if="loginAdminNm !== null">{{ loginAdminNm }}님 안녕하세요!</span>
        <!-- <span class="time">10:00</span> -->
      </div>
      <el-button class="mgl6" @click="onClickToLogout" >로그아웃</el-button>
      <!-- <el-button>정보변경</el-button> -->
    </div>
  </div>
</template>
<script>
import { getGlbConfig } from '@/components/module/common.js'

export default {
  name: 'Gnb',
  props: ['menu'],
  data () {
    return {
      loginAdminNm: null,
      menulist: [
        {menu: '전시관리', isActive: true},
        {menu: '위젯관리', isActive: false},
        {menu: '콘텐츠관리', isActive: false},
        {menu: '이벤트관리', isActive: false},
        {menu: '회원관리', isActive: false},
        {menu: '서비스관리', isActive: false},
        {menu: '정산', isActive: false},
        {menu: '통계', isActive: false}
      ]
    }
  },
  methods: {
    onClickToPage (detail, index) {
      const vm = this
      const orgMenuList = vm.menu.menuList

      vm.menu.menuList.map(a => { a.isActive = false })
      vm.menu.menuList[index].isActive = true
      vm.menu.active = detail.name
      if (orgMenuList[index].subList && orgMenuList[index].subList.length > 0) {
        orgMenuList[index].subList.map(a => { a.isActive = false })
      }
      vm.menu.activeIdx = index
      vm.menu.activeSubIdx = 0
      vm.$cookies.set('mActiveIdx', index)
      vm.$cookies.set('mActiveSubIdx', 0)
      vm.$router.push(detail.url)
    },
    onClickToLogout () {
      const vm = this
      vm.$cookies.remove('token')
      vm.$cookies.remove('mngrSn')
      vm.$cookies.remove('nm')

      vm.menu.activeIdx = 0
      vm.menu.activeSubIdx = 0
      vm.$cookies.set('mActiveIdx', 0)
      vm.$cookies.set('mActiveSubIdx', 0)

      getGlbConfig().layout = false
      document.querySelector('#contents').setAttribute('class', 'no-layout')
      window.location.reload()
      vm.$router.push('/login')
    }
  },
  created () {
    this.loginAdminNm = this.$cookies.get('nm')
  }
}
</script>
