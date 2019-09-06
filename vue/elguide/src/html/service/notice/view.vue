<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>공지사항</h3>
            <el-row>
                <el-col :span="4">구분</el-col>
                <el-col :span="8">공지사항</el-col>
                <el-col :span="4">상태</el-col>
                <el-col :span="8">전시(YYYY.MM.DD 부터)</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">최초등록</el-col>
                <el-col :span="8">YYYY.MM.DD HH:MM 홍길순</el-col>
                <el-col :span="4">최종수정</el-col>
                <el-col :span="8">YYYY.MM.DD HH:MM 홍길순</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">제목</el-col>
                <el-col :span="20">SK텔레콤, 서울시 5G 업무협조 시작</el-col>
            </el-row>
            <!-- 19.07.09 공지글 URL 추가 : start -->
            <el-row>
                <el-col :span="4">공지글 URL</el-col>
                <el-col :span="20"><a href="http://www.nnn.com" target="_blank">http://www.nnn.com</a></el-col>
            </el-row>
            <!-- 19.07.09 공지글 URL 추가 : end -->
            <el-row>
                <el-col :span="4">본문</el-col>
                <el-col :span="20" class="txt-cont">SK텔레콤과 서울시가 서울 시내버스·택시 1700대에 5G ADAS를 장착하고, 이를 통해 수집한 정보와 HD맵 등 자율주행 인프라를 개방해 자율주행 생태계 조성에 나설 계획이다.

SK텔레콤 최일규 B2B사업단장과 서울시 고홍석 도시교통실장은 5월23일 서울 중구 을지로 SK텔레콤 사옥에서 ‘자율주행 시대를 위한 정밀도로지도 기술 개발 및 실증 협약’을 체결했다.

양측은 시내버스·택시 1700대에 5G ADAS(Advanced Driver Assistance Systems, 첨단 운전자 지원 시스템)를 장착해, 차세대 지능형교통시스템(C-ITS) 실증 사업 구간의 HD맵(고정밀지도) 실시간 업데이트 기술 개발에 협력하기로 했다. 이를 바탕으로 도로시설물 관리시스템과 교통안전서비스 개발 등에도 나설 계획이다.

차세대 지능형교통시스템 사업은 5G네트워크, 차량-사물 간 양방향 통신(V2X) 등 자율주행, 커넥티드카 등 미래 교통시대에 필요한 핵심 인프라를 서울 시내 주요 도로에 구축하는 사업이다. SK텔레콤은 지난 1월 C-ITS 사업을 수주, 5G 인프라 구축 등을 수행하고 있다.</el-col>
            </el-row>
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div>
                  <el-button>수정</el-button>
                  <el-button @click="centerDisplayVisible = true">전시종료</el-button>
                </div>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 전시 종료 : Start -->
        <el-dialog
            :visible.sync="centerDisplayVisible"
            width="30%"
            center>
            <span>해당 공지사항의 전시를 종료하시겠습니까?<br />(전시대기 상태는 전시를 취소합니다)</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="centerDisplayVisible = false">종료</el-button>
            <el-button @click="centerDisplayVisible = false">닫기</el-button>
            </span>
        </el-dialog>
        <!-- 전시 종료 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    centerDisplayVisible: false
  })
}
</script>
<style scoped>
</style>
