<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Line 관리</h3>
            <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="4" class="table">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">상태</el-col>
                <el-col :span="10" class="ranking-radio">
                    <el-radio v-model="radio" label="1">전체</el-radio>
                    <el-radio v-model="radio" label="2">공개</el-radio>
                    <el-radio v-model="radio" label="3">비공개</el-radio>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">검색</el-col>
                <el-col :span="10">
                    <el-input placeholder="Line명을 입력하세요" v-model="input1" class="width50" clearable></el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button >검색</el-button>
                <el-button>초기화</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData" :default-sort="{prop: 'contants, subscriber'}">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="category2" label="카테고리" width="120"></el-table-column>
                <el-table-column prop="lineName" label="Line 명" align="left"></el-table-column>
                <el-table-column prop="contants" label="콘텐츠" width="120" sortable></el-table-column>
                <el-table-column prop="subscriber" label="구독자" width="120" sortable>
                  <template slot-scope="scope">
                    <router-link v-bind:to="{}">
                      <span @click="popupHidden= true">{{scope.row.subscriber}}</span>
                    </router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="date" label="생성일" width="120" ></el-table-column>
                <el-table-column prop="visible" label="상태" width="100" ></el-table-column>
            </el-table>
            <div class="btn-area right">
                <el-button>신규등록</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <el-dialog title="구독자 통계" :visible.sync="popupHidden">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
              <p class="tit-sub">전체 구독자 0,000명</p>
              <p class="tit-sub">성별</p>
              <div class="subscriber-area">
                <div class="grid-area progress">
                  <div class="progress-inner">
                    <span class="tit-sub">남</span>
                    <el-progress :percentage="80" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">녀</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                </div>
              </div>
              <p class="tit-sub">커플 여부</p>
              <div class="subscriber-area">
                <div class="grid-area progress">
                  <div class="progress-inner">
                    <span class="tit-sub">싱글</span>
                    <el-progress :percentage="80" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">커플</span>
                    <el-progress :percentage="10.2" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                </div>
              </div>
              <p class="tit-sub">자녀 유무</p>
              <div class="subscriber-area">
                <div class="grid-area progress">
                  <div class="progress-inner">
                    <span class="tit-sub">없음</span>
                    <el-progress :percentage="80.4" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">있음</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                </div>
              </div>
              <p class="tit-sub">연령</p>
              <div class="subscriber-area">
                <div class="grid-area progress">
                  <div class="progress-inner">
                    <span class="tit-sub">10대</span>
                    <el-progress :percentage="80.4" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">20대</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">30대</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">40대</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">50대</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                  <div class="progress-inner">
                    <span class="tit-sub">기타</span>
                    <el-progress :percentage="100" class="width75" :stroke-width="20" :text-inside="true"></el-progress>
                    <span class="txt">0,000명</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- temp-cont : End -->
        </el-dialog>
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    popupHidden: true,
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    tableData: [
      {num: '1', lineName: '론니플래닛11', category1: 'Financial', category2: '재테크', contants: '1', subscriber: '1', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '2', subscriber: '2', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '3', subscriber: '3', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '4', subscriber: '4', date: '2019.05.29', visible: '공개'},
      {num: '1', lineName: '론니플래닛', category1: 'Financial', category2: '재테크', contants: '5', subscriber: '5', date: '2019.05.29', visible: '공개'}
    ],
    value: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
