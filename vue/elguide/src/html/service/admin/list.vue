<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Admin 계정 관리</h3>
            <el-row>
                <el-col :span="4">분류</el-col>
                <el-col :span="20">
                    <el-select v-model="value" class="width20" clearable placeholder="전체">
                      <el-option v-for="item in options" :key="item.value"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-input placeholder="검색어를 입력하세요" v-model="input" class="width40" clearable></el-input>
                    <el-button size="large">검색</el-button>
                    <el-button size="large">초기화</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="email" label="이메일(ID)"></el-table-column>
                <el-table-column prop="name" label="이름" width="160"></el-table-column>
                <el-table-column prop="group" label="소속" width="160"></el-table-column>
                <el-table-column prop="rank" label="직급" width="160"></el-table-column>
                <el-table-column prop="date1" label="등록일" width="160"></el-table-column>
                <el-table-column prop="date2" label="최근접속일시" width="180"></el-table-column>
                <el-table-column prop="state" label="상태" width="120"></el-table-column>
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
      value: '이메일',
      label: '이메일'
    }, {
      value: '이름',
      label: '이름'
    }, {
      value: '사번',
      label: '사번'
    }],
    input: '',
    tableData: [
      {num: '1', division: '유튜브형', email: 'aaaa@aaa.com', name: '홍길동', group: '한화생보1팀', rank: '부장', date1: '2019.00.00', date2: '2019.00.00 00:00:00', exhibition: '전시중', state: '정상'}
    ]
  })
}
</script>
<style scoped>
</style>
