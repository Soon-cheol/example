<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>금칙어 관리</h3>
            <el-row>
                <el-col :span="4">검색</el-col>
                <el-col :span="10">
                    <el-input placeholder="" v-model="input1" class="width50" clearable></el-input>
                    <el-button size="large">검색</el-button>
                    <el-button size="large">초기화</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
          <div class="heading-option">
            <p class="tit-sub">선택항목 <el-button size="small">삭제</el-button></p>
            <div class="option">
              <el-button>신규등록</el-button>
            </div>
          </div>
          <el-table :data="tableData">
              <el-table-column prop="num" label="번호" width="60"></el-table-column>
              <el-table-column label="선택" width="80">
                  <el-checkbox></el-checkbox>
              </el-table-column>
              <el-table-column prop="keyword" label="금칙어" align="left"></el-table-column>
              <el-table-column label="적용 대상">
                <el-table-column prop="name" label="이름" width="150"></el-table-column>
                <el-table-column prop="comment" label="댓글" width="150"></el-table-column>
              </el-table-column>
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
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tableData: [
      {num: '1', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '2', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '3', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '4', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '5', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '6', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '7', keyword: '적용된 금칙어', name: '적용', comment: '적용'},
      {num: '8', keyword: '적용된 금칙어', name: '적용', comment: '적용'}
    ],
    input1: ''
  })
}
</script>
