<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Admin 계정 관리</h3>
            <p class="tit-sub">인적사항</p>
            <el-row>
                <el-col :span="4" class="required">이름</el-col>
                <el-col :span="5">
                  <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">이메일(ID)</el-col>
                <el-col :span="14">
                  <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">휴대폰</el-col>
                <el-col :span="20">
                  <el-select v-model="value" class="width10" clearable placeholder="선택">
                    <el-option v-for="item in options" :key="item.value"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-input placeholder="" v-model="input" clearable class="width10"></el-input>
                  <el-input placeholder="" v-model="input" clearable class="width10"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">소속</el-col>
                <el-col :span="14">
                  <el-input placeholder="" v-model="input" clearable></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">직급</el-col>
                <el-col :span="20">
                  <el-select v-model="value" class="width24" clearable placeholder="선택">
                    <el-option v-for="item in options" :key="item.value"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">사번</el-col>
                <el-col :span="14">
                  <el-input placeholder="" v-model="input" clearable class="width34"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">비고</el-col>
                <el-col :span="20">
                    <el-input
                        type="textarea"
                        class="width100"
                        rows="3"
                        placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
                        v-model="textarea">
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <!-- 2019.08.30 셀렉트박스 체크박스 추가 : START -->
            <p class="tit-sub">
              <span>관리권한</span>
              <el-checkbox v-model="checked" class="mgl20">CP 관리자</el-checkbox>
               <el-select v-model="value" clearable placeholder="선택">
                <el-option v-for="item in options" :key="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-button @click="conditionImport = true" size="large" class="mgl10">권한 불러오기</el-button>
            </p>
            <!-- 2019.08.30 셀렉트박스 체크박스 추가 : END -->
            <el-tree
              :data="data2"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps">
            </el-tree>
            <div class="btn-area">
                <el-button>등록</el-button>
                <el-button>취소</el-button>
                <el-button type="danger" plain @click="accountStopConfirm = true">계정정지</el-button>
            </div>
            <div class="btn-area stop-release" style="display:none">
                <el-button plain @click="accountReleaseConfirm = true">정지해제</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- 활동 정지 : Start -->
        <el-dialog
            :visible.sync="accountStopConfirm"
            width="30%"
            append-to-body>
            <span>해당 관리자의 활동을 정지시키겠습니까?</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="accountStop = true">확인</el-button>
                <el-button @click="accountStopConfirm = false">취소</el-button>
            </span>
            <el-dialog
                :visible.sync="accountStop"
                width="30%"
                center
                append-to-body>
                <span>해당 관리자는 정지상태로 변경됐으며,<br />즉시 접속이 차단됩니다.</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="main" @click="accountStop = false">확인</el-button>
                </span>
            </el-dialog>
        </el-dialog>
        <!-- 활동 정지 : End -->
        <!-- 정지 해제 : Start -->
        <el-dialog
            :visible.sync="accountReleaseConfirm"
            width="30%"
            append-to-body>
            <span>해당 관리자의 활동을 복원하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="accountRelease = true">확인</el-button>
                <el-button @click="accountReleaseConfirm = false">취소</el-button>
            </span>
            <el-dialog
                :visible.sync="accountRelease"
                width="30%"
                center
                append-to-body>
                <span>해당 관리자는 정상상태로 복원했습니다.</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="main" @click="stopRelease()">확인</el-button>
                </span>
            </el-dialog>
        </el-dialog>
        <!-- 정지 해제 : End -->
        <!-- 권한 불러오기 : Start -->
        <el-dialog title="권한 불러오기" :visible.sync="conditionImport">
            <p class="tit-sub tit-account">유사한 권한을 적용할 계정을 선택해 주세요.</p>
            <!-- temp-cont : Start -->
            <div class="temp-cont ">
                <el-select v-model="value" clearable placeholder="전체">
                  <el-option v-for="item in options" :key="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-input placeholder="" v-model="input" clearable></el-input>
                <el-button size="large">검색</el-button>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-table :data="tableData">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column prop="email" label="이메일(ID)"></el-table-column>
                    <el-table-column prop="name" label="이름" width="80"></el-table-column>
                    <el-table-column prop="group" label="소속" width="140"></el-table-column>
                    <el-table-column prop="rank" label="직급" width="80"></el-table-column>
                    <el-table-column prop="companyNum" label="사번" width="100"></el-table-column>
                </el-table>
                <el-table :data="tableData2">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column prop="email" label="이메일(ID)"></el-table-column>
                    <el-table-column prop="name" label="이름" width="80"></el-table-column>
                    <el-table-column prop="group" label="소속" width="140"></el-table-column>
                    <el-table-column prop="rank" label="직급" width="80"></el-table-column>
                    <el-table-column prop="companyNum" label="사번" width="100"></el-table-column>
                </el-table>
            </div>
            <!-- temp-cont : End -->
        </el-dialog>
        <!-- 권한 불러오기 : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    data2: [{
      id: 1,
      label: '전체 관리 권한을 부여합니다.'
    }, {
      id: 2,
      label: '1depth 메뉴명을 표시합니다.',
      children: [{
        id: 5,
        label: '1-1depth 메뉴명을 표시합니다.',
        children: [{
          id: 9,
          label: '1-1-1depth 메뉴명을 표시합니다.'
        }, {
          id: 10,
          label: '1-2-1depth 메뉴명을 표시합니다.'
        }]
      }, {
        id: 6,
        label: '1-2depth 메뉴명을 표시합니다.'
      }]
    }, {
      id: 3,
      label: '1depth 메뉴명을 표시합니다.',
      children: [{
        id: 7,
        label: '1-1depth 메뉴명을 표시합니다.'
      }, {
        id: 8,
        label: '1-2depth 메뉴명을 표시합니다.'
      }]
    }],
    defaultProps: {
      children: 'children',
      label: 'label'
    },
    conditionImport: false,
    accountReleaseConfirm: false,
    accountRelease: false,
    accountStopConfirm: false,
    accountStop: false,
    textarea: '',
    input: '',
    value: '',
    checked: true,
    tableData: [
      {num: '1', email: 'aaa@aaa.com', name: '홍길동', group: '한화생보1팀', rank: '부장', companyNum: '0000000'},
      {num: '2', email: 'aaa@aaa.com', name: '홍길동', group: '한화생보1팀', rank: '부장', companyNum: '0000000'}
    ],
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
    }]
  }),
  methods: {
    stopRelease () {
      this.accountReleaseConfirm = false
    }
  }
}
</script>
<style scoped>
.stop-release{
  position: fixed;
  width: calc(100% - 210px);
  height: calc(100% - 62px);
  top: 62px;
  left: 210px;
  z-index: 100;
  background: rgba(0,0,0, .5) !important;
}
.stop-release .el-button{
  position: absolute;
  top:50%;
  left:50%;
  margin:-41px 0 0 -41px;
}
.tit-account{
  margin-bottom:20px;
}
</style>
