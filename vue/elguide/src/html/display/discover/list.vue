<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>Discover 목록</h3>
      <el-row class="table">
        <el-col :span="4">기간 지정</el-col>
        <el-col :span="20">
          <el-date-picker
            v-model="value"
            class="width40"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
          <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width30" clearable></el-input>
        </el-col>
      </el-row>
      <div class="btn-area">
        <el-button>검색</el-button>
        <el-button>초기화</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-comt-wrap">
      <!-- temp-cont : Start -->
      <!-- <div class="temp-cont el-calendar">
        <el-calendar v-model="value"></el-calendar>
      </div> -->
      <div data-v-370a662c="" class="el-calendar">
        <div class="el-calendar__header">
          <div class="el-calendar__title">2019 년 8월</div>
          <div class="el-calendar__button-group">
            <div class="el-button-group">
              <button type="button" class="el-button el-button--plain el-button--mini"><span>지난달</span></button>
              <button type="button" class="el-button el-button--plain el-button--mini"><span>오늘</span></button>
              <button type="button" class="el-button el-button--plain el-button--mini"><span>다음달</span></button>
            </div>
          </div>
        </div>
        <div class="el-calendar__body">
          <table cellspacing="0" cellpadding="0" class="el-calendar-table">
            <thead>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </thead>
            <tbody>
              <tr class="el-calendar-table__row">
                <td class="prev">
                  <div class="el-calendar-day"><span>29</span></div>
                </td>
                <td class="prev">
                  <div class="el-calendar-day"><span>30</span></div>
                </td>
                <td class="prev">
                  <div class="el-calendar-day"><span>31</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>1</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>2</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>3</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>4</span></div>
                </td>
              </tr>
              <tr class="el-calendar-table__row">
                <td class="current is-selected is-today">
                  <div class="el-calendar-day"><span>5</span></div>
                </td>
                <td class="current is-disabled">
                  <div class="el-calendar-day"><span>6</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>7</span></div>
                </td><td class="current">
                  <div class="el-calendar-day"><span>8</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>9</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>10</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>11</span></div>
                </td>
              </tr>
              <tr class="el-calendar-table__row">
                <td class="current">
                  <div class="el-calendar-day"><span>12</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>13</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>14</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>15</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>16</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>17</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>18</span></div>
                </td>
              </tr>
              <tr class="el-calendar-table__row">
                <td class="current">
                  <div class="el-calendar-day"><span>19</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>20</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>21</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>22</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>23</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>24</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>25</span></div>
                </td>
              </tr>
              <tr class="el-calendar-table__row">
                <td class="current">
                  <div class="el-calendar-day"><span>26</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>27</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>28</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>29</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>30</span></div>
                </td>
                <td class="current">
                  <div class="el-calendar-day"><span>31</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>1</span></div>
                </td>
              </tr>
              <tr class="el-calendar-table__row">
                <td class="next">
                  <div class="el-calendar-day"><span>2</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>3</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>4</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>5</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>6</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>7</span></div>
                </td>
                <td class="next">
                  <div class="el-calendar-day"><span>8</span></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
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
        </div>
        <!-- 금융, 넌 Money : Start -->
        <div class="btn-area right mb10 mt10">
          <span class="tit-sub">
            금융, 넌 Money
          </span>
          <span class="tit-sub">
            <em class="tit-name">공개여부</em>
            <el-radio v-model="radio" label="1">공개</el-radio>
            <el-radio v-model="radio" label="2">비공개</el-radio>
          </span>
        </div>
        <el-table :data="tableData" :row-class-name="tableRowClassName1" :span-method="arraySpanMethod1" style="width: 100%">
          <el-table-column prop="titleNone" label="순서" width="80">
          </el-table-column>
          <el-table-column prop="title" label="Line명" align="left">
          </el-table-column>
          <el-table-column prop="line" label="구분" align="left">
          </el-table-column>
          <el-table-column prop="content" label="콘텐츠 제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.content}}
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- 금융, 넌 Money : End-->
        <!-- 건강 이거 하나면 오케이 : Start -->
        <div class="btn-area right mb10 mt10">
          <span class="tit-sub">
            건강 이거 하나면 오케이
          </span>
          <span class="tit-sub">
            <em class="tit-name">공개여부</em>
            <el-radio v-model="radio" label="1">공개</el-radio>
            <el-radio v-model="radio" label="2">비공개</el-radio>
          </span>
        </div>
        <el-table :data="tableData2" :row-class-name="tableRowClassName2" :span-method="arraySpanMethod2" style="width: 100%">
          <el-table-column prop="titleNone" label="순서" width="80">
          </el-table-column>
          <el-table-column prop="title" label="Line명" align="left">
          </el-table-column>
          <el-table-column prop="line" label="구분" align="left">
          </el-table-column>
          <el-table-column prop="content" label="콘텐츠 제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.content}}
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- 건강 이거 하나면 오케이 : End-->
        <!-- 일상에 힐링을 Plus : Start -->
        <div class="btn-area right mb10 mt10">
          <span class="tit-sub">
            일상에 힐링을 Plus
          </span>
          <span class="tit-sub">
            <em class="tit-name">공개여부</em>
            <el-radio v-model="radio" label="1">공개</el-radio>
            <el-radio v-model="radio" label="2">비공개</el-radio>
          </span>
        </div>
        <el-table :data="tableData3" :row-class-name="tableRowClassName2" :span-method="arraySpanMethod3" style="width: 100%">
          <el-table-column prop="titleNone" label="순서" width="80">
          </el-table-column>
          <el-table-column prop="title" label="Line명" align="left">
          </el-table-column>
          <el-table-column prop="line" label="구분" align="left">
          </el-table-column>
          <el-table-column prop="content" label="콘텐츠 제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.content}}
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- 일상에 힐링을 Plus : End-->
        <!-- 매일매일 자기발전소 : Start -->
        <div class="btn-area right mb10 mt10">
          <span class="tit-sub">
            매일매일 자기발전소
          </span>
          <span class="tit-sub">
            <em class="tit-name">공개여부</em>
            <el-radio v-model="radio" label="1">공개</el-radio>
            <el-radio v-model="radio" label="2">비공개</el-radio>
          </span>
        </div>
        <el-table :data="tableData4" :row-class-name="tableRowClassName2" :span-method="arraySpanMethod4" style="width: 100%">
          <el-table-column prop="titleNone" label="순서" width="80">
          </el-table-column>
          <el-table-column prop="title" label="Line명" align="left">
          </el-table-column>
          <el-table-column prop="line" label="구분" align="left">
          </el-table-column>
          <el-table-column prop="content" label="콘텐츠 제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.content}}
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- 매일매일 자기발전소 : End-->
        <!-- 여행가고 싶을때 : Start -->
        <div class="btn-area right mb10 mt10">
          <span class="tit-sub">
            여행가고 싶을때
          </span>
          <span class="tit-sub">
            <em class="tit-name">공개여부</em>
            <el-radio v-model="radio" label="1">공개</el-radio>
            <el-radio v-model="radio" label="2">비공개</el-radio>
          </span>
        </div>
        <el-table :data="tableData2" :row-class-name="tableRowClassName2" :span-method="arraySpanMethod2" style="width: 100%">
          <el-table-column prop="titleNone" label="순서" width="80">
          </el-table-column>
          <el-table-column prop="title" label="Line명" align="left">
          </el-table-column>
          <el-table-column prop="line" label="구분" align="left">
          </el-table-column>
          <el-table-column prop="content" label="콘텐츠 제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.content}}
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- 여행가고 싶을때 : End-->
      </div>
      <!-- temp-cont : End -->
    </div>
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tableData: [
      {titleNone: '대', title: 'Weather News Line', line: '리스티클형', content: '콘텐츠 제목을 클릭하면 콘텐츠 상세로 이동'},
      {titleNone: '대', title: 'Weather News Line', line: '리스티클형', content: '콘텐츠 제목을 클릭하면 콘텐츠 상세로 이동'},
      {titleNone: '대', title: 'Weather News Line', line: '리스티클형', content: '콘텐츠 제목을 클릭하면 콘텐츠 상세로 이동'},
      {titleNone: '대', title: 'Weather News Line', line: '리스티클형', content: '콘텐츠 제목을 클릭하면 콘텐츠 상세로 이동'},
      {titleNone: '소', title: '', line: '', content: ''}
    ],
    tableData2: [
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'}

    ],
    tableData3: [
      {titleNone: '소', title: 'Weather News Line', line: '리스티클형', content: '콘텐츠 제목을 클릭하면 해당 콘텐츠 상세로 이동합니다.'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'}

    ],
    tableData4: [
      {titleNone: '소', title: 'Weather News Line', line: '리스티클형', content: '콘텐츠 제목을 클릭하면 해당 콘텐츠 상세로 이동합니다.'},
      {titleNone: '소', title: 'Weather News Line', line: '유튜브형', content: '콘텐츠 제목을 클릭하면 해당 콘텐츠 상세로 이동합니다.'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'},
      {titleNone: '소', title: '', line: '', content: '콘텐츠 선택'}

    ],
    radio: '1',
    input1: '',
    value: null
  }),
  methods: {
    arraySpanMethod1 ({row, column, rowIndex, columnIndex}) {
      if (columnIndex) {
        if (rowIndex === 5) {
          return [0, 1, 2, 3]
        }
      }
    },
    arraySpanMethod2 ({row, column, rowIndex, columnIndex}) {
      if (columnIndex) {
        if (rowIndex === 1 && rowIndex === 2 && rowIndex === 3 && rowIndex === 4) {
          return [0, 1, 2, 3]
        }
      }
    },
    arraySpanMethod3 ({row, column, rowIndex, columnIndex}) {
      if (columnIndex) {
        if (rowIndex === 2 && rowIndex === 3 && rowIndex === 4) {
          return [1, 2, 3]
        }
      }
    },
    arraySpanMethod4 ({row, column, rowIndex, columnIndex}) {
      if (columnIndex) {
        if (rowIndex === 3 && rowIndex === 4) {
          return [0, 1, 2, 3]
        }
      }
    },
    tableRowClassName1 ({row, rowIndex}) {
      if (rowIndex === 4) {
        return 'select-row'
      }
      return ''
    },
    tableRowClassName2 ({row, rowIndex}) {
      if (rowIndex === 1 || rowIndex === 3) {
        return 'select-row'
      }
      return ''
    }
  }
}
</script>
<style scoped>
.btn-type01{padding:2px !important;}
.date-inquiry{padding:0 10px; font-size:13px; vertical-align:middle;}
.temp-comt-wrap{display:flex; flex-direction:row; margin-top:20px;}
.temp-comt-wrap .temp-cont:last-child{width:100%; margin-left:20px; margin-top:0 !important;}
.btn-area.right::after{content:""; display:block; clear:both;}
.btn-area.right .tit-sub:first-child{float:left; margin:0 !important;}
.tit-name{margin-right:20px;}
.mb10{margin-bottom:10px;}
.mt10{margin-top:10px;}
</style>
