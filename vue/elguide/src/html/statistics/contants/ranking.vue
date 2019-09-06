<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>콘텐츠 랭킹</h3>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <el-row>
          <el-col :span="4">기간별 통계</el-col>
          <el-col :span="16" class="stat-table">
            <el-date-picker
              v-model="value"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
            <el-select v-model="value" clearable placeholder="전체" class="width20">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <span><el-checkbox label=""></el-checkbox>&nbsp;&nbsp;전체기간 통계</span>
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
      <template>
          <!-- temp-cont : Start -->
          <div class="temp-cont">
            <el-table :data="tableData" :default-sort="{prop: 'lookupOrder, likeOrder, shareOrder, bookmarkOrder', }">
              <el-table-column prop="num" label="순위" width="80"></el-table-column>
              <el-table-column prop="category2" label="라인" width="130" align="left"></el-table-column>
              <el-table-column prop="category3" label="콘텐츠 제목" width="300" align="left">
                <template slot-scope="scope">
                  <router-link
                  v-bind:to="{}">
                      {{scope.row.category3}}
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column prop="lookupOrder" label="조회" sortable></el-table-column>
              <el-table-column prop="likeOrder" label="좋아요" sortable></el-table-column>
              <el-table-column prop="shareOrder" label="공유" sortable></el-table-column>
              <el-table-column prop="bookmarkOrder" label="북마크" sortable></el-table-column>
              <el-table-column label="유입경로">
                <el-table-column prop="main" label="메인"></el-table-column>
                <el-table-column prop="search" label="검색"></el-table-column>
                <el-table-column prop="category" label="카테고리"></el-table-column>
                <el-table-column prop="banner" label="배너"></el-table-column>
              </el-table-column>
              <el-table-column prop="complate" label="완독율" width="140"></el-table-column>
            </el-table>
          </div>
          <!-- temp-cont : End -->
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
      {num: '20', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '19', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '18', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '17', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '16', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '15', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '14', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '13', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '12', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'},
      {num: '11', category2: '야구', category3: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', main: '000', search: '00', category: '0', banner: '0', complate: '0'}
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
