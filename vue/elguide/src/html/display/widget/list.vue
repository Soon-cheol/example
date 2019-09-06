<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>위젯 관리</h3>
      <el-table :data="tableData">
        <el-table-column prop="widgetname" label="위젯명" align="left"></el-table-column>
        <el-table-column prop="admin" label="관리" width="400">
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
    tableData: [
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'},
      {widgetname: '날씨', admin: '활성'}
    ],
    radio: '1',
    radio1: '1',
    radio2: ''
  })
}
</script>
