<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>콘텐츠 관리</h3>
            <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="8">
                    야구
                </el-col>
                <el-col :span="4">콘텐츠ID</el-col>
                <el-col :span="8">Financial</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">등록일시</el-col>
                <el-col :span="8">YYYY.MM.DD HH:MM</el-col>
                <el-col :span="4">등록자</el-col>
                <el-col :span="8">홍길동</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">구분</el-col>
                <el-col :span="8">유튜브형</el-col>
                <el-col :span="4">상태</el-col>
                <el-col :span="8">예약대기 (예약일 YYYY.MM.DD)</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">CP명</el-col>
                <el-col :span="8">네셔널 지오그래픽</el-col>
                <el-col :span="4">조회</el-col>
                <el-col :span="8">000회</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">공유</el-col>
                <el-col :span="8">000회</el-col>
                <el-col :span="4">좋아요</el-col>
                <el-col :span="8">000회</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">Line명 (기본)</el-col>
                <el-col :span="20">Line명 (전시중)</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">Line명 (추가1)</el-col>
                <el-col :span="20">Line명</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">제목</el-col>
                <el-col :span="20">콘텐츠 제목</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">본문</el-col>
                <el-col :span="20">CMS에서 등록한 콘텐츠 출력</el-col>
            </el-row>
            <el-row class="line-name">
                <el-col :span="4">대표이미지</el-col>
                <el-col :span="20" class="table">
                    <el-button @click="imgViewPop = true"><img src="@/assets/test.png"></el-button>
                </el-col>
            </el-row>
             <el-row class="line-name">
                <el-col :span="4">썸네일이미지</el-col>
                <el-col :span="20" class="table">
                    <img src="@/assets/test.png">
                    <img src="@/assets/test.png">
                    <img src="@/assets/test.png">
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">태그</el-col>
                <el-col :span="20">힐링, ASMR, 영상, 불면증, 감성, 수면</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">링크 URL</el-col>
                <el-col :span="20">구매하기 <a href="http://www.auction.co.kr/itempage/10101010">http://www.auction.co.kr/itempage/10101010</a></el-col>
            </el-row>
            <el-row>
                <el-col :span="4">More Info</el-col>
                <el-col :span="20">주소: 서울시 영등포구 여의도동 여의도우체국<br>페이스북 : <a href="http://www.auction.co.kr/itempage/10101010">http://www.auction.co.kr/itempage/10101010</a></el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <p class="tit-sub">댓글 (00,000개)</p>
            <el-table :data="tableData">
                <el-table-column prop="contants" label="내용" align="left"></el-table-column>
                <el-table-column prop="name" label="이름" width="120">
                    <template slot-scope="scope">
                        <router-link
                        v-bind:to="{}">
                            {{scope.row.name}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="등록일시" width="160"></el-table-column>
                <el-table-column prop="admin" label="관리" width="120">
                  <el-button @click="commentHidden= true">공개</el-button>
                </el-table-column>
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
        <!-- 콘텐츠 비공개 : Start -->
        <el-dialog
            :visible.sync="contantsHidden"
            width="30%"
            center>
            <span>해당 콘텐츠를 비공개로 전환하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
              <el-button @click="contantsHidden = false">닫기</el-button>
            </span>
            <el-dialog width="30%" :visible.sync="contantsHiddenInner" append-to-body>
              <span>이 콘텐츠는 Discover에 전시중이므로,  비공개로 전환할 수 없습니다.<br />전시 관리에서 변경하세요.</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="contantsHiddenInner = false">확인</el-button>
              </span>
            </el-dialog>
        </el-dialog>
        <!-- 콘텐츠 비공개 : End -->
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
        <!-- 이미지 보기 : Start -->
        <el-dialog
            :visible.sync="imgViewPop"
            width="30%"
            center>
            <span><img src="@/assets/test.png"></span>
        </el-dialog>
        <!-- 이미지 보기 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    imgViewPop: false,
    contantsHidden: false,
    contantsHiddenInner: false,
    commentHidden: false,
    tableData: [
      {contants: '제목을 선택하면 상세화면으로 이동합니다', name: '홍길동', date: '2019.00.00 HH:MM'},
      {contants: '제목을 선택하면 상세화면으로 이동합니다', name: '홍길동', date: '2019.00.00 HH:MM'}
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
.line-name .el-button{border:none; padding:0 0;}
</style>
