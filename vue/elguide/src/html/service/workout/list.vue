<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>서비스 점검 팝업</h3>
            <el-row>
                <el-col :span="4">전시상태</el-col>
                <el-col :span="5">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">등록일</el-col>
                <el-col :span="10">
                  <el-date-picker
                    v-model="value"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date">
                  </el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">대상OS</el-col>
                <el-col :span="10">
                    <el-radio v-model="radio" label="1">전체</el-radio>
                    <el-radio v-model="radio" label="2">iOS</el-radio>
                    <el-radio v-model="radio" label="3">Android</el-radio>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">키워드</el-col>
                <el-col :span="20">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button >검색</el-button>
                <el-button>초기화</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData" :default-sort="{prop: 'contants, subscriber'}">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="category" label="팝업명" align="left"></el-table-column>
                <el-table-column prop="os" label="대상OS" width="120"></el-table-column>
                <el-table-column prop="visible" label="전시상태" width="100" ></el-table-column>
                <el-table-column prop="date1" label="최초 등록일" width="120" ></el-table-column>
                <el-table-column prop="date2" label="최종 수정일" width="120" ></el-table-column>
                <el-table-column prop="writer" label="최종 작성자" width="100" ></el-table-column>
            </el-table>
            <div class="btn-area right">
                <el-button>신규등록</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
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
    tableData: [
      {num: '1', os: '론니플래닛', category: 'Financial', writer: '홍길동', date1: '2019.05.29', date2: '2019.05.29', visible: '공개'},
      {num: '1', os: '론니플래닛', category: 'Financial', writer: '홍길동', date1: '2019.05.29', date2: '2019.05.29', visible: '공개'},
      {num: '1', os: '론니플래닛', category: 'Financial', writer: '홍길동', date1: '2019.05.29', date2: '2019.05.29', visible: '공개'},
      {num: '1', os: '론니플래닛', category: 'Financial', writer: '홍길동', date1: '2019.05.29', date2: '2019.05.29', visible: '공개'},
      {num: '1', os: '론니플래닛', category: 'Financial', writer: '홍길동', date1: '2019.05.29', date2: '2019.05.29', visible: '공개'}
    ]
  })
}
</script>
<style scoped>
</style>
