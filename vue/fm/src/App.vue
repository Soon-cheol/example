<template>
  <div id="app">
    <div class="infomation">
      <Infomation />
    </div>
    <div class="ground position433">
      <Formation :props="data" />
    </div>
  </div>
</template>

<script>
import data from './data'
import Formation from './Formation.vue'
import Infomation from './Infomation.vue'

export default {
  components: {
    Formation,
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