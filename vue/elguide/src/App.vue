<template>
  <div id="wrap">
      <!-- header -->
      <div id="header">
          <h1><img class="hanwha-logo" src="./assets/svg/hanwha_logo.svg"></h1>
          <div id="gnb">
            <Gnb :menu="menuInfo" :loginAdminNm="userName" />
          </div>
      </div>
      <!-- // header -->
      <!-- container -->
      <div id="container">
          <div id="lnb">
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
import Gnb from './components/layout/Gnb'
import Lnb from './components/layout/Lnb'

const list1 = [
  {name: '프로모션 관리', url: '/menu11', isActive: false},
  {name: 'Suggest 관리', url: '/menu12', isActive: false},
  {name: 'Discover 관리', url: '/menu13', isActive: false},
  {name: '위젯 관리', url: '/menu14', isActive: false},
  {name: '날씨메시지관리', url: '/menu15', isActive: false},
  {name: '국내축구', url: '/menu16', isActive: false},
  {name: '해외축구', url: '/menu17', isActive: false},
  {name: '국내농구', url: '/menu18', isActive: false},
  {name: '해외농구', url: '/menu19', isActive: false}
]
const list2 = [
  {name: '콘텐츠 관리', url: '/menu21', isActive: false},
  {name: 'Line 관리', url: '/menu22', isActive: false},
  {name: '카테고리 관리', url: '/menu23', isActive: false},
  {name: '태그 관리', url: '/menu24', isActive: false},
  {name: '검색어 관리', url: '/menu25', isActive: false},
  {name: 'Placeholder 관리', url: '/menu26', isActive: false}
]
const list3 = [{name: 'CP관리', url: '', isActive: false}]
const list4 = [{name: '이벤트관리', url: '', isActive: false}]
const list5 = [
  {name: '공지 관리', url: '', isActive: false},
  {name: '서비스 점검 팝업', url: '', isActive: false},
  {name: 'FAQ 관리', url: '', isActive: false},
  {name: '1:1문의 관리', url: '', isActive: false},
  {name: '약관 관리', url: '', isActive: false},
  {name: '금칙어 관리', url: '', isActive: false},
  {name: 'Admin 계정관리', url: '', isActive: false},
  {name: 'Push 관리', url: '', isActive: false},
  {name: 'App 버전 관리', url: '', isActive: false},
  {name: '코드 관리', url: '', isActive: false}
]
const list6 = [
  {name: '회원 관리', url: '', isActive: false},
  {name: '댓글 관리', url: '', isActive: false}
]
const list7 = [
  {name: '회원 통계', url: '', isActive: false},
  {name: '콘텐츠 랭킹', url: '', isActive: false},
  {name: '전시콘텐츠 통계', url: '', isActive: false},
  {name: 'GA360 링크', url: '', isActive: false}
]
const list8 = [
  {name: '마이페이지', url: '', isActive: false},
  {name: '로그인', url: '', isActive: false},
  {name: '로그아웃', url: '', isActive: false}
]

const menuList = [
  {name: '전시관리', isActive: false, url: '/menu11', subList: list1},
  {name: '콘텐츠관리', isActive: false, url: '/menu21', subList: list2},
  {name: 'CP관리', isActive: false, url: '/menu31', subList: list3},
  {name: '이벤트관리', isActive: false, url: '/menu41', subList: list4},
  {name: '서비스관리', isActive: false, url: '/menu51', subList: list5},
  {name: '회원관리', isActive: false, url: '/menu61', subList: list6},
  {name: '통계관리', isActive: false, url: '/menu71', subList: list7},
  {name: '유틸리티', isActive: false, url: '/menu81', subList: list8}
]

export default {
  name: 'App',
  components: {
    Gnb,
    Lnb
  },
  data () {
    return {
      userName: '홍길동',
      menuInfo: {
        menuList: menuList, // 메뉴 리스트
        active: '',
        activeIdx: null,
        activeSubIdx: null
      }
    }
  }
}
</script>