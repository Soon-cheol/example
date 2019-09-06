<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>회원 그룹 관리</h3>
      <el-row>
        <el-col :span="4">키워드</el-col>
          <el-col :span="12" class="link-url">
            <el-select v-model="value" clearable placeholder="전체">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="검색어를 입력하세요" v-model="input1" class="width50" clearable></el-input>
            <el-button size="large">검색</el-button>
            <el-button size="large">초기화</el-button>
          </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <el-table :data="tableData">
        <el-table-column prop="num" label="번호" width="60"></el-table-column>
        <el-table-column prop="groupname" label="그룹명" width="250"></el-table-column>
        <el-table-column prop="members" label="회원수" width="150"></el-table-column>
        <el-table-column prop="comment" label="설명"></el-table-column>
        <el-table-column prop="date" label="등록일" width="150"></el-table-column>
        <el-table-column prop="date2" label="적용기간" width="250"></el-table-column>
        <el-table-column prop="download" label="다운로드" width="160">
          <el-button @click="downloadBtn">다운로드</el-button>
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
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    centerDialogVisible: false,
    options: [{
      value: '그룹명',
      label: '그룹명'
    }, {
      value: '코드',
      label: '코드'
    }, {
      value: '그룹설명',
      label: '그룹설명'
    }],
    tableData: [
      {num: '20', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '19', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '18', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '17', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '16', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '15', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '14', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '13', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '12', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'},
      {num: '12', groupname: '그룹명', members: '000', comment: '설명이 들어갑니다.', date: 'YYYY.MM.DD', date2: 'YYYY.MM.DD~YYYY.MM.DD'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  }),
  methods: {
    downloadBtn () {
      alert('다운로드')
    }
  }
}
</script>
