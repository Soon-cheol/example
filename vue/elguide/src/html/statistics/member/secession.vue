<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>회원 통계</h3>
       <div class="heading-option">
        <div class="btn-area">
          <div>
            <el-button type="info" icon="el-icon-arrow-left" size="mini" class="btn-type01"></el-button>
            <span class="date-inquiry">
              <span class="start-date">YYYY.MM.DD</span>
              ~
              <span class="last-date">YYYY.MM.DD</span>
            </span>
            <el-button type="info" icon="el-icon-arrow-right" size="mini" class="btn-type01"></el-button>
          </div>
        </div>
        <div class="btn-area">
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="YYYY.MM.DD">
          </el-date-picker>
          <el-button>조회</el-button>
        </div>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <el-table :data="tableData">
        <el-table-column prop="category0" label="가입">
        </el-table-column>
        <el-table-column label="가입경로">
          <el-table-column prop="category1" label="이메일">
          </el-table-column>
          <el-table-column prop="category2" label="카카오톡">
          </el-table-column>
          <el-table-column prop="category3" label="네이버">
          </el-table-column>
          <el-table-column prop="category4" label="페이스북">
          </el-table-column>
          <el-table-column prop="category5" label="구글">
          </el-table-column>
          <el-table-column prop="category6" label="페이코">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="category7" label="탈퇴"></el-table-column>
        <el-table-column prop="category8" label="탈퇴회원의 회원 유지기간"></el-table-column>
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>시간대별 접속 통계</h3>
      <div class="grid-area graph" style="background-color:#f5f5f5; padding:20px"> <!-- 실작업시 스타일 삭제 -->
        그리드 영역 : graph
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <el-row>
        <el-col :span="4">월간 통계</el-col>
        <el-col :span="20">
          <el-select v-model="value2" clearable
            placeholder="YYYY">
            <el-option v-for="item in options" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value3" clearable placeholder="YYYY">
            <el-option v-for="item in options" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value4" clearable placeholder="탈퇴자">
          <el-option v-for="item in options" :key="item.value" :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
          <el-button size="large">조회</el-button>
          <el-button size="large">엑셀 다운로드</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 <strong>000</strong>명 / 누적 탈퇴자 <strong>00,000</strong>명</p>
      <div class="grid-area graph" style="background-color:#f5f5f5; padding:20px"> <!-- 실작업시 스타일 삭제 -->
        그리드 영역 : graph
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 회원 유지기간 통계</p>
      <el-table :data="tableData2">
        <el-table-column prop="category0" label="평균"></el-table-column>
        <el-table-column prop="category1" label="최소"></el-table-column>
        <el-table-column prop="category2" label="최대"></el-table-column>
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 성별</p>
      <div class="grid-area progress">
        <div class="progress-inner">
          <span class="tit-sub">남 <em>(20,000,000명)</em></span><el-progress :percentage="80" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">녀 <em>(50,000명)</em></span><el-progress :percentage="30" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 커플여부</p>
      <div class="grid-area progress">
        <div class="progress-inner">
          <span class="tit-sub">싱글 <em>(20,000,000명)</em></span><el-progress :percentage="80" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">커플 <em>(50,000명)</em></span><el-progress :percentage="30" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 자녀유무</p>
      <div class="grid-area progress">
        <div class="progress-inner">
          <span class="tit-sub">없음 <em>(20,000,000명)</em></span><el-progress :percentage="80" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">있음 <em>(50,000명)</em></span><el-progress :percentage="30" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 OS</p>
      <div class="grid-area progress">
        <div class="progress-inner">
          <span class="tit-sub">iOS <em>(20,000,000명)</em></span><el-progress :percentage="80" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">Android <em>(50,000명)</em></span><el-progress :percentage="30" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">YYYY년 MM월 탈퇴자 연령</p>
      <div class="grid-area progress">
        <div class="progress-inner">
          <span class="tit-sub">10대 <em>(20,000,000명)</em></span><el-progress :percentage="40" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">20대 <em>(50,000명)</em></span><el-progress :percentage="30" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">30대 <em>(20,000,000명)</em></span><el-progress :percentage="80" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">40대 <em>(50,000명)</em></span><el-progress :percentage="60" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">50대 <em>(20,000,000명)</em></span><el-progress :percentage="20" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
        <div class="progress-inner">
          <span class="tit-sub">기타 <em>(50,000명)</em></span><el-progress :percentage="30" class="width85" :stroke-width="20" :text-inside="true"></el-progress>
        </div>
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
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }],
    tableData: [
      {category0: '000', category1: '00', category2: '00', category3: '00', category4: '00', category5: '00', category6: '00', category7: '0', category8: '.1일/1인'}
    ],
    tableData2: [
      {category0: '000', category1: '00', category2: '00'}
    ],
    methods: {
      format (percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`
      }
    },
    value: '',
    value2: '',
    value3: '',
    value4: ''
  })
}
</script>
<style scoped>
.btn-type01{padding:2px !important;}
.date-inquiry{font-size:13px; padding:0 10px; vertical-align:middle;}
.heading-option .btn-area{float:left;}
.heading-option .btn-area:last-child{float:right;}
.heading-option::after{content:""; display:block; clear:both;}
.progress{padding:20px; border:1px solid #ddd;}
.el-progress{display: inline-block;}
.progress .tit-sub{display:inline-block; width:170px;}
.progress-inner{padding:5px;}

</style>
