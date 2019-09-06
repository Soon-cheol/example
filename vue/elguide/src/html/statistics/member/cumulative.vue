<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>회원 통계 : 누적회원통계</h3>
      <el-row>
          <el-col :span="4">기간별 통계</el-col>
          <el-col :span="14" class="stat-table">
            <el-date-picker
              v-model="value"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
            <el-select v-model="value" clearable placeholder="전체" class="width30">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
      </el-row>
      <div class="btn-area">
          <el-button>조회</el-button>
          <el-button>액셀 다운로드</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="mgt10 mgb10">조회기간 YYYY.MM.DD~YYYY.MM.DD</div>
      <el-table :data="tableData">
        <el-table-column prop="date" width="100" label="일자">
        </el-table-column>
        <el-table-column prop="category" label="누적 회원 수 (정상)">
        </el-table-column>
        <el-table-column prop="category" label="누적 회원 수 (휴면)">
        </el-table-column>
        <el-table-column prop="category" label="누적 회원 수 (탈퇴)">
        </el-table-column>
        <el-table-column prop="category" label="총 누적 회원 수">
        </el-table-column>
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
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    tableData: [
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      }
    ],
    methods: {
      format (percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`
      }
    },
    value: '',
    value2: '',
    value3: ''
  })
}
</script>
