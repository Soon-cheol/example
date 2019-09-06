<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>이벤트</h3>
            <el-row>
                <el-col :span="4">제목</el-col>
                <el-col :span="20">
                    Lifeplus App 런칭 기념 이벤트
                </el-col>
            </el-row>
             <el-row>
                <el-col :span="4">참여제한</el-col>
                <el-col :span="20">
                    제한 없음
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">진행기간</el-col>
                <el-col :span="20">
                    2019.06.10 ~ 2019.06.10
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">당첨발표</el-col>
                <el-col :span="20">
                    발표 전
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>참여현황</h3>
            <el-date-picker
                v-model="value"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date">
            </el-date-picker>
            <el-select class="mgr10" v-model="value1" clearable placeholder="일별참여자">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button size="large" class="va-bottom">그래프</el-button>
            <el-button size="large" class="va-bottom">엑셀 다운로드</el-button>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <line-chart :data="{'2017-01-01': 11, '2017-01-02': 6, '2017-01-03': 10, '2017-01-04': 20, '2017-01-05': 5}"></line-chart>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3 class="di-ib">
                응답현황
                <el-button class="mgl10 mgb10">엑셀 다운로드</el-button>
            </h3>
            <el-row>
                <el-col :span="4">전체 응답자</el-col>
                <el-col :span="20">0,000명</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">1번 문항</el-col>
                <el-col :span="20">1번 000명(00%) 2번 000명(99%)</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">2번 문항</el-col>
                <el-col :span="20">1번 000명(00%) 2번 000명(99%)</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">3번 문항</el-col>
                <el-col :span="20">1번 000명(00%) 2번 000명(99%)</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">4번 문항</el-col>
                <el-col :span="20">주관식은 엑셀 문서로 확인하세요.</el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button></div>
            </div>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    options: [{
      value: '일별 중복 참여자',
      label: '일별 중복 참여자'
    }, {
      value: '일별 총 참여자',
      label: '일별 총 참여자'
    }],
    tableData: [
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '1', subscriber: '1', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '2', subscriber: '2', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '3', subscriber: '3', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '4', subscriber: '4', date: '2019.05.29', visible: '전시대기'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', division: '구분', contants: '5', subscriber: '5', date: '2019.05.29', visible: '전시대기'}
    ],
    value: '',
    value1: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
