<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>위젯 관리</h3>
      <el-row>
        <el-col :span="4" class="required">위젯명</el-col>
        <el-col :span="10">
          <el-input placeholder="" v-model="input1" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">설명</el-col>
        <el-col :span="20">
          <el-input
              type="textarea"
              class="width100"
              :autosize="{ minRows: 1, maxRows: 100}"
              placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
              v-model="textarea2">
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">상태변경</el-col>
        <el-col :span="10">
          <el-radio v-model="radio" label="1">활성</el-radio>
          <el-radio v-model="radio" label="2">비활성</el-radio>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="btn-area">
        <el-button @click="registConfirmPop = true">확인</el-button>
        <el-button>취소</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- 등록 확인 : Start -->
    <el-dialog
      :visible.sync="registConfirmPop"
      width="20%"
      center>
      <span>변경사항을 저장했습니다.</span>
      <span slot="footer" class="dialog-footer">
      <el-button type="main" @click="registConfirmPop = false">확인</el-button>
      </span>
    </el-dialog>
    <!-- 등록 확인 : End -->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    registConfirmPop: false,
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    textarea2: '',
    value: '',
    radio: '1',
    input1: ''
  })
}
</script>
<style scoped>
.ml-10 {margin-left:10px;}
</style>
