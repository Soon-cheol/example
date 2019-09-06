<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>약관 관리</h3>
            <el-row>
                <el-col :span="4" class="required">약관명</el-col>
                <el-col :span="20">
                  개인정보수집 및 이용 동의
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">현재버전</el-col>
                <el-col :span="20">1.01(현재) -> 1.02(수정)</el-col>
            </el-row>
            <!-- <el-row>
                <el-col :span="4" class="required">구분</el-col>
                <el-col :span="20">
                    필수약관
                </el-col>
            </el-row> -->
            <!-- <el-row>
                <el-col :span="4">용도</el-col>
                <el-col :span="20">
                  이벤트 참여(마더브레인)
                </el-col>
            </el-row> -->
            <el-row>
                <el-col :span="4">전시상태</el-col>
                <el-col :span="20">
                    전시중
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">전시예약</el-col>
                <el-col :span="20">
                    <el-date-picker v-model="value3" type="datetime" placeholder="YYYY.MM.DD" class="width20"></el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">약관파일 URL</el-col>
                <el-col :span="18">
                    <el-input placeholder="" v-model="input1" class="width50">
                        <template slot="prepend">Http://</template>
                    </el-input>
                    <el-button size="large">URL 체크</el-button>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button>수정</el-button>
                <el-button>취소</el-button>
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
    radio: '',
    radio1: '1',
    input: '',
    input1: '',
    value3: ''
  })
}
</script>
<style scoped>
</style>
