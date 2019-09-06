<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>공지사항</h3>
        <el-row>
          <el-col :span="4">구분</el-col>
          <el-col :span="10">
            <!-- 19.07.09 구분값 셀렉트박스 삭제 및 수정 : start -->
            <!-- <el-select v-model="value" clearable placeholder="선택하세요">
              <el-option v-for="item in options" :key="item.value"
                :value="item.value">
              </el-option>
            </el-select> -->
            공지사항
            <!-- 19.07.09 구분값 셀렉트박스 삭제 및 수정 : end -->
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">제목</el-col>
          <el-col :span="20">
            <el-input placeholder="" v-model="input" clearable></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">전시</el-col>
          <el-col :span="20">
            <!-- 2019.07.15 해당영역 삭제 : start -->
            <!-- <el-radio v-model="radio" label="1">즉시</el-radio>
            <el-radio v-model="radio" label="2">예약</el-radio> -->
            <!-- 2019.07.15 해당영역 삭제 : end -->
            <el-date-picker v-model="value2" type="datetime" placeholder="Select date and time"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">입력방식 선택</el-col>
          <el-col :span="20">
            <el-radio v-model="radio1" label="1">텍스트 입력</el-radio>
            <el-radio v-model="radio1" label="2">외부 페이지 삽입</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">본문입력</el-col>
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
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-row>
          <el-col :span="4">구분</el-col>
          <el-col :span="10">
            <el-select v-model="value" clearable placeholder="선택하세요">
              <el-option v-for="item in options" :key="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">제목</el-col>
          <el-col :span="20">
            <el-input placeholder="" v-model="input" clearable></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">전시</el-col>
          <el-col :span="20">
            <!-- 2019.07.15 해당영역 삭제 : start -->
            <!-- <el-radio v-model="radio" label="1">즉시</el-radio>
            <el-radio v-model="radio" label="2">예약</el-radio>  -->
            <!-- 2019.07.15 해당영역 삭제 : end -->
            <el-date-picker v-model="value2" type="datetime" placeholder="Select date and time"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">입력방식 선택</el-col>
          <el-col :span="20">
            <el-radio v-model="radio2" label="1">텍스트 입력</el-radio>
            <el-radio v-model="radio2" label="2">외부 페이지 삽입</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">외부페이지 삽입</el-col>
          <el-col :span="20">
            <el-input placeholder="" v-model="input1">
              <template slot="prepend">Http://</template>
            </el-input>
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
    options: [{
      value: '공지사항',
      label: '공지사항'
    }, {
      value: '당첨자발표',
      label: '당첨자발표'
    }],
    textarea: '',
    input: '',
    input1: '',
    radio: '1',
    radio1: '1',
    radio2: '2',
    value: '',
    value2: ''
  })
}
</script>
<style scoped>
.el-date-editor.el-input{
  width:220px;
}
</style>
