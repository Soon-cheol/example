<template id='gnbTemplate'>
  <div>
    <ul class='menu_list'>
      <li v-for="(detail, index) in menu.menuList" :key="index" >
        <router-link :class="{active:detail.isActive}" :to="{path:detail.url}"><span @click="gnbActive(index)">{{ detail.name }}</span></router-link>
      </li>
    </ul>
    <div class="gnb_option">
      <div class="login_info">
        <span v-if="loginAdminNm !== null">{{ loginAdminNm }}님 안녕하세요!</span>
      </div>
      <el-button>로그아웃</el-button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Gnb',
  props: ['menu', 'name'],
  data () {
    return {
      loginAdminNm: this.name
    }
  },
  methods: {
    gnbActive (index) {
      let l = this.menu.menuList.length
      for (var i = 0; i < l; i++){
        this.menu.menuList[i].isActive = false
      }
      this.menu.menuList[index].isActive = true
    }
  },
  created () {
    // console.log('menu', this.menu)
    // console.log('name', this.name)
  }
}
</script>
