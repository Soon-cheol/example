<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>프로모션 관리</h3>
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
          <el-col :span="4">구분</el-col>
          <el-col :span="12" class="link-url">
            <el-select v-model="value2" clearable placeholder="전체">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="프로모션명을 입력하세요" v-model="input1" class="width50" clearable></el-input>
          </el-col>
        </el-row>
        <div class="btn-area">
          <el-button>검색</el-button>
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
          <el-table-column prop="category" label="구분"></el-table-column>
          <el-table-column prop="image" label="이미지" width="280" align="left">
            <router-link v-bind:to="{}">
              <img src="assets/test.png"/>
            </router-link>
          </el-table-column>
          <el-table-column prop="promotionname" label="프로모션명">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.promotionname}}
              </router-link>
            </template>
          </el-table-column>
          <!-- 19.07.02 기획서 변경. 전시기간 데이터에 노출중 문구 추가 : start -->
          <el-table-column prop="date" label="전시기간" width="250"></el-table-column>
          <!-- 19.07.02 기획서 변경. 전시기간 데이터에 노출중 문구 추가 : end -->
          <el-table-column prop="date2" label="등록일" width="160"></el-table-column>
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
  data: () => ({
    eventParticipantsPop: false,
    options: [{
      value: 'Today',
      label: 'Today'
    }, {
      value: 'Discover',
      label: 'Discover'
    }],
    tableData: [
      {num: '10', category: 'Today', image: '', promotionname: '프로모션명', date: '[노출중] YYYY.MM.DD ~ YYYY.MM.DD', date2: 'YYYY.MM.DD'},
      {num: '9', category: 'Today', image: '', promotionname: '프로모션명', date: '[노출중] YYYY.MM.DD ~ YYYY.MM.DD', date2: 'YYYY.MM.DD'},
      {num: '8', category: 'Today', image: '', promotionname: '프로모션명', date: '[노출중]YYYY.MM.DD ~ YYYY.MM.DD', date2: 'YYYY.MM.DD'},
      {num: '7', category: 'Today', image: '', promotionname: '프로모션명', date: '[노출중] YYYY.MM.DD ~ YYYY.MM.DD', date2: 'YYYY.MM.DD'}
    ],
    radio: '1',
    input1: '',
    input2: '',
    value: '',
    value2: ''
  }),
  methods: {
    downloadexcelBtn () {
      alert('엑셀 다운로드')
    }
  }
}
</script>
<style scoped>
.wave{
  padding-right:10px;
}
</style>
