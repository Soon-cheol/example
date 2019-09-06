<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>추천 검색어 관리</h3>
            <el-row>
                <el-col :span="4">검색</el-col>
                <el-col :span="10">
                    <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
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
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" clearable></el-input>
                    <el-button>신규등록</el-button>
                </div>
            </div>
            <el-table :data="tableData">
                <el-table-column prop="ranking" label="순위" width="60"></el-table-column>
                <el-table-column label="순위조정" width="120"></el-table-column>
                <el-table-column label="검색어">
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width100" clearable></el-input>
                </el-table-column>
                <el-table-column width="160">
                    <el-button @click="tagEdit = true">수정</el-button>
                    <el-button @click="tagDelete = true">삭제</el-button>
                </el-table-column>
                <el-table-column prop="searchNum" label="검색횟수" width="160"></el-table-column>
                <el-table-column prop="date" label="등록일" width="160"></el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 태그수정 : Start -->
        <el-dialog
            title=""
            :visible.sync="tagEdit"
            width="30%"
            center>
            <span>수정하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="tagEdit = false">확인</el-button>
            <el-button @click="tagEdit = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 태그수정 : End -->
        <!-- 태그삭제 : Start -->
        <el-dialog
            title=""
            :visible.sync="tagDelete"
            width="30%"
            center>
            <span>삭제하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="tagDelete = false">확인</el-button>
            <el-button @click="tagDelete = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 태그삭제 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tagEdit: false,
    tagDelete: false,
    tableData: [
      {ranking: '1', searchNum: '4', date: '2019.00.00'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  }),
  methods: {
    searchVisible () {
      alert(1)
    }
  }
}
</script>
