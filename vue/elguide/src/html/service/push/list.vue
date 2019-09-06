<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Push관리</h3>
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
                <el-col :span="4">키워드</el-col>
                <el-col :span="20">
                    <el-input v-model="input" placeholder="검색어를 입력하세요" :disabled="false" class="width48"></el-input>
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
          <div class="heading-option">
            <div class="option">
              <el-button>신규등록</el-button>
            </div>
          </div>
          <el-table :data="tableData">
              <el-table-column prop="num" label="번호" width="60"></el-table-column>
              <el-table-column prop="date" label="발송일시" width="160"></el-table-column>
              <el-table-column prop="state" label="상태" width="120"></el-table-column>
              <el-table-column prop="title" label="메세지 제목" align="left"></el-table-column>
              <el-table-column prop="send" label="발송" width="100"></el-table-column>
              <el-table-column prop="reference" label="조회" width="100"></el-table-column>
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
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    tableData: [
      {num: '1', state: '예약', title: '제목을 선택하면 상세화면으로 이동합니다', date: '2019.00.00 00:00:00', send: '000', reference: '000'},
      {num: '2', state: '예약', title: '제목을 선택하면 상세화면으로 이동합니다', date: '2019.00.00 00:00:00', send: '000', reference: '000'}
    ],
    value: '',
    input: ''
  })
}
</script>
<style scoped>
</style>
