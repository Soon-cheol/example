<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>My Page</h3>
      <p class="tit-sub">인적사항</p>
      <el-row>
        <el-col :span="4">이름</el-col>
        <el-col :span="5">
          홍길동
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">소속</el-col>
        <el-col :span="5">
          콘텐츠팀
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">직급</el-col>
        <el-col :span="20">
          <el-select v-model="value" class="width15" clearable placeholder="선택">
            <el-option v-for="item in options" :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">사번</el-col>
        <el-col :span="5">
          0000000
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">이메일(ID)</el-col>
        <el-col :span="14">
          emailid@email.co.kr
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">휴대폰</el-col>
        <el-col :span="20">
          <el-select v-model="value" class="width10" clearable placeholder="선택">
            <el-option v-for="item in options" :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input placeholder="" v-model="input1" clearable class="width10"></el-input>
          <el-input placeholder="" v-model="input2" clearable class="width10"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">현재 비밀번호</el-col>
        <el-col :span="14">
          <el-input type="password" placeholder="" v-model="input3" clearable class="width34"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">신규 비밀번호</el-col>
        <el-col :span="14">
          <el-input type="password" placeholder="" v-model="input4" clearable class="width34"></el-input>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">관리권한</p>
      <el-tree
        :data="data2"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps">
      </el-tree>
      <div class="btn-area">
        <el-button>확인</el-button>
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
    input: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    value: '',
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
