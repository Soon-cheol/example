<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Push 관리</h3>
            <el-row class="line-name">
                <el-col :span="4">제목</el-col>
                <el-col :span="20">Push 메시지 제목 표시</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">수신 대상</el-col>
                <el-col :span="20">전체 회원</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">발송 일시</el-col>
                <el-col :span="20">YYYY.MM.DD HH:MM 발송예약</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">메시지 내용</el-col>
                <el-col :span="20">푸시 메시지 발송 메시지를 표시합니다.</el-col>
            </el-row>
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button></div>
            </div>
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

  })
}
</script>
<style scoped>
</style>
