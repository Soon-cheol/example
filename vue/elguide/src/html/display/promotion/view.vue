<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>프로모션 관리</h3>
      <el-row>
        <el-col :span="4">프로모션명</el-col>
        <el-col :span="20">
            Lifeplus 앱 런칭 기념 프로모션
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">구분</el-col>
        <el-col :span="8">
            Today
        </el-col>
        <el-col :span="4">전시기간</el-col>
        <el-col :span="8">
            YYYY.MM.DD ~ YYYY.MM.DD
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">최초등록</el-col>
        <el-col :span="8">
            YYYY.MM.DD HH:MM 홍길동
        </el-col>
        <el-col :span="4">최종수정</el-col>
        <el-col :span="8">
            YYYY.MM.DD HH:MM 홍길동
        </el-col>
      </el-row>
      <el-row class="line-name">
        <el-col :span="4">이미지</el-col>
        <el-col :span="20" class="table">
            <img src="@/assets/test.png">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">타겟링크</el-col>
        <el-col :span="20"><a href="http://www.nave.com" target="_blank">http://www.nave.com</a></el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="btn-area cell">
        <div><el-button>목록</el-button></div>
        <div><el-button>수정</el-button><el-button @click="contantsHidden = true">전시종료</el-button></div>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-------------------- Dialog : Start -------------------->
    <!-- 프로모션 전시종료 : Start -->
    <el-dialog
        :visible.sync="contantsHidden"
        width="30%"
        center>
        <span>해당 프로모션의 전시를 종료하시겠습니까?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
          <el-button @click="contantsHidden = false">취소</el-button>
        </span>
        <el-dialog width="30%" :visible.sync="contantsHiddenInner" append-to-body>
          <span>해당 프로모션의 전시를 종료했습니다.</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="contantsHiddenInner = false">확인</el-button>
          </span>
        </el-dialog>
    </el-dialog>
    <!-- 프로모션 전시종료 : End -->
    <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
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
