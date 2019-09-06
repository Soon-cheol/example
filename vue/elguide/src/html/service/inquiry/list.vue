<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>1:1문의</h3>
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
              <el-col :span="12" class="link-url">
                <el-select v-model="value2" clearable placeholder="전체">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-input placeholder="검색키워드를 입력하세요" v-model="input" class="width50" clearable></el-input>
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
          <template>
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="전체 (000)">
                <!-- temp-cont : Start -->
                <div class="temp-cont">
                    <el-table :data="tableData">
                        <el-table-column prop="num" label="번호" width="60"></el-table-column>
                        <el-table-column label="질문내용" align="left">
                          <template slot-scope="scope">
                          <router-link
                          v-bind:to="{}">
                              {{scope.row.title}}
                          </router-link>
                          </template>
                        </el-table-column>
                        <el-table-column prop="date1" label="문의일시" width="140"></el-table-column>
                        <el-table-column prop="date2" label="답변일시" width="140"></el-table-column>
                    </el-table>
                </div>
                <!-- temp-cont : End -->
              </el-tab-pane>
              <el-tab-pane label="미답변 (000)">
                <!-- temp-cont : Start -->
                <div class="temp-cont">
                    <el-table :data="tableData2">
                        <el-table-column prop="num" label="번호" width="60"></el-table-column>
                        <el-table-column prop="title" label="질문내용" align="left"></el-table-column>
                        <el-table-column prop="date1" label="문의일시" width="140"></el-table-column>
                        <el-table-column prop="date2" label="답변일시" width="140"></el-table-column>
                    </el-table>
                </div>
                <!-- temp-cont : End -->
              </el-tab-pane>
              <el-tab-pane label="답변 완료 (000)">
                <!-- temp-cont : Start -->
                <div class="temp-cont">
                    <el-table :data="tableData3">
                        <el-table-column prop="num" label="번호" width="60"></el-table-column>
                        <el-table-column prop="title" label="질문내용" align="left"></el-table-column>
                        <el-table-column prop="date1" label="문의일시" width="140"></el-table-column>
                        <el-table-column prop="date2" label="답변일시" width="140"></el-table-column>
                    </el-table>
                </div>
                <!-- temp-cont : End -->
              </el-tab-pane>
            </el-tabs>
          </template>
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
      {num: '1', title: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…', date1: '2019.00.00 00:00', date2: '2019.00.00 00:00'},
      {num: '1', title: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…', date1: '2019.00.00 00:00', date2: '2019.00.00 00:00'}
    ],
    tableData2: [
      {num: '2', title: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…2', date1: '2019.00.00 00:00', date2: '2019.00.00 00:00'},
      {num: '2', title: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…2', date1: '2019.00.00 00:00', date2: '2019.00.00 00:00'}
    ],
    tableData3: [
      {num: '3', title: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…3', date1: '2019.00.00 00:00', date2: '2019.00.00 00:00'},
      {num: '3', title: '질문의 앞 부분을 40자까지만 잘라내어, 줄바꿈을 해서 표시합니다…3', date1: '2019.00.00 00:00', date2: '2019.00.00 00:00'}
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
