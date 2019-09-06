<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
          <template>
            <h3>App 버전 관리</h3>
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="iOS">
                <!-- temp-cont : Start -->
                <div class="temp-cont">
                    <el-table :data="tableData">
                        <el-table-column prop="num" label="번호" width="60"></el-table-column>
                        <el-table-column prop="version" label="버전" width="140"></el-table-column>
                        <el-table-column prop="date" label="출시일" width="140"></el-table-column>
                        <el-table-column prop="update" label="업데이트 내역" align="left"></el-table-column>
                    </el-table>
                </div>
                <!-- temp-cont : End -->
              </el-tab-pane>
              <el-tab-pane label="Android">
                <!-- temp-cont : Start -->
                <div class="temp-cont">
                    <el-table :data="tableData2">
                        <el-table-column prop="num" label="번호" width="60"></el-table-column>
                        <el-table-column prop="version" label="버전" width="140"></el-table-column>
                        <el-table-column prop="date" label="출시일" width="140"></el-table-column>
                        <el-table-column prop="update" label="업데이트 내역" align="left"></el-table-column>
                    </el-table>
                </div>
                <!-- temp-cont : End -->
              </el-tab-pane>
            </el-tabs>
          </template>
            <div class="btn-area right">
              <el-button>신규등록</el-button>
          </div>
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
      value: '전체',
      label: '전체'
    }, {
      value: '질문내용',
      label: '질문내용'
    }, {
      value: '이름',
      label: '이름'
    }, {
      value: '회원번호',
      label: '회원번호'
    }],
    value: '',
    value2: '',
    input: '',
    tableData: [
      {num: '1', update: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…', date: '2019.00.00 00:00', version: '0.00'},
      {num: '1', update: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…', date: '2019.00.00 00:00', version: '0.00'}
    ],
    tableData2: [
      {num: '2', update: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…', date: '2019.00.00 00:00', version: '0.00'},
      {num: '2', update: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…', date: '2019.00.00 00:00', version: '0.00'}
    ]
  }),
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
</style>
