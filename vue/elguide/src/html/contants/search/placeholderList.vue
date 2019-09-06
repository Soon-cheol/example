<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Placeholder 관리</h3>
            <el-row>
                <el-col :span="4">Placeholder 등록</el-col>
                <el-col :span="20">
                    <el-input placeholder="메세지를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                    <el-button size="large" @click="placeholderPop1 = true">신규등록</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData" :default-sort="{prop: 'contants, subscriber'}">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="lineName" label="메시지" align="left"></el-table-column>
                <el-table-column prop="date" label="등록일" width="120" ></el-table-column>
                <el-table-column prop="visible" label="상태" width="160" >
                  <el-button @click="placeholderPop2 = true">노출하기</el-button>
                  <!-- <el-button @click="placeholderPop2 = true">노출중지</el-button> -->
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
        <!-------------------- Dialog : Start -------------------->
        <!-- 신규등록 버튼 : Start -->
        <el-dialog
          :visible.sync="placeholderPop1"
          width="30%"
          center>
          <span>placeholder를 등록하시겠습니까?</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="placeholderPop1 = false">확인</el-button>
            <el-button @click="placeholderPop1 = false">취소</el-button>
          </span>
        </el-dialog>
        <!-- 신규등록 버튼 : End -->
        <!-- 노출중지/노출하기 : Start -->
        <el-dialog
          :visible.sync="placeholderPop2"
          width="30%"
          center>
          <span>노출을 중지하시겠습니까?</span>
          <!-- <span>노출을 재개하시겠습니까?</span> -->
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="placeholderPop2 = false">확인</el-button>
            <el-button @click="placeholderPop2 = false">취소</el-button>
          </span>
        </el-dialog>
        <!-- 노출중지/노출하기 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    placeholderPop1: false,
    placeholderPop2: false,
    tableData: [
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '1', subscriber: '1', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '2', subscriber: '2', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '3', subscriber: '3', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '4', subscriber: '4', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '5', subscriber: '5', date: '2019.05.29', visible: '공개'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
