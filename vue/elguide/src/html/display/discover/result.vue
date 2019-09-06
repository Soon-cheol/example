<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>Discover 검색결과</h3>
      <el-row class="table">
        <el-col :span="4">기간 지정</el-col>
        <el-col :span="20">
          <el-date-picker
            v-model="value"
            class="width40"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
          <el-input placeholder="" v-model="input1" class="width30" clearable></el-input>
          <el-button size="large">검색</el-button>
        </el-col>
      </el-row>
      <div class="btn-area left">
        <el-button>목록</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub"><b>여의도 맛집</b>으로 검색한 결과 <b>24</b>개가 있습니다.</p>
      <el-table :data="tableData">
        <el-table-column prop="num" label="전시일" width="160"></el-table-column>
        <el-table-column prop="category2" label="전시카테고리" align="left" width="160"></el-table-column>
        <el-table-column prop="division" label="Line명" align="left" width="160"></el-table-column>
        <el-table-column prop="lineName" label="구분" align="left" width="160"></el-table-column>
        <el-table-column prop="contents" label="제목" align="left"></el-table-column>
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <!-- temp-cont : End -->
    <!-------------------- Dialog : Start -------------------->
    <!-- 전시종료 : Start -->
      <el-dialog
          :visible.sync="contantsHidden"
          width="30%"
          center>
          <span>해당 콘텐츠의 전시를 종료하시겠습니까?</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
            <el-button @click="contantsHidden = false">취소</el-button>
          </span>
          <el-dialog width="30%" :visible.sync="contantsHiddenInner" append-to-body>
            <span>해당 콘텐츠의 전시를 종료했습니다.</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="contantsHiddenInner = false">확인</el-button>
            </span>
          </el-dialog>
      </el-dialog>
      <!-- 전시종료 : End -->
      <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    tableData: [
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'},
      {num: 'YYYY.MM.DD', category2: '카테고리명', division: 'BBC뉴스', lineName: '유튜브형', contents: '콘텐츠 제목 표시'}
    ],
    value: '',
    input1: ''
  }),
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1 || rowIndex === 3) {
        return 'select-row'
      }
      return ''
    }
  }
}
</script>
<style scoped>
.btn-type01{padding:2px !important;}
.date-inquiry{font-size:13px; padding:0 10px; vertical-align:middle;}
</style>
