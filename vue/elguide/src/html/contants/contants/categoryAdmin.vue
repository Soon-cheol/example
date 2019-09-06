<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>이벤트</h3>
            <el-row>
                <el-col :span="4">노출기간</el-col>
                <el-col :span="10" class="table">
                    <el-date-picker placeholder="" v-model="input1" type="datetime"></el-date-picker>
                    <el-date-picker placeholder="" v-model="input2" type="datetime"></el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">진행상태</el-col>
                <el-col :span="10" class="table">
                    <el-radio v-model="radio" label="1">전체</el-radio>
                    <el-radio v-model="radio" label="2">진행중</el-radio>
                    <el-radio v-model="radio" label="3">종료</el-radio>
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                </el-col>
            </el-row>
            <div class="btn-area right">
                <el-button type="main" size="large">검색</el-button>
                <el-button size="large">초기화</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="title" label="제목"></el-table-column>
                <el-table-column prop="date" label="진행기간" width="240"></el-table-column>
                <el-table-column prop="progress" label="진행상태" width="160"></el-table-column>
                <el-table-column prop="exhibition" label="전시상태" width="160"></el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data () {
    return {
      tableData: [
        {num: '1', title: 'Tom', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', exhibition: '전시중'},
        {num: '2', title: 'Tom', date: '2019.00.00 ~ 2019.00.00', progress: '진행종료', exhibition: '전시종료'}
      ],
      radio: '1',
      input1: '',
      input2: ''
    }
  }
}
</script>
