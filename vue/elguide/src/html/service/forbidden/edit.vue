<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>금칙어 관리</h3>
            <el-row>
                <el-col :span="4" class="required">금칙어</el-col>
                <el-col :span="10">
                    <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">적용 대상</el-col>
                <el-col :span="10">
                    <el-checkbox>이름</el-checkbox>
                    <el-checkbox>댓글</el-checkbox>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button @click="banterEdit = true">등록</el-button>
                <el-button>취소</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 적용 대상 지정 : Start -->
        <el-dialog
            :visible.sync="targetEdit"
            width="30%"
            center>
            <span>적용 대상을 지정하세요.</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="targetEdit = false">확인</el-button>
            </span>
        </el-dialog>
        <!-- 적용 대상 지정 : End -->
        <!-- 금칙어 입력 : Start -->
        <el-dialog
            :visible.sync="banterEdit"
            width="30%"
            center>
            <span>금칙어를 입력하세요.</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="banterEdit = false">확인</el-button>
            </span>
        </el-dialog>
        <!-- 금칙어 입력 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    targetEdit: false,
    banterEdit: false,
    input: ''
  })
}
</script>
<style scoped>
</style>
