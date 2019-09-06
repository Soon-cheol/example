<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>전시 콘텐츠 통계</h3>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <template>
        <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Suggest">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <el-row>
                  <el-col :span="4">기간별 통계</el-col>
                  <el-col :span="14" class="stat-table">
                    <el-date-picker
                      v-model="value"
                      type="daterange"
                      range-separator="To"
                      start-placeholder="Start date"
                      end-placeholder="End date">
                    </el-date-picker>
                    <el-select v-model="value" clearable placeholder="전체" class="width30">
                      <el-option v-for="item in options" :key="item.value" :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
              </el-row>
              <div class="btn-area">
                  <el-button>조회</el-button>
                  <el-button>액셀 다운로드</el-button>
              </div>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <el-table :data="tableData" :default-sort="{prop: 'lookupOrder, likeOrder, shareOrder, bookmarkOrder', }">
                <el-table-column prop="num" label="순위" width="80"></el-table-column>
                <el-table-column prop="category2" label="타이틀" align="left" width="200"></el-table-column>
                <el-table-column prop="category3" label="콘텐츠 제목" align="left">
                  <template slot-scope="scope">
                    <router-link
                    v-bind:to="{}">
                        {{scope.row.category3}}
                    </router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="date" label="홈 전시일" width="140" sortable></el-table-column>
                <el-table-column prop="view" label="홈에서 조회수" width="160" sortable></el-table-column>
              </el-table>
            </div>
            <!-- temp-cont : End -->
          </el-tab-pane>
          <el-tab-pane label="Discover">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <el-row>
                  <el-col :span="4">기간별 통계</el-col>
                  <el-col :span="14" class="stat-table">
                    <el-date-picker
                      v-model="value"
                      type="daterange"
                      range-separator="To"
                      start-placeholder="Start date"
                      end-placeholder="End date">
                    </el-date-picker>
                    <el-select v-model="value" clearable placeholder="전체" class="width30">
                      <el-option v-for="item in options" :key="item.value" :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
              </el-row>
              <div class="btn-area">
                  <el-button>조회</el-button>
                  <el-button>액셀 다운로드</el-button>
              </div>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <el-table :data="tableData2" :default-sort="{prop: 'lookupOrder, likeOrder, shareOrder, bookmarkOrder', }">
                <el-table-column prop="num" label="순위" width="80"></el-table-column>
                <!-- <el-table-column prop="category1" label="F/P/M/L" align="left" width="200"></el-table-column> -->
                <el-table-column prop="category2" label="카테고리" align="left" width="200"></el-table-column>
                <el-table-column prop="category3" label="콘텐츠 제목" align="left">
                  <template slot-scope="scope">
                    <router-link
                    v-bind:to="{}">
                        {{scope.row.category3}}
                    </router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="date" label="홈 전시일" width="140" sortable></el-table-column>
                <el-table-column prop="view" label="홈에서 조회수" width="160" sortable></el-table-column>
              </el-table>
            </div>
            <!-- temp-cont : End -->
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        <div class="btn-area right">
          <el-button>엑셀 다운로드</el-button>
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
    options: [{
      value: '전체',
      label: '전체'
    }, {
      value: '질문내용',
      label: '질문내용'
    }, {
      value: '이름',
      label: '이름'
    }, {
      value: '회원번호',
      label: '회원번호'
    }],
    value: '',
    value2: '',
    value3: '',
    value4: '',
    input: '',
    tableData: [
      {num: '20', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '19', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '18', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '17', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '16', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '15', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '14', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '13', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '12', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '11', category2: '주말 여행지 추천', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'}
    ],
    tableData2: [
      {num: '20', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '19', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '18', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '17', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '16', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '15', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '14', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '13', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '12', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'},
      {num: '11', category2: '유튜브형', category3: '제목을 선택하면 상세화면으로 이동합니다. (2)', date: '000', view: '000'}
    ]
  }),
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.heading-option .btn-area{float:left;}
.heading-option .btn-area:last-child{float:right;}
.heading-option::after{content:""; display:block; clear:both;}
</style>
