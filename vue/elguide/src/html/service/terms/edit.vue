<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>약관 관리</h3>
            <el-row>
                <el-col :span="4" class="required">약관명</el-col>
                <el-col :span="20">
                  <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row>
            <!-- <el-row>
                <el-col :span="4" class="required">구분</el-col>
                <el-col :span="20">
                    <el-radio v-model="radio" label="1">필수약관</el-radio>
                    <el-radio v-model="radio" label="2">선택약관</el-radio>
                </el-col>
            </el-row> -->
            <!-- <el-row>
                <el-col :span="4">용도</el-col>
                <el-col :span="20">
                  <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row> -->
            <el-row>
                <el-col :span="4" class="required">전시상태</el-col>
                <el-col :span="20">
                    <el-radio v-model="radio1" label="1">전시안함</el-radio>
                    <el-radio v-model="radio1" label="2">예약&nbsp;&nbsp;&nbsp;
                      <el-date-picker v-model="value3" type="datetime" placeholder="YYYY.MM.DD"></el-date-picker>
                    </el-radio>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">약관파일 URL</el-col>
                <el-col :span="20">
                    <el-input placeholder="" v-model="input1" class="width50">
                        <template slot="prepend">Http://</template>
                    </el-input>
                    <el-button size="large">URL 체크</el-button>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button>등록</el-button>
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
