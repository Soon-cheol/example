<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>서비스 점검 팝업</h3>
            <el-row>
                <el-col :span="4">팝업명</el-col>
                <el-col :span="8">
                  회원 DB 정리 공지
                </el-col>
                <el-col :span="4">대상OS</el-col>
                <el-col :span="8">
                  iOS
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">전시상태</el-col>
                <el-col :span="20">
                  전시중
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">최초등록</el-col>
                <el-col :span="8">
                    YYYY.MM.DD 홍길순
                </el-col>
                <el-col :span="4">최종수정</el-col>
                <el-col :span="8">
                    YYYY.MM.DD 홍길순
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">공지내용</el-col>
                <el-col :span="20" class="txt-cont">안녕하세요 Lifeplus입니다.<br><br>원활한 서비스를 위해 서비스 점검을 진행할 예정이오니 이용에 참고 하시기 바랍니다.<br>감사합니다.<br><br>- 점검 대상 : 회원 DB<br>- 점검 시간 : 2019년 11월 10일 09:00~18:00 (GMT+09:00)<br><br>* 작업상황에 따라 시간이 지연될 수 있습니다.
                </el-col>
            </el-row>
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button><el-button @click="centerDisplayVisible = true">전시종료</el-button></div>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 전시 종료 : Start -->
        <el-dialog
            :visible.sync="centerDisplayVisible"
            width="30%"
            center>
            <span>해당 점검 팝업의 전시를 종료하시겠습니까?<br />(전시대기 상태는 전시를 취소합니다)</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="centerDisplayVisible = false">종료</el-button>
            <el-button @click="centerDisplayVisible = false">닫기</el-button>
            </span>
        </el-dialog>
        <!-- 전시 종료 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    centerDisplayVisible: false
  })
}
</script>
<style scoped>
/* .line-name .el-col {height:90px} */
</style>
