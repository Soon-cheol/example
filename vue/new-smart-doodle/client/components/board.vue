<template>
  <div class="board">
    <div v-if="list.length > 0">
      <!-- thume 타입 -->
      <ul v-if="type === 'thume'" class="thume">
        <li
          v-for="(l, index) in list.slice(0, 5)"
          :key="index"
          @click="view(l.brdSeqno)"
        >
          <!-- <img :src="l.img" /> -->
          <img src="/images/youTube.jpg" />
          <div class="preview">
            <p class="tit">
              [{{ l.brdNm }}]<span>{{ l.brdTiteNm }}</span>
            </p>
            <p class="txt">내용</p>
            <span class="writer">{{ l.memId }}</span>
            <span class="date">{{ l.creDttm }}</span>
          </div>
        </li>
      </ul>
      <!-- // thume 타입 -->
      <!-- list 타입 -->
      <ul v-else-if="type === 'list'" class="list">
        <li v-for="(l, index) in list.slice(0, 5)" :key="index">
          <p class="tit">
            [{{ l.brdNm }}]<span>{{ l.brdTiteNm }}</span>
          </p>
          <span class="writer">{{ l.memId }}</span>
          <span class="date">{{ l.creDttm }}</span>
        </li>
      </ul>
      <!-- // list 타입 -->
      <div class="paging">
        <button class="first" />
        <button class="prev" />
        <ol>
          <li><button>1</button></li>
          <li><button>1</button></li>
          <li><button class="active">1</button></li>
          <li><button>1</button></li>
          <li><button>1</button></li>
        </ol>
        <button class="next" />
        <button class="last" />
      </div>
    </div>
    <div v-else class="no-list">
      <p>등록된 글이 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'thume'
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    view(num) {
      this.$router.push({
        name: `${this.$route.name}-id`,
        params: { id: num }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variable';
.board {
  width: 100%;
  max-width: $mobileSize;
  margin: 0 auto;
  .no-list {
    padding: 60px 0;
  }
  .tit {
    font-size: 18px;
  }
  .txt {
    font-size: 13px;
    line-height: 20px;
  }
  .writer,
  .date {
    display: inline-block;
  }
  .thume {
    overflow: hidden;
    width: 100%;
    li {
      display: table;
      width: 100%;
      cursor: pointer;
      & + li {
        border-top: 1px solid $inputColor;
      }
      img {
        overflow: hidden;
        width: 214px;
        border: 1px solid $inputColor;
        border-radius: 4px;
      }
      .preview {
        width: 100%;
        padding: 14px 20px;
        text-align: left;
      }
    }
  }
  .list {
    margin-top: 20px;
    li {
      padding: 20px;
      text-align: left;
      cursor: pointer;
      & + li {
        border-top: 1px solid $inputColor;
      }
      .tit {
        margin-bottom: 20px;
      }
    }
  }
  .paging {
    margin-top: 20px;
    text-align: center;
    ol,
    li {
      display: inline-block;
    }
    button {
      display: inline-block;
      margin: 0 2px;
      /* border: 1px solid $orangeColor; */
      border-radius: 100%;
      vertical-align: top;
      color: $disableColor;
      &:hover {
        background: $inputColor;
        color: $defaultColor;
      }
      &::before,
      &::after {
        font-size: 11px;
        font-weight: 600;
      }
      &.first::before {
        content: '<<';
        margin-left: -2px;
      }
      &.prev::before {
        content: '<';
        margin-left: -2px;
      }
      &.next::before {
        content: '>';
        margin-right: -2px;
      }
      &.last::before {
        content: '>>';
        margin-right: -2px;
      }
      &.active {
        background: $orangeColor;
        color: $whiteColor;
      }
    }
  }
}
@media screen and (min-width: $mobileSize) {
  .thume {
    li {
      height: 120px;
      padding-top: 20px;
      margin-top: 20px;
      & > * {
        display: table-cell;
        vertical-align: top;
      }
      .preview {
        height: 80px;
      }
      .txt {
        height: 37px;
        margin: 4px 0 8px;
      }
      .writer,
      .date {
        width: 160px;
      }
    }
  }
  .list {
    li {
      padding: 20px;
    }
  }
  .paging {
    button {
      width: 40px;
      height: 40px;
    }
  }
}
@media screen and (max-width: $mobileSize) {
  .writer,
  .date {
    width: 49%;
  }
  .writer {
    text-align: left;
  }
  .date {
    text-align: right;
  }
  .thume {
    margin-top: 20px;
    li {
      img {
        display: none;
      }
      .txt {
        margin: 10px 0 20px;
      }
    }
  }
  .list {
    li {
      width: 94%;
      margin: 0 3%;
    }
  }
  .paging {
    button {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
