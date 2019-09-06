<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>FAQ 등록</h3>
            <!-- <el-row>
                <el-col :span="4" class="required">카테고리</el-col>
                <el-col :span="10">
                    <el-select v-model="value" clearable placeholder="선택">
                      <el-option v-for="item in options" :key="item.value"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-button size="large" @click="cateAdminPop = true">카테고리 관리</el-button>
                </el-col>
            </el-row> -->
            <el-row>
                <el-col :span="4" class="required">질문</el-col>
                <el-col :span="20">
                    <el-input
                        type="textarea"
                        class="width100"
                        :autosize="{ minRows: 3, maxRows: 100}"
                        v-model="textarea">
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">답변</el-col>
                <el-col :span="20">
                    <el-input
                        type="textarea"
                        class="width100"
                        rows="3"
                        v-model="textarea">
                    </el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button>등록</el-button>
                <el-button>취소</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 카테고리 관리 : Start -->
        <el-dialog title="카테고리 관리" :visible.sync="cateAdminPop">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-row>
                    <el-col :span="4">카테고리명</el-col>
                    <el-col :span="20" class="table">
                        <el-input placeholder="키워드를 입력하세요" v-model="input" class="width50" clearable></el-input>
                        <el-button size="large" @click="categoryAdd = true">등록</el-button>
                    </el-col>
                </el-row>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-table :data="tableData2">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column label="카테고리명">
                        <el-input placeholder="키워드를 입력하세요" v-model="input" class="width100" clearable></el-input>
                    </el-table-column>
                    <el-table-column prop="admin" label="관리" width="200">
                        <el-button @click="categoryEdit = true">수정</el-button>
                        <el-button @click="categoryDel = true">삭제</el-button>
                    </el-table-column>
                </el-table>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <div class="btn-area">
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="displaySelectPop = false">선택</el-button>
                    </span>
                </div>
            </div>
            <!-- temp-cont : End -->
            <!-- 카테고리 관리 - 등록 : Start -->
            <el-dialog
                :visible.sync="categoryAdd"
                width="30%"
                append-to-body>
                <span>이 콘텐츠는 Discover에 전시중이므로,  비공개로 전환할 수 없습니다.<br />전시 관리에서 변경하세요.</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="main" @click="categoryAdd = false">확인</el-button>
                    <el-button @click="categoryAdd = false">취소</el-button>
                </span>
            </el-dialog>
            <!-- 카테고리 관리 - 등록 : End -->
            <!-- 카테고리 관리 - 수정 : Start -->
            <el-dialog
                :visible.sync="categoryEdit"
                width="30%"
                append-to-body>
                <span>해당 카테고리를 수정하시겠습니까?</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="main" @click="categoryEdit = false">확인</el-button>
                    <el-button @click="categoryEdit = false">취소</el-button>
                </span>
            </el-dialog>
            <!-- 카테고리 관리 - 수정 : End -->
            <!-- 카테고리 관리 - 삭제 : Start -->
            <el-dialog
                :visible.sync="categoryDel"
                width="30%"
                append-to-body>
                <span>선택하신 카테고리를 정말 삭제하시겠습니까?</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="main" @click="categoryDelConfirm = true">확인</el-button>
                    <el-button @click="categoryDel = false">취소</el-button>
                </span>
                <el-dialog
                    :visible.sync="categoryDelConfirm"
                    width="30%"
                    append-to-body>
                    <span>해당 카테고리에 등록된 콘텐츠가 있습니다.<br />먼저 해당 콘텐츠를 다른 카테고리로 변경하세요.</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="main" @click="categoryDelConfirm = false">확인</el-button>
                    </span>
                </el-dialog>
            </el-dialog>
            <!-- 카테고리 관리 - 삭제 : End -->
        </el-dialog>
        <!-- 카테고리 관리 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    cateAdminPop: false,
    categoryAdd: false,
    categoryEdit: false,
    categoryDel: false,
    categoryDelConfirm: false,
    tableData: [
      {screen: '목록 클릭하면 팝업 닫은 후 선택되도록'},
      {screen: '목록 클릭하면 팝업 닫은 후 선택되도록'}
    ],
    tableData2: [
      {num: '1', category: 'Financial'},
      {num: '2', category: 'Financial'},
      {num: '3', category: 'Financial'},
      {num: '4', category: 'Financial'},
      {num: '5', category: 'Financial'}
    ],
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
    textarea: '',
    input: '',
    radio: '',
    value: '',
    value2: ''
  })
}
</script>
<style scoped>
.el-date-editor.el-input{
  width:220px;
}
</style>
