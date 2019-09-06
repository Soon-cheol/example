<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>공지사항</h3>
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
                <el-col :span="4">키워드</el-col>
                <el-col :span="20">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="input" placeholder="검색키워드를 입력하세요" :disabled="false" class="width30"></el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button >검색</el-button>
                <el-button>초기화</el-button>
            </div>
            <div class="btn-area right">
                <el-button>신규등록</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="division" label="구분" width="140"></el-table-column>
                <el-table-column prop="title" label="제목" align="left">
                  <template slot-scope="scope">
                    <router-link
                      v-bind:to="{}">
                      {{scope.row.title}}
                    </router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="exhibition" label="전시 상태" width="140"></el-table-column>
                <el-table-column prop="date1" label="최초 등록일" width="140"></el-table-column>
                <el-table-column prop="date2" label="최초 수정일" width="140"></el-table-column>
                <el-table-column prop="writer" label="최초 작성자" width="100"></el-table-column>
            </el-table>
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
      value: '공지사항',
      label: '공지사항'
    }, {
      value: '당첨자발표',
      label: '당첨자발표'
    }],
    options1: [{
      value: '작성자',
      label: '작성자'
    }, {
      value: '수정자',
      label: '수정자'
    }],
    tableData: [
      {num: '1', division: '유튜브형', title: '제목을 선택하면 상세화면으로 이동합니다', date1: '2019.00.00', date2: '2019.00.00', exhibition: '전시중', writer: '홍길동'},
      {num: '2', division: '유튜브형', title: '제목을 선택하면 상세화면으로 이동합니다', date1: '2019.00.00', date2: '2019.00.00', exhibition: '전시종료', writer: '홍길동'}
    ],
    value: '',
    input: ''
  })
}
</script>
<style scoped>
</style>
