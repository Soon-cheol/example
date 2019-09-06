<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
          <h3>서비스 점검 팝업</h3>
          <el-row>
              <el-col :span="4">팝업명</el-col>
              <el-col :span="20">
                <el-input placeholder="" v-model="input" clearable></el-input>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="4">대상OS</el-col>
              <el-col :span="20">
                  <el-radio v-model="radio" label="1">전체</el-radio>
                  <el-radio v-model="radio" label="2">iOS</el-radio>
                  <el-radio v-model="radio" label="3">Android</el-radio>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="4">전시일정</el-col>
              <el-col :span="20">
                <el-radio v-model="radio2" label="1">즉시</el-radio>
                <el-radio v-model="radio2" label="2">예약</el-radio>
                <el-date-picker
                    class="single-pipcker"
                    v-model="value1"
                    type="date"
                    placeholder="YYYY.MM.DD">
                </el-date-picker>
                <el-select v-model="value5" clearable placeholder="00" class="width10">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>시
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="4">공지내용</el-col>
              <el-col :span="20">
                  <el-input
                      type="textarea"
                      class="width100"
                      :autosize="{ minRows: 3, maxRows: 100}"
                      placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
                      v-model="textarea">
                  </el-input>
              </el-col>
          </el-row>
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
    textarea: '',
    input: '',
    radio: '1',
    radio2: ''
  })
}
</script>
<style scoped>
.single-pipcker{width:200px;}
</style>
