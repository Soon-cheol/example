<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>회원 그룹 관리</h3>
      <el-row>
        <el-col :span="4">그룹명</el-col>
        <el-col :span="10">
          <el-input placeholder="" v-model="input1" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">등록제한</el-col>
        <el-col :span="10">
          <el-radio v-model="radio" label="1">1개 코드에 다 계정 등록</el-radio>
          <el-radio v-model="radio" label="2">1개 코드에 1 계정 등록</el-radio>
          <!-- '1개 코드에 1 계정 등록' 라디오버튼이 체크되었을땐 인풋 영역 활성화 처리되어야 함 -->
          <el-input placeholder="" v-model="input3" :disabled="true" class="width10" clearable></el-input> 개 코드 생성
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">등록코드</el-col>
        <el-col :span="10">
          <el-radio v-model="radio" label="1">자동생성</el-radio>
          <el-radio v-model="radio" label="2">직접입력</el-radio>
          <!-- '직접입력' 라디오버튼이 체크되었을땐 인풋 영역 활성화 처리되어야 함 -->
          <el-input placeholder="영문/숫자" v-model="input4" :disabled="true" class="width25" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">적용기간</el-col>
        <el-col :span="20">
          <el-date-picker
            class="width40"
            v-model="value"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
          <el-radio v-model="radio2" label="1" class="ml-10">종료일 없음</el-radio>
          <!-- '종료일 없음' 라디오버튼이 체크되었을때 인풋 영역 비활성화 처리되어야 함 -->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">설명</el-col>
        <el-col :span="20">
          <el-input
              type="textarea"
              class="width100"
              :autosize="{ minRows: 4, maxRows: 100}"
              placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
              v-model="textarea2">
          </el-input>
        </el-col>
      </el-row>
    </div>
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
    radio2: '',
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  }),
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style scoped>
.ml-10 {margin-left:10px;}
</style>
