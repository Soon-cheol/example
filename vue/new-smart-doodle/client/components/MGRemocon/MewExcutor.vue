<template>
  <div class="excutor">
    <transition name="slidein">
      <div v-if="display" class="exe-container">
        <div class="studyitem-group">
          <img
            v-for="item of itemlist.slice(0, 5)"
            :key="item.idx"
            :src="item.img"
            class="studyitem"
            :style="{ opacity: item.active ? 1 : 0.3 }"
            @click="onStartStudy(item.idx)"
          />
        </div>
        <div class="studyitem-group">
          <img
            v-for="item of itemlist.slice(5, 10)"
            :key="item.idx"
            :src="item.img"
            class="studyitem"
            :style="{ opacity: item.active ? 1 : 0.3 }"
            @click="onStartStudy(item.idx)"
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
// eslint-disable-next-line no-unused-vars
const imglist = [
  '/images/main_title_01.png',
  '/images/main_title_02.png',
  '/images/main_title_03.png',
  '/images/main_title_04.png',
  '/images/main_title_05.png',
  '/images/main_title_06.png',
  '/images/main_title_07.png',
  '/images/main_title_08.png',
  '/images/main_title_09.png',
  '/images/main_title_10.png'
]
export default {
  props: {
    studyList: {
      type: Array,
      default() {
        return []
      }
    },
    musicList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      display: false,
      itemlist: []
    }
  },
  mounted() {
    // console.log(this.musicList)
  },
  methods: {
    toggle() {
      this.display = !this.display

      if (this.display) {
        for (let i = 0; i < this.musicList.length; i++) {
          // console.log('=>', this.musicList[i])
          this.itemlist[i] = {
            idx: i + 1,
            img: imglist[i],
            active: this.musicList[i].myLrngIsuse === '1',
            productID: this.musicList[i].prodId
          }
        }
      }
    },
    onStartStudy(v) {
      if (this.itemlist[v - 1].active === true) {
        this.$emit('onStartStudy', this.itemlist[v - 1].productID)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variable';

/* @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css); */
/* @import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css); */

@font-face {
  font-family: 'Jeju Gothic';
  font-style: normal;
  font-weight: 400;
  src: url(/font/JejuGothic-Regular.eot);
  src: url(/font/JejuGothic-Regular.eot?#iefix) format('embedded-opentype'),
    url(/font/JejuGothic-Regular.woff2) format('woff2'),
    url(/font/JejuGothic-Regular.woff) format('woff'),
    url(/font/JejuGothic-Regular.ttf) format('truetype');
}

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
