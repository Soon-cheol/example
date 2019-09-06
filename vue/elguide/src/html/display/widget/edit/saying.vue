<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>오늘의 명언 관리</h3>
      <el-row>
        <el-col :span="4" class="required">명언</el-col>
        <el-col :span="20" align="right">
          <el-input
            type="textarea"
            class="width100"
            maxlength="80"
            :autosize="{ minRows: 1, maxRows: 100}"
            placeholder=""
            v-model="textarea1"
            show-word-limit
            >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">출처</el-col>
        <el-col :span="20">
          <el-input placeholder="" v-model="input2" class="width40" clearable></el-input>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="btn-area">
        <el-button>등록</el-button>
        <el-button>취소</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    textarea1: '',
    input1: '',
    input2: ''
  })
}
</script>
