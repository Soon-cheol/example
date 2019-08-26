<template>
  <div id="app">
    <div class="info">
      <Infomation />
    </div>
    <div class="ground position433">
      <Formation />
    </div>
  </div>
</template>

<script>
import Formation from './Formation.vue'
import Infomation from './Infomation.vue'

export default {
  components: {
    Formation,
    Infomation
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
/* @import url('/src/assets/css/reset.css');
@import url('/src/assets/css/layout.css'); */
</style>