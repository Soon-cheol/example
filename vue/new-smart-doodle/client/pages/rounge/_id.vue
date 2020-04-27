<template>
  <div class="view">
    <h2 class="tit">
      [{{ detail.brdNm }} / {{ detail.brdDtlTpNm }}]
      {{ detail.brdTiteNm }}
    </h2>
    <div class="header">
      <span class="writer">작성자 : {{ detail.memId }}</span>
      <span class="date">시간 : {{ detail.creDttm }}</span>
      <span class="viewer">조회수 : {{ detail.inqCnt }}</span>
    </div>
    <p class="txt">
      {{ detail.brdCtt }}
    </p>
    <div class="file-list">
      <h3>첨부파일</h3>
      <!-- {{ detail.atchFileList }} -->
      <ul>
        <li v-for="(l, index) in detail.atchFileList" :key="index">
          <div>
            첨부파일 :
            <span
              class="file-name"
              @click="fileDown(detail.fileUrlNm, detail.fileExtNm)"
              >{{ l.fileName }}</span
            >
          </div>
          <img :src="l.fileUrlNm" />
          <!-- {{ l.atchFileId }} -->
          <!-- {{ l.fileExtNm }} -->
        </li>
      </ul>
    </div>
    <div class="option">
      <button v-if="detail.myBoardYn" class="setBtn setBtn01">수정</button>
      <button class="setBtn setBtn03" @click="goList">목록</button>
      <button v-if="detail.myBoardYn" class="setBtn setBtn02">삭제</button>
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
  async beforeMount() {
    const { result } = await this.$axios.$get(
      'board/edu-info/referenceRoom/' + this.$route.params.id
    )
    this.detail = result
    console.log('type', this.detail.atchFileList.constructor)
  },
  methods: {
    fileDown(path, ex) {
      console.log('path', path)
      console.log('ex', ex)
      if (ex === 'jpg' || ex === 'jpeg' || ex === 'png') {
        console.log('이미지')
      } else if (path === undefined || ex === undefined) {
        return false
      } else {
        const file = 'http://' + path
        const downloadLink = document.createElement('a')
        downloadLink.href = file
        downloadLink.download = 'data.pptx'

        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      }
    },
    goList() {
      this.$router.push('/rounge')
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
.view {
  max-width: $mobileSize;
  .header {
    overflow: hidden;
    margin-bottom: 8px;
    span {
      & + span {
        border-left: 1px solid $inputColor;
      }
    }
  }
  .tit {
    padding: 0 10px 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid $orangeColor;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: $orangeColor;
  }
  .txt {
    padding: 20px;
    margin-top: 18px;
    min-height: 300px;
    border: 1px solid $inputColor;
    text-align: left;
  }
  textarea {
    width: 100%;
    height: 340px;
    padding: 20px;
    font-size: 16px;
  }
  .file-list {
    h3 {
      padding: 20px 10px 4px;
      font-size: 20px;
      font-weight: 200;
      text-align: left;
    }
    ul {
      border-bottom: 1px solid $inputColor;
      li {
        padding: 14px;
        border-top: 1px solid $inputColor;
        text-align: left;
        .file-name {
          color: $orangeColor;
          cursor: pointer;
        }
        img {
          margin-top: 10px;
        }
      }
    }
  }
  .option {
    overflow: hidden;
    width: 100%;
    margin-top: 20px;
    text-align: center;
    button {
      display: inline-block;
      & + button {
        margin-left: 10px;
      }
      &.setBtn01,
      &.setBtn02 {
        float: left;
      }
      &.setBtn03 {
        float: right;
      }
    }
  }
}
@media screen and (min-width: $mobileSize) {
  .view {
    width: 100%;
    margin: 0 auto;
    .header {
      padding: 0 20px;
      text-align: right;
      span {
        display: inline-block;
        & + span {
          padding-left: 10px;
          margin-left: 10px;
        }
      }
    }
  }
}
@media screen and (max-width: $mobileSize) {
  .view {
    width: 100%;
    margin: 3% 0;
    padding: 0 20px;
    .header {
      display: table;
      width: 100%;
      & > * {
        display: table-cell;
        padding: 0 5px;
        vertical-align: middle;
      }
    }
    .file-list {
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
