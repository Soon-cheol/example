<template>
  <div class="excutor">
    <transition name="slidein">
      <div v-if="display" class="exe-container">
        <div class="studyitem-group">
          <img
            src="/images/main_title_01.png"
            class="studyitem"
            @click="onStartStudy(1)"
          />
          <img
            src="/images/main_title_02.png"
            class="studyitem"
            @click="onStartStudy(2)"
          />
          <img
            src="/images/main_title_03.png"
            class="studyitem"
            @click="onStartStudy(3)"
          />
          <img
            src="/images/main_title_04.png"
            class="studyitem"
            @click="onStartStudy(4)"
          />
          <img
            src="/images/main_title_05.png"
            class="studyitem"
            @click="onStartStudy(5)"
          />
        </div>
        <div class="studyitem-group">
          <img
            src="/images/main_title_06.png"
            class="studyitem"
            @click="onStartStudy(6)"
          />
          <img
            src="/images/main_title_07.png"
            class="studyitem"
            @click="onStartStudy(7)"
          />
          <img
            src="/images/main_title_08.png"
            class="studyitem"
            @click="onStartStudy(8)"
          />
          <img
            src="/images/main_title_09.png"
            class="studyitem"
            @click="onStartStudy(9)"
          />
          <img
            src="/images/main_title_10.png"
            class="studyitem"
            @click="onStartStudy(10)"
          />
        </div>
      </div>
    </transition>
    <img
      :class="display ? 'remocon remocon-slideup' : 'remocon'"
      src="/images/remocon.png"
      @click="toggle()"
    />
  </div>
</template>

<script>
export default {
  props: {
    studyList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      display: false
    }
  },
  mounted() {},
  methods: {
    toggle() {
      this.display = !this.display
      if (this.display) {
      }
    },
    onStartStudy(v) {
      this.$emit('onStartStudy', v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variable';
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);

$keyColor: rgb(240, 76, 84);
.excutor {
  display: flex;
  flex-direction: column;
  align-items: center;

  .remocon {
    position: relative;
    top: -10px;
    width: 96px;
    transform: scale(1);
    transition: transform 0.5s, top 1s;
    cursor: pointer;
  }
  .remocon-slideup {
    top: -170px;
  }
  .remocon:hover {
    transform: scale(1.2);
  }
  .exe-container {
    position: absolute;
    bottom: 0em;
    padding-top: 13px;
    width: 500px;
    height: 190px;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    border-radius: 2em;
    border-bottom-left-radius: 0em;
    border-bottom-right-radius: 0em;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);
    // border: 0.4em solid rgb(240, 76, 84);
  }
  .studyitem-group {
    display: flex;
  }
  .studyitem {
    display: block;
    min-width: 70px;
    height: 70px;
    // background: #fc0;
    // border-radius: 5em;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    margin: 1em;
    transform: scale(1);
    transition: transform 0.5s;
    cursor: pointer;
    // text-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  }
  .studyitem:hover {
    transform: scale(1.5);
    z-index: 1000;
  }

  .slidein-enter-active,
  .slidein-leave-active {
    transition: bottom 1s;
  }
  .slidein-enter,
  .slidein-leave-to /* .fade-leave-active below version 2.1.8 */ {
    bottom: -240px;
  }
}
@media screen and (max-width: $desktopSize) and (min-width: $mobileSize) {
}
@media screen and (max-width: $mobileSize) {
  .excutor {
    .exe-container {
      padding-top: 20px;
      width: 95%;
      height: 160px;
    }
    .remocon-slideup {
      top: -150px;
    }
    .remocon {
      width: 64px;
    }
    .studyitem {
      min-width: 60px;
      height: 60px;

      margin: 0.2em;
    }
  }
}
</style>
