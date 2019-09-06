<template id='lnbTemplate'>
    <div id='lnb'>
        <span style="display:none;">{{fullName}}</span>
        <ul class='menu-list'>
          <template v-for="(detail) in menu.menuList">
            <li v-if="detail.name === menu.active" v-bind:key="detail.name">
              <span v-for="(li, index) in detail.subList" v-bind:key="index">
                <a href="javascript:void(0)" v-bind:class="{active:li.isActive }" @click="onClickToPage(li, index)" >{{ li.name }}</a>
              </span>
            </li>
          </template>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Lnb',
  props: ['menu'],
  data () {
    return {
      dataIdx: 0
    }
  },
  methods: {
    onClickToPage (detail, index) {
      const vm = this
      vm.$cookies.set('mActiveSubIdx', index)
      // const activeIdx = vm.menu.activeIdx
      const orgMenuList = vm.menu.menuList
      orgMenuList.map(a => {
        if (a.subList) {
          a.subList.map(b => {
            b.isActive = false
          })
        }
      })

      vm.menu.activeSubIdx = index
      vm.$router.push(detail.url)
    }
  },
  computed: {
    fullName: function () {
      const vm = this
      const activeIdx = vm.menu.activeIdx
      const orgMenuList = vm.menu.menuList
      const index = vm.menu.activeSubIdx
      if (activeIdx != null && index != null) {
        if (orgMenuList[activeIdx].subList && orgMenuList[activeIdx].subList.length > index) {
          orgMenuList[activeIdx].subList[index].isActive = true
        }
        return vm.menu.activeSubIdx
      } else {
        return 99999
      }
    }
  },
  created () {
    // const vm = this
    // vm.active = vm.menu
    // console.log('sssssssssss')
    // console.log(vm.active)
  }
}
</script>
