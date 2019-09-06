<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>회원 그룹 관리</h3>
        <el-row>
          <el-col :span="4">그룹명</el-col>
          <el-col :span="8">
              그룹명
          </el-col>
          <el-col :span="4">등록회원/코드</el-col>
          <el-col :span="8">
              00명/00개
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">적용기간</el-col>
          <el-col :span="20">
              YYYY.MM.DD ~ 종료일 없음
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">설명</el-col>
          <el-col :span="20">
              설명이 들어갑니다.
          </el-col>
        </el-row>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <div class="heading-option">
          <h3>그룹코드 상세</h3>
        </div>
        <el-table :data="tableData">
          <!-- loop : 20ea -->
          <el-table-column prop="num" label="번호" width="60"></el-table-column>
          <el-table-column prop="num2" label="코드번호" align="left"></el-table-column>
          <el-table-column prop="num3" label="회원번호"></el-table-column>
          <el-table-column prop="name" label="이름" width="150"></el-table-column>
          <el-table-column prop="date" label="진행기간" width="300"></el-table-column>
          <!-- //loop : 20ea -->
        </el-table>
        <div class="btn-area cell">
          <div><el-button>목록</el-button></div>
          <div><el-button @click="downloadexcelBtn">엑셀 다운로드</el-button></div>
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
    contantsHidden: false,
    contantsHiddenInner: false,
    accountsuspended: false,
    accountsuspendedInner: false,
    eventParticipantsPop: false,
    tableData: [
      {num: '20', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '19', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '18', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '17', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '16', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '15', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '14', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '13', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '12', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '11', num2: '00havkevk9dk', num3: '000000', name: '홍길동', date: 'YYYY.MM.DD HH:MM'}
    ]
  }),
  methods: {
    downloadexcelBtn () {
      alert('엑셀 다운로드')
    }
  }
}
</script>
<style scoped>
.tit-sub{font-weight:normal;}
</style>
