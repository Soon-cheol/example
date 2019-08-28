<template>
  <div id="app">
    <div>
      <router-link to="/for1"><button>fomation1</button></router-link>
      <router-link to="/for2"><button>fomation2</button></router-link>
    </div>
    <div class="infomation">
      <Infomation />
    </div>
    <div class="ground position433">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import data from './data'
import Formation1 from './Formation1.vue'
import Formation2 from './Formation2.vue'
import Infomation from './Infomation.vue'
import vueRouter from 'vue-router'

const router = new vueRouter({
  routes: [
    {path: '/for1', component: Formation1},
    {path: '/for2', component: Formation2}
  ]
})

export default {
  name : 'app',
  router,
  components: {
    Formation1,
    Formation2,
    Infomation
  },
  props: {
      props: {}
  },
  data : function() {
      return {
          data : data
      }
  },
};
</script>