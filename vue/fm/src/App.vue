<template>
  <div id="app">
    <div class="info">
      <ul>
        <li>
          <span>{{number}}.</span>
          <span>{{name}}</span>
        </li>
        <li>
          <span>Team</span>
          <span>{{team}}</span>
        </li>
        <li>
          <span>Position</span>
          <span>{{position}}</span>
        </li>
        <li>
          <span>Nation</span>
          <span>{{nation}}</span>
        </li>
        <li>
          <span>Age</span>
          <span>{{age}}</span>
        </li>
        <li>
          <span>Height</span>
          <span>{{height}}</span>
        </li>
        <li>
          <span>Foot</span>
          <span>{{foot}}</span>
        </li>
      </ul>
    </div>
    <div class="ground position433">
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </div>
  </div>
</template>

<script>
import Player from './components/player.vue'

export default {
  components: {
    Player
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
@import url('/src/assets/css/reset.css');
@import url('/src/assets/css/layout.css');
</style>