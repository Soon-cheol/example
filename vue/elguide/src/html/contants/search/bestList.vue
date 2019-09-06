<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>인기 검색어 관리</h3>
            <el-row>
                <el-col :span="4">기간</el-col>
                <el-col :span="10">
                  <el-date-picker
                    v-model="value"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date">
                  </el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">검색</el-col>
                <el-col :span="10">
                    <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button >검색</el-button>
                <el-button>초기화</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <p class="tit-sub">YYYY.MM.DD ~ YYYY.MM.DD 검색어 순위 : 전체 검색어 00,000개</p>
            <el-table :data="tableData">
                <el-table-column prop="ranking" label="순위" width="60"></el-table-column>
                <el-table-column prop="keyword" label="검색어" align="left"></el-table-column>
                <el-table-column prop="searchNum" label="검색횟수" width="160"></el-table-column>
                <el-table-column prop="admin" label="관리" width="300">
                  <el-radio v-model="radio2" label="1" @click="searchVisible = true">공개</el-radio>
                  <el-radio v-model="radio2" label="2" @click="searchVisible = true">비공개</el-radio>
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
        <!-- 검색어 비공개/공개 : Start -->
        <el-dialog
            :visible.sync="searchVisible"
            width="30%"
            center>
            <span>해당 검색어를 비공개로 전환하시겠습니까?</span>
            <!-- <span>해당 검색어를 공개로 전환하시겠습니까?</span> -->
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="searchVisible = false">확인</el-button>
              <el-button @click="searchVisible = false">닫기</el-button>
            </span>
        </el-dialog>
        <!-- 검색어 비공개/공개 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    searchVisible: false,
    tableData: [
      {ranking: '1', keyword: 'Tom', searchNum: '4', progress: '진행중', exhibition: '전시중'}
    ],
    value: '',
    radio: '1',
    radio2: '1',
    input1: '',
    input2: ''
  }),
  methods: {
    searchVisible () {
      alert(1)
    }
  }
}
</script>
