<template id='gnbTemplate'>
  <div>

    <ul class='menu-list'>
      <li v-for="(detail, index) in menu.menuList" :key="index" >
        <a>{{ detail.name }}</a>
      </li>
    </ul>

    <div class="gnb-option mgr10">
      <div class="login-info">
        <span v-if="loginAdminNm !== null">{{ loginAdminNm }}님 안녕하세요!</span>
      </div>
      <el-button>로그아웃</el-button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Gnb',
  props: ['menu','name'],
  data () {
    return {
      loginAdminNm: this.name,
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
  },
  created () {
    // console.log('menu', this.menu)
    // console.log('name', this.name)
  }
}
</script>
