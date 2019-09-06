<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>CP 관리</h3>
            <el-row>
                <el-col :span="4">검색</el-col>
                <el-col :span="10">
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                    <el-button size="large">검색</el-button>
                    <el-button size="large">초기화</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="heading-option">
                <div class="option">
                    <el-button>신규등록</el-button>
                </div>
            </div>
            <el-table :data="tableData" :default-sort="{prop: 'lineNum, contNum', }">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="name" label="CP명" width="200">
                    <template slot-scope="scope">
                        <router-link
                        v-bind:to="{}">
                            {{scope.row.name}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="description" label="설명" align="left"></el-table-column>
                <el-table-column prop="lineNum" label="Line 수" width="160" sortable></el-table-column>
                <el-table-column prop="contNum" label="콘텐츠 수" width="160" sortable></el-table-column>
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
        <!-- 선택하기 리스트 삭제 : Start -->
        <el-dialog
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>정말 삭제하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="centerDialogVisible = false">확인</el-button>
            <el-button @click="centerDialogVisible = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 선택하기 리스트 삭제 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    centerDialogVisible: false,
    tableData: [
      {num: '1', name: '론니플래닛', description: '세계의 여행정보', lineNum: '1', contNum: '1'},
      {num: '1', name: '론니플래닛', description: '세계의 여행정보', lineNum: '2', contNum: '2'},
      {num: '1', name: '론니플래닛', description: '세계의 여행정보', lineNum: '3', contNum: '3'},
      {num: '1', name: '론니플래닛', description: '세계의 여행정보', lineNum: '4', contNum: '4'},
      {num: '1', name: '론니플래닛', description: '세계의 여행정보', lineNum: '5', contNum: '5'},
      {num: '1', name: '론니플래닛', description: '세계의 여행정보', lineNum: '6', contNum: '6'}
    ],
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
