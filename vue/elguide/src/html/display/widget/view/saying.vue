<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>위젯 : 오늘의 명언</h3>
        <el-row>
          <el-col :span="4">리그명</el-col>
          <el-col :span="20">
            <el-select v-model="value" class="width20" clearable placeholder="전체">
              <el-option v-for="item in options" :key="item.value"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="검색 키워드를 입력하세요" v-model="input" class="width40" clearable></el-input>
            <el-button size="large">검색</el-button>
            <el-button size="large">초기화</el-button>
          </el-col>
        </el-row>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-input placeholder="명언 내용을 입력하세요" v-model="input1" class="width40" clearable></el-input>
        <el-input placeholder="출처를 입력하세요" v-model="input1" class="width40" clearable></el-input>
        <el-button size="large">신규등록</el-button>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-table :data="tableData">
          <el-table-column prop="category1" label="번호" width="80"></el-table-column>
          <el-table-column prop="category2" label="명언" align="left">
             <template slot-scope="scope">
              <router-link
                v-bind:to="{}">
                {{scope.row.category2}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="category3" label="출처" width="400" align="left"></el-table-column>
          <el-table-column prop="category4" label="관리" width="400">
            <el-radio @click="contantsHidden = true" v-model="radio1" label="1">활성</el-radio>
            <el-radio @click="contantsHidden2 = true" v-model="radio2" label="2">비활성</el-radio>
          </el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
      <!-------------------- Dialog : Start -------------------->
      <!-- 비활성/활성 : Start -->
      <el-dialog
        :visible.sync="contantsHidden"
        width="30%"
        center>
        <span>해당 위젯을 활성 상태로 전환하시겠습니까?</span>
        <!-- <span>해당 위젯을 비활성 상태로 전환하시겠습니까?</span> -->
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
          <el-button @click="contantsHidden = false">취소</el-button>
        </span>
      </el-dialog>
      <!-- 비활성/활성 : End -->
      <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    eventParticipantsPop: false,
    options: [{
      value: '출처',
      label: '출처'
    }, {
      value: '명언',
      label: '명언'
    }],
    tableData: [
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''},
      {category1: '20', category2: '입력한 명언을 클릭하면 수정 화면으로 이동합니다.', category3: '출처표시', category4: ''}
    ],
    radio: '1',
    radio1: '1',
    radio2: '',
    input1: '',
    input2: '',
    value: '',
    value2: ''
  }),
  methods: {
    downloadexcelBtn () {
      alert('엑셀 다운로드')
    }
  }
}
</script>
<style scoped>
.wave{
  padding-right:10px;
}
</style>
