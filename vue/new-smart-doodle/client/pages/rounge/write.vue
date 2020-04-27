<template>
  <div class="write">
    <h2 class="tit">
      <!-- <span v-if="category.reference">학습 자료실</span> 글쓰기 -->
      글쓰기
    </h2>
    <div class="header">
      <select class="sel-cate">
        <option value="0">선택하세요.</option>
        <option
          v-for="(c, index) in selectOption"
          :key="index"
          :value="c.brdDtlTpCd"
          >{{ c.brdDtlTpNm }}</option
        >
      </select>
      <input type="text" />
    </div>
    <textarea class="no-resize" />
    <div class="file-list">
      <h3>첨부파일</h3>
      <ul>
        <li v-if="detail.fileUrlNm1">
          <div>
            <span class="tit">첨부파일 1 :</span>
            <span
              class="file"
              @click="fileDown(detail.fileUrlNm1, detail.fileExtNm1)"
              >{{ detail.fileName1 }}</span
            >
          </div>
          <div
            v-if="
              detail.fileExtNm1 === 'jpg' ||
                detail.fileExtNm1 === 'jpeg' ||
                detail.fileExtNm1 === 'png' ||
                detail.fileExtNm1 === 'bmp' ||
                detail.fileExtNm1 === 'gif'
            "
            class="thume"
          >
            <img :src="detail.fileUrlNm1" />
          </div>
        </li>
        <li v-if="detail.fileUrlNm2">
          <div>
            <span class="tit">첨부파일 2 :</span>
            <span
              class="file"
              @click="fileDown(detail.fileUrlNm2, detail.fileExtNm2)"
              >{{ detail.fileName2 }}</span
            >
          </div>
          <div
            v-if="
              detail.fileExtNm2 === 'jpg' ||
                detail.fileExtNm2 === 'jpeg' ||
                detail.fileExtNm2 === 'png' ||
                detail.fileExtNm1 === 'bmp' ||
                detail.fileExtNm1 === 'gif'
            "
            class="thume"
          >
            <img :src="detail.fileUrlNm2" />
          </div>
        </li>
        <li v-if="detail.fileUrlNm3">
          <div>
            <span class="tit">첨부파일 3 :</span>
            <span
              class="file"
              @click="fileDown(detail.fileUrlNm3, detail.fileExtNm3)"
              >{{ detail.fileName3 }}</span
            >
          </div>
          <div
            v-if="
              detail.fileExtNm3 === 'jpg' ||
                detail.fileExtNm3 === 'jpeg' ||
                detail.fileExtNm3 === 'png' ||
                detail.fileExtNm1 === 'bmp' ||
                detail.fileExtNm1 === 'gif'
            "
            class="thume"
          >
            <img :src="detail.fileUrlNm3" />
          </div>
        </li>
      </ul>
    </div>
    <div class="option">
      <button class="setBtn setBtn01">등록</button>
      <button class="setBtn setBtn02">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      detail: {},
      selectOption: [],
      category: {}
    }
  },
  created() {
    this.category = this.$route.params.tab
    console.log('this.category', this.category)
  },
  async beforeMount() {
    const { result } = await this.$axios.$get('board/category', {
      params: { brdCd: 'BRD_RFR' }
    })
    this.selectOption = result
  },
  methods: {
    fileDown(path, ex) {
      if (ex === 'jpg' || ex === 'jpeg' || ex === 'png') {
        return false
      } else {
        const file = 'http://' + path
        // console.log('document.body', document.body)
        const downloadLink = document.createElement('a')
        // console.log('downloadLink', downloadLink)
        downloadLink.href = file
        downloadLink.download = 'data.pptx'

        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variable';
select,
textarea,
input[type='text'] {
  border: 1px solid $disableColor;
}
.write {
  .tit {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid $orangeColor;
    font-size: 20px;
    font-weight: 400;
    color: $orangeColor;
  }
  .sel-cate {
    height: 40px;
    font-size: 18px;
  }
  .header {
    overflow: hidden;
    width: 100%;
    margin-bottom: 8px;
    input[type='text'] {
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
    }
  }
  textarea {
    width: 100%;
    height: 340px;
    padding: 20px;
    font-size: 16px;
  }
  .option {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    button {
      display: inline-block;
      & + button {
        margin-left: 10px;
      }
    }
  }
}
@media screen and (min-width: $mobileSize) {
  .write {
    width: 100%;
    max-width: $mobileSize;
    margin: 0 auto;
    .header {
      & > * {
        float: left;
      }
      .sel-cate {
        width: 200px;
      }
      input[type='text'] {
        width: 652px;
        margin-left: 8px;
      }
    }
  }
}
@media screen and (max-width: $mobileSize) {
  .write {
    width: 92%;
    margin: 0 4%;
    .header {
      & > * {
        width: 100%;
      }
      .sel-cate {
        padding: 8px 10px;
        margin-bottom: 8px;
        background-position: 97% 48%;
      }
    }
  }
}
</style>
