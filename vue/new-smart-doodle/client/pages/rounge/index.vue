<template>
  <div>
    <ul class="tab">
      <li :class="{ active: tab.reference }" @click="tabMove('reference')">
        학습자료실
      </li>
      <li :class="{ active: tab.notice }" @click="tabMove('notice')">
        공지사항
      </li>
      <li :class="{ active: tab.qna }" @click="tabMove('qna')">Q&A</li>
    </ul>
    <boardComponent :type="type" :list="list" />
    <div class="option">
      <button class="setBtn setBtn01" @click="btnWrite">글쓰기</button>
    </div>
  </div>
</template>

<script>
import boardComponent from '~/components/board.vue'
export default {
  components: {
    boardComponent
  },
  // async asyncData(context) {
  //   // console.log('context', context)
  //   const { data } = await context.$axios.get('board/edu-info/referenceRoom')
  //   console.log('data', data)
  // },
  data() {
    return {
      type: 'thume',
      list: [],
      tab: {
        reference: true,
        notice: false,
        qna: false
      }
    }
  },
  async beforeMount() {
    // 디폴트 - 학습자료실
    const { result } = await this.$axios.$get('board/edu-info/referenceRoom')
    this.list = result
  },
  methods: {
    async tabMove(v) {
      this.tab.reference = this.tab.notice = this.tab.qna = false
      if (v === 'reference') {
        this.tab.reference = true
        // eslint-disable-next-line no-unused-vars
        const { result } = await this.$axios.$get(
          'board/edu-info/referenceRoom'
        )
        this.list = result
        this.type = 'thume'
      } else if (v === 'notice') {
        this.tab.notice = true
        // eslint-disable-next-line no-unused-vars
        const { result } = await this.$axios.$get('board/cs-center/notice')
        this.list = result
        this.type = 'list'
      } else if (v === 'qna') {
        this.tab.qna = true
        const { result } = await this.$axios.$get('board/cs-center/question')
        this.list = result
        this.type = 'list'
      }
    },
    btnWrite() {
      this.$router.push({
        name: 'rounge-write',
        params: {
          tab: this.tab
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variable';
.tab {
  display: table;
  width: 420px;
  margin: 0 auto;
  background: #fff;
  font-size: 16px;
  li {
    display: table-cell;
    padding: 20px 0;
    text-align: center;
    cursor: pointer;
    &.active {
      color: $orangeColor;
    }
  }
}
.option {
  overflow: hidden;
  max-width: $mobileSize;
  .setBtn01 {
    float: right;
  }
}
@media screen and (min-width: $mobileSize) {
  .tab {
    width: 420px;
    li {
      position: relative;
      width: 140px;
      &.active {
        &:after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          width: 80%;
          left: 10%;
          height: 2px;
          background: $orangeColor;
          border-radius: 8px;
        }
      }
    }
  }
  .option {
    width: 100%;
    margin: 20px auto 0;
  }
}
@media screen and (max-width: $mobileSize) {
  .tab {
    width: 100%;
    li {
      width: 33.3%;
      padding: 20px 0;
      text-align: center;
      &.active {
        border-bottom: 2px solid $orangeColor;
      }
    }
  }
  .option {
    width: 92%;
    margin: 20px 4% 0;
  }
}
</style>
