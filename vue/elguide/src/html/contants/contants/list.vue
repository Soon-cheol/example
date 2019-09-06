<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>콘텐츠 관리</h3>
            <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="5">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">구분</el-col>
                <el-col :span="5">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">기간</el-col>
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
                <el-col :span="4">전시상태</el-col>
                <el-col :span="5" class="table">
                    <el-select v-model="value" clearable placeholder="Select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">키워드</el-col>
                <el-col :span="10" class="ranking-radio">
                    <el-radio v-model="radio" label="1">전체</el-radio>
                    <el-radio v-model="radio" label="2">제목</el-radio>
                    <el-radio v-model="radio" label="3">본문&nbsp;&nbsp;&nbsp;
                        <el-input v-model="input3" placeholder="검색키워드를 입력하세요" :disabled="false"></el-input>
                    </el-radio>
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
            <div class="heading-option">
                <div class="option">
                    <el-button>신규등록</el-button>
                </div>
            </div>
            <el-table :data="tableData">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="category2" label="카테고리" align="left" width="150"></el-table-column>
                <el-table-column prop="division" label="구분" align="left" width="140"></el-table-column>
                <el-table-column prop="title" label="제목" align="left"></el-table-column>
                <el-table-column prop="exhibition" label="상태" width="140"></el-table-column>
                <el-table-column prop="date" label="등록일" width="140"></el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
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
      {num: '1', category1: 'Physical', category2: '야구', division: '유튜브형', title: '제목을 선택하면 상세화면으로 이동합니다', date: '2019.00.00', exhibition: '전시중'},
      {num: '2', category1: 'Physical', category2: '축구', division: '유튜브형', title: '제목을 선택하면 상세화면으로 이동합니다', date: '2019.00.00', exhibition: '전시종료'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
