<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>공지사항</h3>
            <el-row>
                <el-col :span="4" class="required">수신 대상</el-col>
                <el-col :span="20">
                    <div class="el-col-div"><el-radio v-model="radio1" label="1">전체 회원</el-radio></div>
                    <div class="el-col-div">
                      <el-radio v-model="radio1" label="3">대상 지정</el-radio>
                      <div class="check-list">
                        <div class="el-col-div"><div>성별 구분</div><div><el-checkbox label="남성" name="type"></el-checkbox><el-checkbox label="여성" name="type"></el-checkbox></div></div>
                        <div class="el-col-div"><div>커플 구분</div><div><el-checkbox label="싱글" name="type"></el-checkbox><el-checkbox label="커플" name="type"></el-checkbox></div></div>
                        <div class="el-col-div"><div>자녀 구분</div><div><el-checkbox label="없음" name="type"></el-checkbox><el-checkbox label="있음" name="type"></el-checkbox></div></div>
                      </div>
                    </div>
                    <div class="el-col-div el-col-year">
                      <el-radio v-model="radio1" label="4">출생 년도</el-radio>
                      <div class=" width60">
                        <el-date-picker
                          v-model="value"
                          type="daterange"
                          range-separator="To"
                          start-placeholder="Start date"
                          end-placeholder="End date">
                        </el-date-picker>
                      </div>
                    </div>
                    <div class="el-col-div el-col-file">
                      <el-radio v-model="radio1" label="5">엑셀파일 업로드</el-radio>
                      <input type="file">
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">제목</el-col>
                <el-col :span="20">
                    <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">메시지 본문</el-col>
                <el-col :span="20">
                    <el-input type="textarea" :rows="4" v-model="textarea" class="width100"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">발송시간</el-col>
                <el-col :span="20" class="send-time">
                  <div>
                    <el-radio v-model="radio" label="1">예약
                      <el-date-picker v-model="value2" type="date" placeholder="YYYY.MM.DD" class="select-date"></el-date-picker>
                    </el-radio>
                    <el-select v-model="value" class="select-time width8" clearable placeholder="08">
                      <el-option v-for="item in options" :key="item.value"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    시
                  </div>
                  <div><el-radio v-model="radio" label="2">즉시</el-radio></div>
                  <div><el-radio v-model="radio" label="3">발송 취소</el-radio></div>
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
    radio1: '',
    radio2: '',
    radio3: '',
    value: '',
    value2: '',
    value4: '',
    textarea: '',
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }]
  })
}
</script>
<style scoped>
.check-list{
  overflow: hidden;
  margin: -26px 0 0 162px;
}
.check-list>.el-col-div{
  overflow: hidden;
}
.check-list>.el-col-div>div{
  float:left;
}
.check-list>.el-col-div>div:first-child{
  margin-right:50px;
}
.el-col-year{
  overflow: hidden;
}
.el-col-file>*,
.el-col-year>*{
  float:left;
}
.el-col-div > label{
  display: inline-block;
  width:130px;
}
.el-col-file>label{
  margin-top:6px
}
.el-col-year>label{
  margin-top:12px
}
.select-date{
  margin-left: 20px;
}
.select-time{
  margin-left: 40px;
}
.send-time>div+div{
  margin-top:10px
}
</style>
