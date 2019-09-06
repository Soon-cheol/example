<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
          <h3>회원 관리</h3>
          <el-row>
            <el-col :span="4">회원번호</el-col>
            <el-col :span="8">
                00000000000
            </el-col>
            <el-col :span="4">이름</el-col>
            <el-col :span="8">
                홍길동
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">이메일</el-col>
            <el-col :span="8">
                emailed@email.co.kr
            </el-col>
            <el-col :span="4">상태</el-col>
            <el-col :span="8">
                정상
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">출생년도</el-col>
            <el-col :span="8">
                YYYY.MM
            </el-col>
            <el-col :span="4">성별</el-col>
            <el-col :span="8">
                남성
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">커플유무</el-col>
            <el-col :span="8">
                커플
            </el-col>
            <el-col :span="4">자녀유무</el-col>
            <el-col :span="8">
                없음
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">가입경로</el-col>
            <el-col :span="8">
                이메일
            </el-col>
            <el-col :span="4">가입일</el-col>
            <el-col :span="8">
                YYYY.MM.DD
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">Push 수신</el-col>
            <el-col :span="8">
                동의
            </el-col>
            <el-col :span="4">마케팅동의</el-col>
            <el-col :span="8">
                동의
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">최종로그인</el-col>
            <el-col :span="8">
                YYYY.MM.DD HH:MM
            </el-col>
            <el-col :span="4">로그인 OS</el-col>
            <el-col :span="8">
                iOS
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">관리자 메모</el-col>
            <el-col :span="20">
              <el-input
                type="textarea"
                class="width90"
                :autosize="{ minRows: 1, maxRows: 100}"
                placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
                v-model="textarea2">
              </el-input>
              <el-button class="el-button--large">저장</el-button>
            </el-col>
          </el-row>
          <div class="btn-area">
            <el-button @click="accountsuspended = true">계정 정지</el-button>
            <!-- 정지 상태 회원일 경우 : TBD
            <el-button>계정 복원</el-button>
            -->
          </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
          <div class="heading-option">
            <h3>댓글<span class="tit-sub">(4개)</span></h3>
          </div>
          <el-table :data="tableData2">
            <el-table-column prop="num" label="번호" width="60"></el-table-column>
            <el-table-column prop="content" label="내용" align="left"></el-table-column>
            <el-table-column prop="date" label="등록일시" width="200"></el-table-column>
            <el-table-column prop="admin" label="관리" width="200">
              <el-button @click="singlememberhiddenBtn">숨기기</el-button>
            </el-table-column>
          </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 계정 정지 : Start -->
        <el-dialog
            :visible.sync="accountsuspended"
            width="30%"
            center>
            <span>해당 회원의 활동을 정지시키겠습니까?</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="accountsuspendedInner = true">종료</el-button>
              <el-button @click="accountsuspended = false">닫기</el-button>
            </span>
            <el-dialog width="30%" :visible.sync="accountsuspendedInner" append-to-body>
              <span>해당 회원은 정지상태로 변경됐으며, 향후 접속이 차단됩니다.</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="accountsuspendedInner = false">확인</el-button>
              </span>
            </el-dialog>
        </el-dialog>
        <!-- 계정 정지 : End -->
        <!-- 댓글 비공개 : Start -->
        <el-dialog
            :visible.sync="contantsHidden"
            width="30%"
            center>
            <span>해당 콘텐츠를 비공개로 전환하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
              <el-button @click="contantsHidden = false">취소</el-button>
            </span>
            <el-dialog width="30%" :visible.sync="contantsHiddenInner" append-to-body>
              <span>이 콘텐츠는 Discover에 전시중이므로,  비공개로 전환할 수 없습니다.<br />전시 관리에서 변경하세요.</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="contantsHiddenInner = false">확인</el-button>
              </span>
            </el-dialog>
        </el-dialog>
        <!-- 댓글 비공개 : End -->
        <!-- 이벤트 참여자 : Start -->
        <el-dialog title="이벤트 참여자" :visible.sync="eventParticipantsPop">
          <!-- temp-cont : Start -->
          <div class="temp-cont">
            <el-row>
              <el-col :span="24" class="bg-fff">
                <el-select v-model="value" clearable placeholder="이름">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
                <el-input placeholder="검색어를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                <el-button size="large">검색</el-button>
                <el-button size="large">초기화</el-button>
              </el-col>
            </el-row>
          </div>
          <!-- temp-cont : End -->
          <!-- temp-cont : Start -->
          <div class="temp-cont">
            <p class="tit-sub">전체 (00,000명)</p>
            <el-table :data="tableData3">
              <el-table-column prop="num" label="번호" width="60"></el-table-column>
              <el-table-column prop="name" label="이름" width="150">
                <template slot-scope="scope">
                  <router-link
                  v-bind:to="{}">
                      {{scope.row.name}}
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column prop="email" label="이메일" width="300"></el-table-column>
              <el-table-column prop="date" label="참여일시"></el-table-column>
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
        <!-- 이벤트 참여자 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    accountsuspended: false,
    accountsuspendedInner: false,
    eventParticipantsPop: false,
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
    tableData: [
      {num: '3', title: '이벤트 제목', participants: '0,000', date: 'YYYY.MM.DD ~ YYYY.MM.DD', progress: '진행중', visibility: '공개'},
      {num: '2', title: '이벤트 제목', participants: '0,000', date: 'YYYY.MM.DD ~ YYYY.MM.DD', progress: '진행중', visibility: '공개'},
      {num: '1', title: '이벤트 제목', participants: '0,000', date: 'YYYY.MM.DD ~ YYYY.MM.DD', progress: '진행중', visibility: '공개'}
    ],
    tableData2: [
      {num: '4', content: '등록한 댓글 내용을 표시합니다.', date: 'YYYY.MM.DD HH:MM'},
      {num: '3', content: '등록한 댓글 내용을 표시합니다.', date: 'YYYY.MM.DD HH:MM'},
      {num: '2', content: '등록한 댓글 내용을 표시합니다.', date: 'YYYY.MM.DD HH:MM'},
      {num: '1', content: '등록한 댓글 내용을 표시합니다.', date: 'YYYY.MM.DD HH:MM'}
    ],
    tableData3: [
      {num: '20', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '19', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '18', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '17', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '16', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '14', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '14', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '13', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '12', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '11', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'}
    ],
    value: '',
    input1: '',
    input2: '',
    textarea2: ''
  }),
  methods: {
    singlememberhiddenBtn () {
      alert('클릭 시 버튼 텍스트 공개 로 바뀜처리')
    }
  }
}
</script>
<style scoped>
.tit-sub{font-weight:normal;}
</style>
