<template id='lnbTemplate'>
    <div>
        <!-- <span>{{ fullName }}</span> -->
        <ul class='menu_list'>
          <template v-for="(detail) in menu.menuList">
            <li v-if="detail.isActive" v-bind:key="detail.name">
              <ul>
                <li v-for="(li, index) in detail.subList" v-bind:key="index">
                  <router-link :class="{active:li.isActive}" :to="{path:li.url}"><span @click="lnbActive(detail, index)">{{ li.name }}</span></router-link>
                </li>
              </ul>
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
      
    }
  },
  methods: {
    lnbActive (detail, index) {
      let l = detail.subList.length
      for (var i = 0; i < l; i++){
        detail.subList[i].isActive = false
      }
      detail.subList[index].isActive = true
    }
  },
  computed: {
  },
  created () {
  }
}
</script>
