<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>위젯 사용 통계</h3>
      <el-table :data="tableData">
        <el-table-column prop="category" width="100" label="순위">
        </el-table-column>
        <el-table-column prop="category" label="위젯명" align="left">
        </el-table-column>
        <el-table-column prop="category" width="100" label="사용자수">
        </el-table-column>
      </el-table>
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
        date: '로그인 수',
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
