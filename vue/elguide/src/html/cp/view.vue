<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>CP 관리</h3>
            <el-row class="line-name">
                <el-col :span="4">CP 명</el-col>
                <el-col :span="20" class="table">
                    <img src="@/assets/test.png"> 금주의 EPL 리뷰
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">설명</el-col>
                <el-col :span="20">CP설명글을 씁니다.</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">생성일</el-col>
                <el-col :span="8">2019.05.29</el-col>
                <el-col :span="4">URL</el-col>
                <el-col :span="8"><a href="http://www.line.com" target="_blank">http://www.line.com</a></el-col>
            </el-row>
            <el-row>
                <el-col :span="4">앱스토어</el-col>
                <el-col :span="20"><a href="https://itunes.apple.com/kr/app/zumo-jumal-e-mohaji/id1037778235?mt=8" target="_blank">https://itunes.apple.com/kr/app/zumo-jumal-e-mohaji/id1037778235?mt=8</a></el-col>
            </el-row>
            <el-row>
                <el-col :span="4">구글플레이</el-col>
                <el-col :span="20"><a href="https://play.google.com/store/apps/details?id=kr.co.zumo.app" target="_blank">https://play.google.com/store/apps/details?id=kr.co.zumo.app</a></el-col>
            </el-row>
            <el-row>
                <el-col :span="4">Line 수</el-col>
                <el-col :span="8">29</el-col>
                <el-col :span="4">구독자</el-col>
                <el-col :span="8">1,000</el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>
                연관 콘텐츠
                <el-button size="small" class="mgl5">비공개 전환</el-button>
            </h3>
            <el-table :data="tableData">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <!-- 19.07.02 기획서 변경. 해당 부분 추가 : start -->
                <el-table-column width="60"><el-checkbox></el-checkbox></el-table-column>
                <!-- 19.07.02 기획서 변경. 해당 부분 추가 : end -->
                <el-table-column prop="category2" label="카테고리" width="140" align="left"></el-table-column>
                <el-table-column prop="division" label="구분" width="140" align="left"></el-table-column>
                <el-table-column prop="title" label="제목" align="left">
                    <template slot-scope="scope">
                        <router-link
                        v-bind:to="{}">
                            {{scope.row.title}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="exhibition" label="상태" width="160"></el-table-column>
                <el-table-column prop="date" label="등록일" width="240"></el-table-column>
            </el-table>
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button></div>
            </div>
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
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tableData: [
      {num: '1', category1: '재테크', category2: '야구', division: '유튜브형', title: '제목을 선택하면 상세화면으로 이동합니다', date: '2019.00.00', exhibition: '전시중'},
      {num: '2', category1: '재테크', category2: '축구', division: 'ASMR형', title: '제목을 선택하면 상세화면으로 이동합니다', date: '2019.00.00', exhibition: '전시중'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
