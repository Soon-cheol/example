<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>카테고리 관리</h3>
            <el-row>
                <el-col :span="4">카테고리 추가</el-col>
                <el-col :span="8">
                    <el-select v-model="value2" clearable placeholder="F/P/M/I 선택">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">중분류</el-col>
                <el-col :span="8" class="table">
                    <el-input placeholder="카테고리명을 입력하세요" v-model="input1" class="width80" clearable></el-input>
                    <el-button size="large" @click="categoryCreate = true">등록</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont keyword-cont">
            <el-table :data="tableData">
                <el-table-column prop="tag" label="Financial">
                    <el-input placeholder="중분류 카테고리명" v-model="input1" clearable></el-input>
                    <el-button @click="categoryEdit = true" size="large">수정</el-button>
                    <el-button @click="categoryDelete = true" size="large">삭제</el-button>
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont keyword-cont">
            <el-table :data="tableData">
                <el-table-column prop="tag" label="Physical">
                    <el-input placeholder="중분류 카테고리명" v-model="input1" clearable></el-input>
                    <el-button @click="categoryEdit = true" size="large">수정</el-button>
                    <el-button @click="categoryDelete = true" size="large">삭제</el-button>
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont keyword-cont">
            <el-table :data="tableData">
                <el-table-column prop="tag" label="Mental">
                    <el-input placeholder="중분류 카테고리명" v-model="input1" clearable></el-input>
                    <el-button @click="categoryEdit = true" size="large">수정</el-button>
                    <el-button @click="categoryDelete = true" size="large">삭제</el-button>
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont keyword-cont">
            <el-table :data="tableData">
                <el-table-column prop="tag" label="Inspirational">
                    <el-input placeholder="중분류 카테고리명" v-model="input1" clearable></el-input>
                    <el-button @click="categoryEdit = true" size="large">수정</el-button>
                    <el-button @click="categoryDelete = true" size="large">삭제</el-button>
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 카테고리 신규 생성 : Start -->
        <el-dialog
            :visible.sync="categoryCreate"
            width="30%"
            center>
            <span>입력하신 카테고리를 신규 생성 하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="categoryCreate = false">생성</el-button>
            <el-button @click="categoryCreate = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 카테고리 신규 생성 : End -->
        <!-- 카테고리 수정 : Start -->
        <el-dialog
            :visible.sync="categoryEdit"
            width="30%"
            center>
            <span>해당 카테고리를 수정하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="categoryEdit = false">확인</el-button>
            <el-button @click="categoryEdit = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 카테고리 수정 : End -->
        <!-- 카테고리 삭제 : Start -->
        <el-dialog
            :visible.sync="categoryDelete"
            width="30%"
            center>
            <span>해당 카테고리를 정말 삭제하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="categoryDeleteInner = true">확인</el-button>
            <el-button @click="categoryDelete = false">취소</el-button>
            </span>
            <el-dialog width="30%" :visible.sync="categoryDeleteInner" append-to-body>
              <span>해당 카테고리가 삭제되었습니다.</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="categoryDeleteInner = false">확인</el-button>
              </span>
            </el-dialog>
        </el-dialog>
        <!-- 카테고리 삭제 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    input1: '',
    value2: '',
    categoryCreate: false,
    categoryEdit: false,
    categoryEditInner: false,
    categoryDelete: false,
    categoryDeleteInner: false,
    tableData: [
      {num: '1', useNum: '1', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'},
      {num: '2', useNum: '2', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'},
      {num: '2', useNum: '3', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'},
      {num: '2', useNum: '4', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'}
    ],
    options: [{
      value: 'Financial',
      label: 'Financial'
    }, {
      value: 'Physical',
      label: 'Physical'
    }, {
      value: 'Mental',
      label: 'Mental'
    }, {
      value: 'Inspirational',
      label: 'Inspirational'
    }]
  })
}
</script>
<style scoped>
.keyword-cont{
  float: left;
  width:50%;
}
.keyword-cont:nth-child(odd){
  border-left:1px solid #dfdfdf;
}
.keyword-cont .el-button{
  margin-left: 6px;
}
</style>
