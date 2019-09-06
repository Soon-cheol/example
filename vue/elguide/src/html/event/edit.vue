<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>이벤트 관리</h3>
      <el-row>
        <el-col :span="4" class="required">제목</el-col>
        <el-col :span="20">
          <p class="txt-point mgb10">입력하신 제목은 관리용이며, 사용자 화면에 노출되지 않습니다.</p>
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
        <el-col :span="4" class="required">참여제한</el-col>
        <el-col :span="20">
          <el-radio v-model="radio1" label="1">제한 없음</el-radio>
          <el-radio v-model="radio1" label="2">일 1회</el-radio>
          <el-radio v-model="radio1" label="3">진행기간 중 1회</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">이벤트 진행기간</el-col>
        <el-col :span="20">
          <!-- 19.07.03 기획서 변경. 달력 시/분 추가 : start -->
          <el-date-picker v-model="value2" type="datetime" placeholder="YYYY.MM.DD" class="width20"></el-date-picker>
          <el-select v-model="value5" clearable placeholder="00" class="width8">
            <el-option v-for="item in options4" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>시
          <el-select v-model="value5" clearable placeholder="00" class="width8">
            <el-option v-for="item in options4" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>분
          <span class="wave">~</span>
          <el-date-picker v-model="value3" type="datetime" placeholder="YYYY.MM.DD" class="width20"></el-date-picker>
          <el-select v-model="value5" clearable placeholder="00" class="width8">
            <el-option v-for="item in options4" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>시
          <el-select v-model="value5" clearable placeholder="00" class="width8">
            <el-option v-for="item in options4" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>분
          <!-- 19.07.03 기획서 변경. 달력 시/분 추가 : end -->
          <div class="radio-area mgt10">
            <el-radio v-model="radio2" label="1">기간 지정</el-radio>
            <el-radio v-model="radio2" label="2">진행 취소</el-radio>
          </div>
        </el-col>
      </el-row>
      <!-- 19.07.03 기획서 변경. '배너 노출시작' 카테고리 목록 추가 : start -->
      <el-row>
        <el-col :span="4" class="required">배너 노출시작</el-col>
        <el-col :span="20">
          <el-col :span="4">
            <el-date-picker v-model="value9" type="datetime" placeholder="YYYY.MM.DD"></el-date-picker>
          </el-col>
          <el-select v-model="value5" clearable placeholder="00" class="width10">
            <el-option v-for="item in options4" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>시
          <el-select v-model="value5" clearable placeholder="00" class="width10">
            <el-option v-for="item in options4" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>분
        </el-col>
      </el-row>
      <!-- 19.07.03 기획서 변경. '배너 노출시작' 카테고리 목록 추가 : end -->
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
      <!-- 19.07.03 기획서 변경. '설문 설정' 카테고리 목록 추가 : end -->
      <el-row>
        <el-col :span="4">설문 설정</el-col>
        <el-col :span="20">
          문항 선택&nbsp;&nbsp;&nbsp;
          <el-select v-model="value4" clearable placeholder="문항수">
            <el-option v-for="item in options2" :key="item.value"
                :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="imgViewPop = true" size="large">생성</el-button>
          <div class="btn-area left">
            1번 문항&nbsp;&nbsp;&nbsp;
            <el-button type="info" icon="el-icon-minus" size="large"></el-button>
            <el-button type="info" icon="el-icon-plus" size="large"></el-button>
          </div>
          <div class="radio-area mgt10">
            <el-radio v-model="radio3" label="1">객관식</el-radio>
            <el-radio v-model="radio3" label="2">주관식</el-radio>
          </div>
          <div class="btn-area left">
            2번 문항&nbsp;&nbsp;&nbsp;
            <el-button type="info" icon="el-icon-minus" size="large"></el-button>
            <el-button type="info" icon="el-icon-plus" size="large"></el-button>
          </div>
          <div class="radio-area mgt10">
            <el-radio v-model="radio3" label="1">객관식</el-radio>
            <el-radio v-model="radio3" label="2">주관식</el-radio>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">Html 등록</el-col>
        <el-col :span="20" class="link-url">
          <el-input placeholder="" v-model="input1" class="width50">
            <template slot="prepend">Http://</template>
          </el-input>
          <el-button size="large">URL 체크</el-button>
        </el-col>
      </el-row>
      <!-- 19.07.03 기획서 변경. '설문 설정' 카테고리 목록 추가 : end -->
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <!-- <div class="temp-cont">
      <el-row>
        <el-col :span="4">당첨공지관리</el-col>
        <el-col :span="20" class="link-url">
          <el-button size="large" @click="targetlinkselectPop03 = true">공지게시글 선택</el-button>
          선택한 게시글 제목 표시
        </el-col>
      </el-row>
    </div> -->
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="btn-area right">
        <el-button @click="winnerPop = true">당첨자 발표</el-button>
      </div>
      <div class="btn-area">
        <el-button>등록</el-button>
        <el-button>취소</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- 이미지 보기 : Start -->
    <el-dialog :visible.sync="imgViewPop" width="30%" center>
      <span><img src="@/assets/test.png"></span>
      <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="imgViewPop = false">확인</el-button>
        <el-button @click="imgViewPop = false">취소</el-button>
      </span>
    </el-dialog>
    <!-- 이미지 보기 : End -->
    <!-- 당첨자 발표 팝업 : Start -->
    <el-dialog
      title="당첨자 발표"
      :visible.sync="winnerPop"
      append-to-body>
      <el-row>
        <el-col :span="4">구분</el-col>
        <el-col :span="20">
          당첨자 발표
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">제목</el-col>
        <el-col :span="20">
          <el-input placeholder="" v-model="input" class="width80" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">전시</el-col>
        <el-col :span="20">
          <el-date-picker v-model="value2" type="datetime" placeholder="YYYY.MM.DD"></el-date-picker>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">입력방식 선택</el-col>
        <el-col :span="20">
          <el-radio v-model="radio3" label="1">텍스트 입력</el-radio>
          <el-radio v-model="radio3" label="2">외부 페이지 삽입</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">본문입력</el-col>
        <el-col :span="20">
          <el-input type="textarea" :rows="4" v-model="textarea" class="width100"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="useInquiryModify = false">등록</el-button>
        <el-button @click="useInquiryModify = false">취소</el-button>
      </span>
    </el-dialog>
    <!-- 당첨자 발표 팝업 : End -->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    winnerPop: false,
    targetlinkselectPop03: false,
    termsselectPop: false,
    centerDialogVisible: false,
    imgViewPop: false,
    checked: true,
    options2: [{
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
    options4: [{
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
    tableData4: [
      {num: '20', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '19', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '18', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '17', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '16', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '15', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '14', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '13', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '12', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '11', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'}
    ],
    num: 1,
    textarea: '',
    textarea1: '',
    textarea2: '',
    textarea3: '',
    textarea4: '',
    value: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value9: '',
    radio: '',
    radio1: '1',
    radio2: '1',
    radio3: '1',
    radio4: '1',
    input: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: ''
  }),
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
.link-url{
    overflow: hidden;
}
.link-url > div{
    float:left;
}
.link-url > div + div{
    margin-left: 2px;
}
.el-row .table>div.date-picker{
    display: inline-block;
    margin: 0 20px 0 -10px;
}
.tooltip-type01{background:none; border:none; padding:0;}
.input-type01{width:80px; display:inline-block;}
.input-type02{width:120px; display:inline-block;}
.delete.delete-type01{background:none; border:none; padding:0;}
.el-button--danger{background:none;}
</style>
