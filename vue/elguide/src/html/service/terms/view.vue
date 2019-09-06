<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-row>
                <el-col :span="4">약관명</el-col>
                <el-col :span="20">이용약관</el-col>
            </el-row>
            <!-- <el-row>
                <el-col :span="4">용도</el-col>
                <el-col :span="20" class="txt-cont">이벤트 참여(마더브레인)</el-col>
            </el-row> -->
            <el-row>
                <el-col :span="4">등록일</el-col>
                <el-col :span="8" class="txt-cont">YYYY.MM.DD</el-col>
                <el-col :span="4">작성자</el-col>
                <el-col :span="8" class="txt-cont">홍길동</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">상태</el-col>
                <el-col :span="8" class="txt-cont">전시중</el-col>
                <el-col :span="4">버전</el-col>
                <el-col :span="8" class="txt-cont">1.01</el-col>
            </el-row>
             <el-row>
                <el-col :span="4">약관파일 Html 경로</el-col>
                <el-col :span="20" class="txt-cont"><a href="http://abceefg.co.kr/termsofuse.html">http://abceefg.co.kr/termsofuse.html</a></el-col>
            </el-row>
            <!-- <el-row>
                <el-col :span="4">전문</el-col>
                <el-col :span="20" class="txt-cont">본 약관에서는 다음 용어를 사용합니다.
1.1. ‘콘텐츠’란 문장, 음성, 음악, 이미지, 동영상, 소프트웨어, 프로그램, 코드 기타 정보를 말합니다.
1.2. ‘본 콘텐츠’란 본 서비스를 통해 접속할 수 있는 콘텐츠를 말합니다.
1.3. ‘투고 콘텐츠’란 고객이 본 서비스에 투고, 송신, 업로드한 콘텐츠를 말합니다.
1.4. ‘코인’이란 본 서비스가 유상으로 제공하는 서비스 또는 콘텐츠와 교환 가능한 전자적 가상통화를 말합니다.
1.5. ‘개별 이용약관’이란 본 서비스에 관하여 본 약관과는 별도로 ‘약관’, 가이드라인’, ‘정책’ 등의 명칭으로 당사가 배포 또는 게시한 문서를 말합니다.

2. 약관 동의

2.1 고객은 본 약관의 규정에 따라 본 서비스를 이용해야 합니다. 고객은 본 약관에 대해 유효하고 취소 불가능한 동의를 했을 경우에 한하여 본 서비스를 이용할 수 있습니다.
2.2. 고객이 미성년자일 경우에는 친권자 등 법정대리인의 동의를 얻은 후 본 서비스를 이용하십시오. 또한 고객이 본 서비스를 사업자를 위해 이용할 경우에는 당해 사업자 역시 본 약관에 동의한 후, 본 서비스를 이용하십시오.
2.3. 고객은 본 서비스를 실제로 이용함으로써 본 약관에 대해 유효하고 취소 불가능한 동의를 한 것으로 간주됩니다.
2.4. 본 서비스에 개별 이용약관이 존재할 경우, 고객은 본 약관 외에 개별 이용약관의 규정에 따라 본 서비스를 이용해야 합니다.</el-col>
            </el-row> -->
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button></div>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({

  })
}
</script>
<style scoped>
</style>
