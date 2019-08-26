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
  }
};
</script>