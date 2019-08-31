<template>
  <div id="app">
    <div>
      <router-link to="/Germany"><button>Germany</button></router-link>
      <router-link to="/France"><button>France</button></router-link>
    </div>
    <div class="infomation">
      <Infomation />
    </div>
    <div class="ground position433">
      <router-view :props="data"></router-view>
    </div>
  </div>
</template>

<script>
import data from './data'
import Germany from './components/Germany.vue'
import France from './components/France.vue'
import Infomation from './Infomation.vue'
import vueRouter from 'vue-router'

const router = new vueRouter({
  routes: [
    {path: '/Germany', component: Germany},
    {path: '/France', component: France}
  ]
})

export default {
  name : 'app',
  router,
  components: {
    Germany,
    France,
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