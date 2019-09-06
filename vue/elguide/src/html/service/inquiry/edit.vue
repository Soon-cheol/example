<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>1:1문의 답변</h3>
            <el-row>
                <el-col :span="4">회원번호</el-col>
                <el-col :span="8">00000000</el-col>
                <el-col :span="4">회원명</el-col>
                <el-col :span="8">홍길동</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">문의일시</el-col>
                <el-col :span="20">YYYY.MM.DD HH:MM</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">단말정보</el-col>
                <el-col :span="20">어플리케이션 버전 4.0.0 / 기기모델 iphone / OS 버전 12.1.1</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">질문내용</el-col>
                <el-col :span="20">질문 내용을 이곳에 표시합니다.</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">자주쓰는 답변</el-col>
                <el-col :span="20">
                  해당 분류에 등록한 자주쓰는 답변을 검색합니다.
                  <div class="el-col-div">
                    <el-select v-model="value" clearable placeholder="전체" class="width14">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="input" placeholder="검색키워드를 입력하세요" :disabled="false" class="width30"></el-input>
                    <el-button size="large" @click="useInquiry = true">검색</el-button>
                  </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">답변내용</el-col>
                <el-col :span="20"><el-input type="textarea" :rows="4" v-model="textarea" class="width100"></el-input></el-col>
            </el-row>
            <div class="btn-area">
                <el-button @click="categoryEdit = true">등록</el-button>
                <el-button>취소</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 답변 등록 : Start -->
        <el-dialog
            :visible.sync="categoryEdit"
            width="30%"
            center>
            <span>해당 답변을 등록하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="categoryEdit = false">확인</el-button>
            <el-button @click="categoryEdit = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 답변 등록 : End -->
        <!-- CP 선택하기 : Start -->
        <el-dialog title="자주쓰는 답변" :visible.sync="useInquiry">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <el-select v-model="value" clearable placeholder="선택">
                <el-option v-for="item in options" :key="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
              <el-button size="large">검색</el-button>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <p class="tit-sub">OOOO으로 검색한 결과 (0,000건)</p>
              <el-row>
                  <el-col :span="4">번호</el-col>
                  <el-col :span="8">00000000</el-col>
                  <el-col :span="4">키워드</el-col>
                  <el-col :span="8">네이버, 앱스토어</el-col>
              </el-row>
              <el-row>
                  <el-col :span="4">답변내용</el-col>
                  <el-col :span="20">
                    <el-input type="textarea" :rows="4" v-model="textarea" class="width100"></el-input>
                    <div class="btn-area">
                        <el-button @click="useInquiry = false">답변선택</el-button>
                        <el-button @click="useInquiryModify = true">답변수정</el-button>
                    </div>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="4">번호</el-col>
                  <el-col :span="8">00000000</el-col>
                  <el-col :span="4">키워드</el-col>
                  <el-col :span="8">네이버, 앱스토어</el-col>
              </el-row>
              <el-row>
                  <el-col :span="4">답변내용</el-col>
                  <el-col :span="20">
                    <el-input type="textarea" :rows="4" v-model="textarea" class="width100"></el-input>
                    <div class="btn-area">
                        <el-button @click="useInquiry = false">답변선택</el-button>
                        <el-button @click="useInquiryModify = true">답변수정</el-button>
                    </div>
                  </el-col>
              </el-row>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
            <!-- temp-cont : End -->
            <!-- 선택하기 리스트 삭제 : Start -->
            <el-dialog
                title="자주쓰는 답변"
                :visible.sync="useInquiryModify"
                append-to-body>
                <el-row>
                    <el-col :span="4">키워드</el-col>
                    <el-col :span="20">
                      <el-input placeholder="키워드를 입력하세요" v-model="input" class="width80" clearable></el-input>
                      <el-button type="info" icon="el-icon-plus" @click="tagSelectPop = true" size="large"></el-button>
                      <div class="el-col-div">
                          <el-button  class="delete" plain  @click="centerDialogVisible = true">추가한 키워드</el-button>
                          <el-button  class="delete" plain  @click="centerDialogVisible = true">추가한 키워드</el-button>
                          <el-button  class="delete" plain  @click="centerDialogVisible = true">추가한 키워드</el-button>
                      </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">답변내용</el-col>
                    <el-col :span="20">
                      <el-input type="textarea" :rows="4" v-model="textarea" class="width100"></el-input>
                    </el-col>
                </el-row>
                <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="useInquiryModify = false">등록</el-button>
                <el-button @click="useInquiryModify = false">취소</el-button>
                </span>
                <el-dialog
                  :visible.sync="centerDialogVisible"
                  width="30%"
                  center
                  append-to-body>
                    <span>정말 삭제하시겠습니까?</span>
                    <span slot="footer" class="dialog-footer">
                    <el-button type="main" @click="centerDialogVisible = false">확인</el-button>
                    <el-button @click="centerDialogVisible = false">취소</el-button>
                  </span>
                </el-dialog>
            </el-dialog>
            <!-- 선택하기 리스트 삭제 : End -->
        </el-dialog>
        <!-- CP 선택하기 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    categoryEdit: false,
    useInquiry: false,
    useInquiryModify: false,
    centerDialogVisible: false,
    tableData: [
      {contants: '제목을 선택하면 상세화면으로 이동합니다', name: '홍길동', date: '2019.00.00 HH:MM'},
      {contants: '제목을 선택하면 상세화면으로 이동합니다', name: '홍길동', date: '2019.00.00 HH:MM'}
    ],
    options: [{
      value: '전체',
      label: '전체'
    }, {
      value: '키워드',
      label: '키워드'
    }, {
      value: '답변',
      label: '답변'
    }],
    value: '',
    radio: '1',
    input: '',
    input1: '',
    input2: '',
    textarea: ''
  })
}
</script>
