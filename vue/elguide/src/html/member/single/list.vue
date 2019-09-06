<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>회원 관리</h3>
        <el-row>
          <el-col :span="4">가입기간</el-col>
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
          <el-col :span="4">출생년도</el-col>
          <el-col :span="10" class="table">
            <el-select v-model="value2" clearable
              placeholder="YYYY">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <span class="wave">~</span>
            <el-select v-model="value3" clearable placeholder="YYYY">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">성별</el-col>
          <el-col :span="10" class="table">
            <el-radio v-model="radio" label="1">전체</el-radio>
            <el-radio v-model="radio" label="2">남성</el-radio>
            <el-radio v-model="radio" label="3">여성</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">커플여부</el-col>
          <el-col :span="10" class="table">
            <el-radio v-model="radio" label="1">전체</el-radio>
            <el-radio v-model="radio" label="2">싱글</el-radio>
            <el-radio v-model="radio" label="3">커플</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">자녀유무</el-col>
          <el-col :span="10" class="table">
            <el-radio v-model="radio" label="1">전체</el-radio>
            <el-radio v-model="radio" label="2">없음</el-radio>
            <el-radio v-model="radio" label="3">있음</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">상태</el-col>
          <el-col :span="10" class="table">
            <el-radio v-model="radio" label="1">전체</el-radio>
            <el-radio v-model="radio" label="2">정상</el-radio>
            <el-radio v-model="radio" label="3">휴면</el-radio>
            <el-radio v-model="radio" label="4">정지</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">키워드</el-col>
          <el-col :span="12" class="link-url">
            <el-select v-model="value4" clearable placeholder="전체">
              <el-option v-for="item in options2" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="검색어를 입력하세요" v-model="input1" class="width50" clearable></el-input>
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
        <el-table :data="tableData">
          <el-table-column prop="num" label="번호" width="60"></el-table-column>
          <el-table-column prop="name" label="이름">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.name}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="email" label="이메일" width="280" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.email}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="date1" label="출생년도"></el-table-column>
          <el-table-column prop="couplewhether" label="커플여부" width="180"></el-table-column>
          <el-table-column prop="childrenwhether" label="자녀유무" width="180"></el-table-column>
          <el-table-column prop="date2" label="가입일" width="160"></el-table-column>
          <el-table-column prop="condition" label="상태" width="160"></el-table-column>
        </el-table>
        <div class="btn-area right">
            <el-button @click="downloadexcelBtn">엑셀 다운로드</el-button>
        </div>
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
      value: 'YYYY',
      label: 'YYYY'
    }],
    options2: [{
      value: '이름',
      label: '이름'
    }, {
      value: '이메일',
      label: '이메일'
    }],
    tableData: [
      {num: '20', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '19', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '18', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '17', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '16', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '15', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '14', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '13', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '12', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'},
      {num: '11', name: '홍길동', email: 'emailID@email.co.kr', date1: 'YYYY', couplewhether: '싱글', childrenwhether: '없음', date2: 'YYYY.MM.DD', condition: '정상'}
    ],
    radio: '1',
    input1: '',
    input2: '',
    value: '',
    value2: '',
    value3: '',
    value4: ''
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
