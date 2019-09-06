<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>프로모션 관리</h3>
      <el-row>
          <el-col :span="4" class="required">구분</el-col>
          <el-col :span="6">
              <el-select v-model="value" clearable placeholder="선택">
                  <el-option v-for="item in options" :key="item.value" :label="item.label"
                      :value="item.value">
                  </el-option>
              </el-select>
          </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">프로모션명</el-col>
        <el-col :span="20">
          <p class="txt-point txt-point-type01">프로모션명은 사용자 화면에 노출되지 않습니다.</p>
          <el-input placeholder="" v-model="input1" class="width100" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">전시기간</el-col>
        <el-col :span="10">
          <el-date-picker
            v-model="value2"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">이미지</el-col>
        <el-col :span="20">
          <div class="input-thumenail">사이즈1 ( 000 X 000 )<input type="file"><el-button @click="imgViewPop = true">이미지 보기</el-button></div>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="4">타겟링크</el-col>
          <el-col :span="20">
            <div class="el-col-div">
              <el-radio v-model="radio" label="1" class="radio-type01">콘텐츠</el-radio>
              <el-button @click="targetlinkselectPop01 = true">선택하기</el-button>
              <el-button  class="delete" plain  @click="centerDialogVisible = true">연결한 콘텐츠 제목 표시</el-button>
            </div>
            <div class="el-col-div">
              <el-radio v-model="radio" label="2" class="radio-type01">URL</el-radio>
              <el-input placeholder="" v-model="input1" class="width50">
                <template slot="prepend">Http://</template>
              </el-input>
              <el-button size="large va-type01">URL 체크</el-button>
            </div>
            <div class="el-col-div">
              <el-radio v-model="radio" label="3" class="radio-type01">메뉴</el-radio>
              <el-button @click="targetlinkselectPop02 = true">선택하기</el-button>
              <el-button  class="delete" plain  @click="centerDialogVisible = true">연결한 메뉴명 표시</el-button>
            </div>
            <div class="el-col-div">
              <el-radio v-model="radio" label="4" class="radio-type01">공지</el-radio>
              <el-button @click="targetlinkselectPop03 = true">선택하기</el-button>
              <el-button  class="delete" plain  @click="centerDialogVisible = true">연결한 게시글 제목 표시</el-button>
            </div>
          </el-col>
      </el-row>
    </div>
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="btn-area">
        <el-button>등록</el-button>
        <el-button>취소</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-------------------- Dialog : Start -------------------->
    <!-- 콘텐츠 선택하기 : Start -->
    <el-dialog title="콘텐츠 선택" :visible.sync="targetlinkselectPop01">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-row>
          <el-col :span="4">카테고리</el-col>
          <el-col :span="20">
            <el-select v-model="value4" clearable placeholder="전체">
              <el-option v-for="item in options3" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">기간</el-col>
          <el-col :span="10">
            <el-date-picker
              v-model="value2"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">키워드</el-col>
          <el-col :span="20">
            <el-select v-model="value4" clearable placeholder="전체">
              <el-option v-for="item in options5" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width30" clearable></el-input>
          </el-col>
        </el-row>
        <div class="btn-area">
          <el-button size="large">검색</el-button>
            <el-button size="large">초기화</el-button>
        </div>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <p class="tit-sub">000개</p>
        <el-table :data="tableData">
          <el-table-column prop="num" label="번호" width="60"></el-table-column>
          <el-table-column prop="category2" label="카테고리" align="left" width="110"></el-table-column>
          <el-table-column prop="category3" label="Line명" align="left" width="110"></el-table-column>
          <el-table-column prop="category4" label="구분" align="left" width="110"></el-table-column>
          <el-table-column prop="title" label="제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.title}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="category5" label="상태" width="110"></el-table-column>
          <el-table-column prop="select" label="선택" width="100">
            <el-button>선택</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
      </div>
      <!-- temp-cont : End -->
    </el-dialog>
    <!-- 콘텐츠 선택하기 : End -->
    <!-- 메뉴 선택하기 : Start -->
    <el-dialog title="메뉴 선택" :visible.sync="targetlinkselectPop02">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-table :data="tableData2">
          <el-table-column prop="displayname" label="화면명" align="left"></el-table-column>
          <el-table-column prop="select" label="선택" width="150">
            <el-button>선택</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
    </el-dialog>
    <!-- 메뉴 선택하기 : End -->
    <!-- 공지 선택하기 : Start -->
    <el-dialog title="공지 선택" :visible.sync="targetlinkselectPop03">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-row>
          <el-col :span="4">카테고리</el-col>
          <el-col :span="20">
            <el-select v-model="value5" clearable placeholder="전체">
              <el-option v-for="item in options4" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">키워드</el-col>
          <el-col :span="20">
            <el-radio v-model="radio3" label="1">전체</el-radio>
            <el-radio v-model="radio3" label="2">제목</el-radio>
            <el-radio v-model="radio3" label="3">본문</el-radio>
            <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
          </el-col>
        </el-row>
        <div class="btn-area">
          <el-button size="large">검색</el-button>
            <el-button size="large">초기화</el-button>
        </div>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <p class="tit-sub">000개</p>
        <el-table :data="tableData3">
          <el-table-column prop="num" label="번호" width="60"></el-table-column>
          <el-table-column prop="category3" label="구분" align="left" width="150"></el-table-column>
          <el-table-column prop="title" label="제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.title}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="select" label="선택" width="100">
            <el-button>선택</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
      </div>
      <!-- temp-cont : End -->
    </el-dialog>
    <!-- 공지 선택하기 : End -->
    <!-- 선택하기 리스트 삭제 : Start -->
    <el-dialog
        title=""
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>정말 삭제하시겠습니까?</span>
        <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="centerDialogVisible = false">확인</el-button>
        <el-button @click="centerDialogVisible = false">취소</el-button>
        </span>
    </el-dialog>
    <!-- 선택하기 리스트 삭제 : End -->
    <!-- 이미지 보기 : Start -->
    <el-dialog
        :visible.sync="imgViewPop"
        width="30%"
        center>
        <span><img src="@/assets/test.png"></span>
        <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="imgViewPop = false">확인</el-button>
        <el-button @click="imgViewPop = false">취소</el-button>
        </span>
    </el-dialog>
    <!-- 이미지 보기 : End -->
    <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    targetlinkselectPop01: false,
    targetlinkselectPop02: false,
    targetlinkselectPop03: false,
    centerDialogVisible: false,
    imgViewPop: false,
    checked: true,
    options: [{
      value: 'Today',
      label: 'Today'
    }, {
      value: 'Discover',
      label: 'Discover'
    }, {
      value: '일반팝업',
      label: '일반팝업'
    }, {
      value: '전체팝업',
      label: '전체팝업'
    }],
    options2: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }],
    options3: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }],
    options4: [{
      value: '공지사항',
      label: '공지사항'
    }, {
      value: '당첨자발표',
      label: '당첨자발표'
    }],
    options5: [{
      value: '전체',
      label: '전체'
    }, {
      value: '제목',
      label: '제목'
    }, {
      value: '본문',
      label: '본문'
    }, {
      value: 'Line명',
      label: 'Line명'
    }, {
      value: '태그',
      label: '태그'
    }, {
      value: '콘텐츠ID',
      label: '콘텐츠ID'
    }],
    tableData: [
      {num: '20', category1: 'Physical', category2: '야구', category3: 'BBC뉴스', category4: '유튜브형', category5: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.'}
    ],
    tableData2: [
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'},
      {displayname: 'Today'}
    ],
    tableData3: [
      {num: '20', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '19', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '18', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '17', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '16', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '15', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '14', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '13', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '12', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'},
      {num: '11', category3: '공지사항', title: '공지사항 제목을 선택하면 상세 화면으로 이동합니다.'}
    ],
    value: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    radio: '',
    radio2: '1',
    radio3: '1',
    input1: '',
    input2: ''
  })
}
</script>
<style scoped>
.link-url{
    overflow: hidden;
}
.link-url > div{
    float:left;
}
.link-url > div + div{
    margin-left: 2px;
}
.txt-point-type01{
  margin-bottom: 10px;
  margin-top: 0;
}
.radio-type01{
  width: 60px;
}
.va-type01{vertical-align: bottom;}
.va-type02{vertical-align: text-top;}
</style>
