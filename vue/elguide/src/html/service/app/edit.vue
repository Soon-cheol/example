<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>App 버전 관리</h3>
            <el-row>
                <el-col :span="4">OS</el-col>
                <el-col :span="20">
                    <el-radio v-model="radio" label="1">iOS</el-radio>
                    <el-radio v-model="radio" label="2">Android</el-radio>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">필수여부</el-col>
                <el-col :span="20">
                    <el-radio v-model="radio" label="1">선택</el-radio>
                    <el-radio v-model="radio" label="2">필수</el-radio>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">버전</el-col>
                <el-col :span="20">
                  <input type="number" class="el-input__inner inputNumber" maxlength="3" @keyup="keyPress">
                  <span class="mgl4">.</span>
                  <input type="number" class="el-input__inner inputNumber" maxlength="3" @keyup="keyPress">
                  <span class="mgl4">.</span>
                  <input type="number" class="el-input__inner inputNumber" maxlength="3" @keyup="keyPress">
                  <p class="txt-point mgt8"> 999 이하 숫자만 입력 가능합니다. (우측 키패드 사용 불가)</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">업데이트 내역</el-col>
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
        <!-------------------- Dialog : Start -------------------->
        <!-------------------- Dialog : End -------------------->
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
    textarea: '',
    input: '',
    radio: '',
    value: '',
    value2: ''
  }),
  methods: {
    keyPress: function (e) {
      let t = e.target.value
      let len = t.length
      if (len + 1 > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength)
      } else {
        if (e.which > 47 && e.which < 58) {
        } else if (e.which === 8 || e.which === 12 || e.which === 13 || e.which === 27 || e.which === 45) {
        } else {
          alert('숫자만 입력 가능합니다.')
          // let len2 = t.length;
          e.target.value = ''
          return false
        }
      }
    }
  }
}
</script>
