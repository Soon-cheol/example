<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>회원 통계: 서비스 이용 통계</h3>
      <p class="tit-sub">회원당 평균</p>
      <el-table :data="tableData">
        <el-table-column prop="category" label="구독 라인수">
        </el-table-column>
        <el-table-column prop="category" label="콘텐츠 조회 수">
        </el-table-column>
        <el-table-column prop="category" label="북마크 수">
        </el-table-column>
        <el-table-column prop="category" label="좋아요 수">
        </el-table-column>
        <el-table-column prop="category" label="공유 수">
        </el-table-column>
        <el-table-column prop="category" label="라인 생성 수">
        </el-table-column>
        <el-table-column prop="category" label="팔로잉 수">
        </el-table-column>
        <el-table-column prop="category" label="팔로어 수">
        </el-table-column>
        <el-table-column prop="category" label="프로필이미지 등록">
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
