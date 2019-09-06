<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>약관 관리</h3>
            <el-row>
                <el-col :span="4">약관명</el-col>
                <el-col :span="5">
                  <el-input placeholder="약관명을 입력하세요" v-model="input1" clearable></el-input>
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
              <el-table-column prop="division" label="구분" width="120"></el-table-column>
              <el-table-column prop="title" label="약관명" align="left"></el-table-column>
              <el-table-column prop="version" label="버젼" width="80"></el-table-column>
              <el-table-column prop="date2" label="용도" width="150"></el-table-column>
              <el-table-column prop="date1" label="등록일" width="120"></el-table-column>
              <el-table-column prop="writer" label="작성자" width="140"></el-table-column>
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
    radio: '1',
    tableData: [
      {num: '1', display: '전시중', division: '필수', title: '제3자개인정보동의약관', version: '1.0', date1: '2019.00.00', date2: 'Lifeplus 가입', date3: '2019.00.00', writer: '홍길동'},
      {num: '2', display: '전시중', division: '필수', title: '제3자개인정보동의약관', version: '1.0', date1: '2019.00.00', date2: 'Lifeplus 가입', date3: '2019.00.00', writer: '홍길동'},
      {num: '3', display: '전시중', division: '필수', title: '제3자개인정보동의약관', version: '1.0', date1: '2019.00.00', date2: 'Lifeplus 가입', date3: '2019.00.00', writer: '홍길동'}
    ]
  })
}
</script>
<style scoped>
</style>
