<template id='lnbTemplate'>
    <div>
        <!-- <span>{{ fullName }}</span> -->
        <ul class='menu_list'>
          <template v-for="(detail) in menu.menuList">
            <li v-if="detail.isActive" v-bind:key="detail.name">
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
      
    }
  },
  methods: {
  },
  computed: {
  },
  created () {
    console.log('menu', this.menu)
  }
}
</script>
