<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Line 관리</h3>
            <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="20">
                    재테크
                </el-col>
            </el-row>
            <el-row class="line-name">
                <el-col :span="4">Line 명</el-col>
                <el-col :span="20" class="table">
                    <img src="@/assets/test.png"> 금주의 EPL 리뷰
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">생성일</el-col>
                <el-col :span="8">2019.05.29</el-col>
                <el-col :span="4">구독자</el-col>
                <el-col :span="8">1,000</el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="heading-option">
                <h3>등록 콘텐츠</h3>
                <div class="option">
                    <el-button>콘텐츠 추가</el-button>
                </div>
            </div>
            <el-table :data="tableData" :default-sort="{prop: 'contants, subscriber'}">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="category2" label="카테고리" width="120"></el-table-column>
                <el-table-column prop="division" label="구분" width="140"></el-table-column>
                <el-table-column prop="lineName" label="제목" align="left"></el-table-column>
                <el-table-column prop="visible" label="상태" width="150" ></el-table-column>
                <el-table-column prop="date" label="등록일" width="150" ></el-table-column>
            </el-table>
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button><el-button @click="contantsHidden = true">비공개 전환</el-button></div>
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
        <!-- 댓글 비공개 : Start -->
        <el-dialog
            :visible.sync="contantsHidden"
            width="30%"
            center>
            <span>해당 Line과 소속 콘텐츠를 비공개로 전환하시겠습니까? </span>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
              <el-button @click="contantsHidden = false">취소</el-button>
            </span>
            <el-dialog width="30%" :visible.sync="contantsHiddenInner" append-to-body>
              <span>현재 Discover에 전시 중인 Line은 비공개로 전환할 수 없습니다.</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="contantsHiddenInner = false">확인</el-button>
              </span>
            </el-dialog>
        </el-dialog>
        <!-- 댓글 비공개 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    tableData: [
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '1', subscriber: '1', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '2', subscriber: '2', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '3', subscriber: '3', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '4', subscriber: '4', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '5', subscriber: '5', date: '2019.05.29', visible: '전시대기'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
<style scoped>
/* .line-name .el-col {height:90px} */
.line-name .el-col img {max-width: 100px;}
</style>
