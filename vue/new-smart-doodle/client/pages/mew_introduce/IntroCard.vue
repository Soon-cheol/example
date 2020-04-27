<template>
  <div @click="nextItem()">
    <transition name="itemani">
      <div v-for="item in itemlistFiltered" :key="item.img" class="frame">
        <img class="thumb" :src="item.img" />
        <span class="comment">{{ item.text }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentItemIDX: 0
    }
  },
  computed: {
    itemlistFiltered() {
      return this.items.filter((item) => {
        return this.currentItemIDX === this.items.indexOf(item)
      })
    }
  },
  mounted() {
    // console.log(this.items)
  },
  methods: {
    nextItem() {
      this.currentItemIDX += 1
      if (this.currentItemIDX >= this.items.length) this.currentItemIDX = 0
    }
  }
}
</script>

<style lang="scss" scoped>
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

.frame {
  display: flex;
  flex-direction: column;
  width: 320px;
}
.thumb {
  width: 100%;
  border-radius: 15px;
}
.comment {
  font-family: 'Jeju Gothic';
  padding: 10px;
  color: #fff;
  font-size: 1em;
}

.itemani-enter-active,
.itemani-leave-active {
  transition: opacity 1s;
}
.itemani-enter,
  .itemani-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
