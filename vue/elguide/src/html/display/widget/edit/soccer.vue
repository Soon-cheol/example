<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>위젯 : 국내축구</h3>
        <el-row>
          <el-col :span="4">리그명</el-col>
          <el-col :span="10">
             <el-select v-model="value2" clearable placeholder="선택하세요">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">팀명</el-col>
          <el-col :span="12" class="link-url">
            <el-input placeholder="한/영 팀명을 입력하세요" v-model="input1" class="width50" clearable></el-input>
          </el-col>
        </el-row>
        <p class="txt-point">표시가 있는 리그가 1부 리그이며, 사용자 화면에 경기 결과가 표시됩니다.</p>
        <div class="btn-area">
          <el-button>검색</el-button>
          <el-button>초기화</el-button>
        </div>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <!-- 19.07.12 데이터 갱신 버튼 추가 : start -->
        <div class="heading-option">
            <div class="option">
                <el-button>데이터 갱신</el-button>
            </div>
        </div>
        <!-- 19.07.12 데이터 갱신 버튼 추가 : end -->
        <el-table :data="tableData">
          <el-table-column prop="category1" label="리그명" width="400" align="left"></el-table-column>
          <el-table-column prop="category2" label="영문 팀명" align="left"></el-table-column>
          <el-table-column prop="category3" label="한글 팀명" width="400">
            <el-input placeholder="수원" v-model="input1" class="width80" clearable></el-input>
            <el-button>수정</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    eventParticipantsPop: false,
    options: [{
      value: 'K리그1',
      label: 'K리그1'
    }, {
      value: 'K리그2',
      label: 'K리그2'
    }, {
      value: '전체',
      label: '전체'
    }],
    tableData: [
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''},
      {category1: 'K리그1*', category2: 'Suwon Samsung Bluewings', category3: ''}
    ],
    radio: '1',
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
