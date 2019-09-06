<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>이벤트</h3>
            <el-row>
                <el-col :span="4">유형</el-col>
                <el-col :span="20">
                    항목선택 글자형
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">제목</el-col>
                <el-col :span="20">
                    Lifeplus App 런칭 기념 이벤트
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">소제목</el-col>
                <el-col :span="20">
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
                <el-col :span="4">참여자</el-col>
                <el-col :span="20">
                    <el-button>엑셀 다운로드</el-button>
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
            <el-select v-model="value1" clearable placeholder="일별참여자">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button>그래프</el-button>
            <el-button>엑셀 다운로드</el-button>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="grid-area graph" style="background-color:#f5f5f5; padding:20px"> <!-- 실작업시 스타일 삭제 -->
                기존 Admin 그래프와 동일
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>응답상세</h3>
            <p class="tit-sub">설문1. 설문 1번 문항을 출력합니다.</p>
            <el-row>
                <el-col :span="4" align="center">구분</el-col>
                <el-col :span="14">
                    총 응답수 00,000, 응답율 50%
                </el-col>
                <el-col :span="3" align="center">응답수</el-col>
                <el-col :span="3" align="center" class="bg-fffcfc">응답율</el-col>
            </el-row>
            <el-row>
                <el-col :span="4" align="center">보기1</el-col>
                <el-col :span="14">
                    1번 답변을 출력합니다.<el-progress :percentage="80" class="width60" :stroke-width="20" :text-inside="true"></el-progress>
                </el-col>
                <el-col :span="3" align="center" class="bg-fff">000</el-col>
                <el-col :span="3" align="center">00%</el-col>
            </el-row>
            <el-row>
                <el-col :span="4" align="center">보기2</el-col>
                <el-col :span="14">
                    2번 답변을 출력합니다.<el-progress :percentage="40" class="width60" :stroke-width="20" :text-inside="true"></el-progress>
                </el-col>
                <el-col :span="3" align="center" class="bg-fff">000</el-col>
                <el-col :span="3" align="center">00%</el-col>
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
    value: '',
    value1: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
<style scoped>
/* .line-name .el-col {height:90px} */
.line-name .el-col img {max-width: 100px;}
.el-row>div.bg-fffcfc{background: #fffcfc}
.el-row>div.bg-fff{background: #fff}
.el-progress{display:inline-block; margin-left:10px;}
</style>
