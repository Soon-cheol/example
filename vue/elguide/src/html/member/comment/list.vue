<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>댓글 관리</h3>
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
          <el-col :span="4">상태</el-col>
          <el-col :span="10" class="table">
            <el-radio v-model="radio" label="1">전체</el-radio>
            <el-radio v-model="radio" label="2">공개</el-radio>
            <el-radio v-model="radio" label="3">비공개</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">키워드</el-col>
          <el-col :span="12" class="link-url">
            <el-select v-model="value" clearable placeholder="전체">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
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
          <el-table-column prop="num" label="번호" width="80"></el-table-column>
          <el-table-column prop="content" label="댓글내용" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.content}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="이름" width="150">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.name}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="등록일시" width="150"></el-table-column>
          <el-table-column prop="admin" label="관리" width="150">
            <el-button @click="commentHidden= true">공개</el-button>
          </el-table-column>
          <!-- 숨기기일 경우 버튼 <el-button @click="commentBlock = true">숨기기</el-button> -->
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
      <!-- 댓글 비공개 : Start -->
      <el-dialog
        :visible.sync="commentHidden"
        width="30%"
        center>
        <span>해당 댓글을 비공개로 전환하시겠습니까?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="commentHidden = false">확인</el-button>
          <el-button @click="commentHidden = false">닫기</el-button>
        </span>
      </el-dialog>
      <!-- 댓글 비공개 : End -->
      <!-- 댓글 공개 : Start -->
      <el-dialog
        :visible.sync="commentBlock"
        width="30%"
        center>
        <span>해당 댓글을 공개로 전환하시겠습니까?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="commentBlock = false">확인</el-button>
          <el-button @click="commentBlock = false">닫기</el-button>
        </span>
      </el-dialog>
      <!-- 댓글 공개 : End -->
      <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    commentHidden: false,
    commentBlock: false,
    options: [{
      value: '이름',
      label: '이름'
    }, {
      value: '댓글내용',
      label: '댓글내용'
    }],
    tableData: [
      {num: '20', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '19', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '18', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '17', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '16', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '15', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '14', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '13', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '12', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'},
      {num: '11', content: '등록한 댓글 내용을 표시합니다.', name: '홍길동', date: 'YYYY.MM.DD HH:MM'}
    ],
    radio: '1',
    input1: '',
    value: ''
  })
}
</script>
<style scoped>
</style>
