<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>1:1문의 답변</h3>
            <el-row>
                <el-col :span="4">회원번호</el-col>
                <el-col :span="8">00000000</el-col>
                <el-col :span="4">회원명</el-col>
                <el-col :span="8">홍길동</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">문의일시</el-col>
                <el-col :span="20">YYYY.MM.DD HH:MM</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">단말정보</el-col>
                <el-col :span="20">어플리케이션 버전 4.0.0 / 기기모델 iphone / OS 버전 12.1.1</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">질문내용</el-col>
                <el-col :span="20">질문 내용을 이곳에 표시합니다.</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">답변일시</el-col>
                <el-col :span="20">YYYY.MM.DD HH:MM 답변자 홍길동</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">답변내용</el-col>
                <el-col :span="20" class="txt-cont">AM 라디오파는 전리층에 의해 반사되어서 지상에서 직선으로 도달되지 않는 위치에서도 이런 반사로 방송이 나오는 경우가 있는데 와이파이도 그렇게 반사를 이용할 수 있는지 물어보는 질문인지요?

(굴절은 서로 다른 매질의 경계에서 직진하지 않고 휘어져 가는 현상을 말합니다. 모든 전자기파가 두 매질의 경계에서 거의 비슷하게 굴절합니다. 전자기파가 굴절하는 정도는 두 매질의 굴절률 차이에 따라 결정되는데, 전자기파의 진동수가 다르더라도 굴절률은 모두 거의 다 같아요.)

대부분의 전자기파는 금속 표면에서 반사합니다. 전리층도 금속의 성질 때문에 반사시키는 것이지요. 그래서 wifi 시그널도 금속 표면에서 반사합니다.

그런데 그런 반사를 이용해서 건물내에서 와이파이가 잘 수신될 수 있게 설계하는 것은 쉽지 않다고 하네요. 오히려 원래 wifi 파와 반사된 파가 간섭해서 신호가 더 망가질 확률이 더 높다고 합니다.</el-col>
            </el-row>
            <div class="btn-area">
                <el-button>등록</el-button>
                <el-button>취소</el-button>
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
    tableData: [
      {contants: '제목을 선택하면 상세화면으로 이동합니다', name: '홍길동', date: '2019.00.00 HH:MM'},
      {contants: '제목을 선택하면 상세화면으로 이동합니다', name: '홍길동', date: '2019.00.00 HH:MM'}
    ],
    options: [{
      value: '전체',
      label: '전체'
    }, {
      value: '키워드',
      label: '키워드'
    }, {
      value: '답변',
      label: '답변'
    }],
    value: '',
    radio: '1',
    input: '',
    input1: '',
    input2: '',
    textarea: ''
  })
}
</script>
