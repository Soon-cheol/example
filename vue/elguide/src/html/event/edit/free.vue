<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>이벤트 등록</h3>
      <el-row>
        <el-col :span="4" class="required">제목</el-col>
        <el-col :span="20">
          <el-input
            type="textarea"
            class="width100"
            maxlength="82"
            :autosize="{ minRows: 1, maxRows: 100}"
            placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
            v-model="textarea1"
            show-word-limit
            >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">이벤트 진행기간</el-col>
        <el-col :span="10">
          <el-date-picker
            v-model="value2"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
          <div class="radio-area">
            <el-radio v-model="radio2" label="1">기간 지정</el-radio>
            <el-radio v-model="radio2" label="2">진행 취소</el-radio>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">썸네일 이미지
          <el-tooltip class="item" effect="dark" placement="bottom-start">
            <div slot="content"><strong>썸네일 이미지</strong>는 이벤트 목록 화면에 표시되는 이미지를 말합니다</div>
            <el-button type="info" icon="el-icon-question" class="tooltip-type01"></el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="20">
          <div class="input-thumenail">사이즈1 ( 000 X 000 )<input type="file"><el-button @click="imgViewPop = true">이미지 보기</el-button></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">Html 파일경로</el-col>
        <el-col :span="20">
          <el-input placeholder="" v-model="input1" class="width78">
            <template slot="prepend">Http://</template>
          </el-input>
          <el-button size="large ver-align">URL 체크</el-button>
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
    <!-- 선택하기 리스트 삭제 : Start -->
    <el-dialog
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>정말 삭제하시겠습니까?</span>
        <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="centerDialogVisible = false">확인</el-button>
        <el-button @click="centerDialogVisible = false">취소</el-button>
        </span>
    </el-dialog>
    <!-- 선택하기 리스트 삭제 : End -->
    <!-- 약관 선택하기 : Start -->
    <el-dialog title="약관 선택" :visible.sync="termsselectPop">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-row>
          <el-col :span="4">구분</el-col>
          <el-col :span="20">
            <el-radio v-model="radio4" label="1">전체</el-radio>
            <el-radio v-model="radio4" label="2">필수약관</el-radio>
            <el-radio v-model="radio4" label="3">선택약관</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">약관명</el-col>
          <el-col :span="20">
            <el-input placeholder="검색어를 입력하세요" v-model="input8" class="width50" clearable></el-input>
          </el-col>
        </el-row>
        <div class="btn-area">
          <el-button size="large">검색</el-button>
            <el-button size="large">초기화</el-button>
        </div>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-table :data="tableData3">
          <el-table-column prop="num" label="번호" width="60"></el-table-column>
          <el-table-column prop="category1" label="구분" width="150"></el-table-column>
          <el-table-column prop="title" label="약관명" align="left"> </el-table-column>
          <el-table-column prop="category2" label="용도" align="left" width="400"></el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
      </div>
      <!-- temp-cont : End -->
    </el-dialog>
    <!-- 약관 선택하기 : End -->
    <!-- 태그 선택하기 : Start -->
    <el-dialog title="태그 선택" :visible.sync="tagSelectPop">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <el-row>
              <el-col :span="4">태그 검색</el-col>
              <el-col :span="20" class="table">
                  <el-input v-model="input9" class="width50" clearable></el-input>
                  <el-button size="large">검색</el-button>
              </el-col>
          </el-row>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <p class="tit-sub">검색결과 (0,000건)</p>
          <el-row>
              <el-col :span="4">선택한 태그</el-col>
              <el-col :span="20">
                  <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                  <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                  <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
              </el-col>
          </el-row>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <el-table :data="tableData">
              <el-table-column prop="num" label="번호" width="60"></el-table-column>
              <el-table-column width="60">
                  <el-checkbox></el-checkbox>
              </el-table-column>
              <el-table-column prop="line" label="태그" align="left"></el-table-column>
          </el-table>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
      </div>
      <el-button>선택완료</el-button>
      <!-- temp-cont : End -->
    </el-dialog>
    <!-- 태그 선택하기 : End -->
    <!-- 이미지 보기 : Start -->
    <el-dialog :visible.sync="imgViewPop" width="30%" center>
      <span><img src="@/assets/test.png"></span>
      <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="imgViewPop = false">확인</el-button>
        <el-button @click="imgViewPop = false">취소</el-button>
      </span>
    </el-dialog>
    <!-- 이미지 보기 : End -->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tagSelectPop: false,
    termsselectPop: false,
    centerDialogVisible: false,
    imgViewPop: false,
    checked: true,
    options: [{
      value: '1',
      label: '1'
    }, {
      value: '2',
      label: '2'
    }, {
      value: '3',
      label: '3'
    }, {
      value: '4',
      label: '4'
    }, {
      value: '5',
      label: '5'
    }, {
      value: '6',
      label: '6'
    }, {
      value: '7',
      label: '7'
    }, {
      value: '8',
      label: '8'
    }, {
      value: '9',
      label: '9'
    }, {
      value: '10',
      label: '10'
    }],
    tableData: [
      {num: '3', line: '서촌맛집'},
      {num: '2', line: '맛집멋집'},
      {num: '1', line: '미식'}
    ],
    tableData3: [
      {num: '10', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '9', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '8', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '7', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '6', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '5', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '4', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '5', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '2', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'},
      {num: '1', category1: '필수', title: '제3자개인정보동의약관', category2: '이벤트참여(대행사명)'}
    ],
    textarea1: '',
    textarea2: '',
    textarea3: '',
    textarea4: '',
    textarea5: '',
    textarea6: '',
    value: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    radio: '',
    radio1: '1',
    radio2: '1',
    radio3: '1',
    radio4: '1',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: ''
  })
}
</script>
<style scoped>
.tooltip-type01{background:none; border:none; padding:0;}
.input-type01{width:80px; display:inline-block;}
.input-type02{width:120px; display:inline-block;}
.delete.delete-type01{background:none; border:none; padding:0;}
.el-button--danger{background:none;}
.required:after{
  display: inline-block;
  content: '*';
  margin-left: 3px;
  color: #f36910;
  font-weight: 600;
}
.el-button.is-circle{
    padding: 5px;
    border: 0 none;
    color:#333
}
.ver-align{vertical-align:bottom;}
.link-url{
    overflow: hidden;
}
.link-url > div{
    float:left;
}
.link-url > div + div{
    margin-left: 2px;
}
.txt-point-type01{
  margin-bottom: 10px;
  margin-top: 0;
}
.radio-type01{
  width: 60px;
}
.radio-area{
  margin-top:10px;
}
.el-textarea{text-align:right !important;}
.el-input__count{background:none !important;}

</style>
