<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>태그 관리</h3>
            <el-row>
                <el-col :span="4">태그 검색</el-col>
                <el-col :span="20" class="table">
                    <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                    <el-button size="large">검색</el-button>
                    <el-button size="large">초기화</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <!-- 입력하신 태그를 등록하시겠습니까? -->
            <div class="heading-option">
                <div class="option">
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" clearable></el-input>
                    <el-button size="large" @click="tagAddConfirm = true">신규등록</el-button>
                </div>
            </div>
            <!-- 등록할 태그를 입력해주세요. -->
            <div class="heading-option">
                <div class="option">
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" clearable></el-input>
                    <el-button size="large" @click="tagAddEnter = true">신규등록</el-button>
                </div>
            </div>
            <el-table :data="tableData" :default-sort="{prop: 'useNum, date'}">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="tag" label="태그">
                    <el-input placeholder="맛집" v-model="input1" class="width100" clearable></el-input>
                </el-table-column>
                <el-table-column width="160">
                    <el-button @click="tagEdit = true">수정</el-button>
                    <el-button @click="tagDelete = true">삭제</el-button>
                </el-table-column>
                <el-table-column label="사용횟수" width="160" sortable>
                    <template slot-scope="scope">
                    <router-link
                    v-bind:to="{}">
                        {{scope.row.useNum}}
                    </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="등록일" width="120" sortable></el-table-column>
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
        <!-- 태그등록 : Start -->
        <el-dialog
            :visible.sync="tagAddConfirm"
            width="30%"
            center>
            <span>입력하신 태그를 등록하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="tagAddConfirm = false">확인</el-button>
            <el-button @click="tagAddConfirm = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 태그등록 : End -->
        <!-- 태그등록 X : Start -->
        <el-dialog
            :visible.sync="tagAddEnter"
            width="30%"
            center>
            <span>등록할 태그를 입력해주세요.</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="tagAddEnter = false">확인</el-button>
            </span>
        </el-dialog>
        <!-- 태그등록 X : End -->
        <!-- 태그수정 : Start -->
        <el-dialog
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
        <!-- 태그목록보기 : Start -->
        <el-dialog title="콘텐츠 목록" :visible.sync="tagList" width="40%">
            <div class="temp-cont">
                <p class="tit-sub">맛집 태그 사용 콘텐츠 00 건</p>
                <el-table :data="tableData">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column prop="title" label="제목" align="left"></el-table-column>
                    <el-table-column prop="date" label="등록일" width="110"></el-table-column>
                </el-table>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </el-dialog>
        <!-- 태그목록보기 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tagAddConfirm: false,
    tagAddEnter: false,
    tagEdit: false,
    tagDelete: false,
    tagList: false,
    tableData: [
      {num: '1', useNum: '1', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'},
      {num: '2', useNum: '2', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'},
      {num: '2', useNum: '3', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'},
      {num: '2', useNum: '4', date: '2019.00.00', title: '콘텐츠 제목을 클릭하면 창을 닫고 상세화면으로 이동'}
    ],
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
