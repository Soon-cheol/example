<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>Suggest 관리</h3>
      <el-row>
        <el-col :span="4" class="required">전시일자</el-col>
        <el-col :span="8">
          YYYY.MM.DD
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">타이틀1</p>
      <el-row>
        <el-col :span="4" class="required">타이틀명</el-col>
        <el-col :span="20" align="right">
            <el-input
              type="textarea"
              class="width100"
              maxlength="40"
              :autosize="{ minRows: 1, maxRows: 100}"
              placeholder="등록된 타이틀명이 있는 경우 출력"
              v-model="textarea2"
              show-word-limit>
            </el-input>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="heading-option">
        <span class="tit-sub">콘텐츠 선택 </span>
        <el-button>제외</el-button>
        <div class="option">
          <el-button @click="targetlinkselectPop01 = true">콘텐츠 선택</el-button>
        </div>
      </div>
      <el-table :data="tableData2" :default-sort="{prop: 'num'}">
        <!-- loop : 20ea -->
        <el-table-column width="60"><el-checkbox></el-checkbox></el-table-column>
        <el-table-column prop="num" label="순위 조정" width="140" sortable></el-table-column>
        <el-table-column prop="line" label="Line명" align="left" width="250"></el-table-column>
        <el-table-column prop="select" label="구분" width="200"></el-table-column>
        <el-table-column prop="content" align="left" label="제목"></el-table-column>
        <el-table-column prop="image" width="200" label="썸네일 이미지">
          <el-upload
            class="file-uploader mgt10"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>(000X000)</span>
        </el-table-column>
        <!-- //loop : 20ea -->
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">타이틀2</p>
      <el-row>
        <el-col :span="4" class="required">타이틀명</el-col>
        <el-col :span="20" align="right">
            <el-input
              type="textarea"
              class="width100"
              maxlength="40"
              :autosize="{ minRows: 1, maxRows: 100}"
              placeholder="등록된 타이틀명이 있는 경우 출력"
              v-model="textarea2"
              show-word-limit>
            </el-input>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="heading-option">
        <span class="tit-sub">콘텐츠 선택 </span>
        <el-button>제외</el-button>
        <div class="option">
          <el-button @click="targetlinkselectPop01 = true">콘텐츠 선택</el-button>
        </div>
      </div>
      <el-table :data="tableData2" :default-sort="{prop: 'num'}">
        <!-- loop : 20ea -->
        <el-table-column width="60"><el-checkbox></el-checkbox></el-table-column>
        <el-table-column prop="num" label="순위 조정" width="140" sortable></el-table-column>
        <el-table-column prop="line" label="Line명" align="left" width="250"></el-table-column>
        <el-table-column prop="select" label="구분" width="200"></el-table-column>
        <el-table-column prop="content" align="left" label="제목"></el-table-column>
        <el-table-column prop="image" width="200" label="썸네일 이미지">
          <el-upload
            class="file-uploader mgt10"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>(000X000)</span>
        </el-table-column>
        <!-- //loop : 20ea -->
      </el-table>
    </div>
    <!-- temp-cont : End -->
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
    <el-dialog title="콘텐츠 선택" :visible.sync="targetlinkselectPop01" width="70%">
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
          <el-col :span="15">
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
              <el-option v-for="item in options3" :key="item.value" :label="item.label"
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
        <el-button class="mb10">콘텐츠 선택</el-button>
        <el-table :data="tableData1" :default-sort="{prop: 'lookupOrder, likeOrder, shareOrder, bookmarkOrder, registerOrder'}">
          <el-table-column prop="num" label="번호" width="60"></el-table-column>
          <el-table-column width="60"><el-checkbox></el-checkbox></el-table-column>
          <el-table-column prop="category2" label="카테고리" align="left" width="80"></el-table-column>
          <el-table-column prop="category3" label="Lineㅊㅊㅋ명" align="left" width="100"></el-table-column>
          <el-table-column prop="category4" label="구분" align="left" width="100"></el-table-column>
          <el-table-column prop="title" label="제목" align="left">
            <template slot-scope="scope">
              <router-link
              v-bind:to="{}">
                  {{scope.row.title}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="lookupOrder" label="조회" width="130" sortable></el-table-column>
          <el-table-column prop="likeOrder" label="좋아요" width="130" sortable></el-table-column>
          <el-table-column prop="shareOrder" label="공유" width="130" sortable></el-table-column>
          <el-table-column prop="bookmarkOrder" label="북마크" width="130" sortable></el-table-column>
          <el-table-column prop="registerOrder" label="등록순" width="130" sortable></el-table-column>
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
    <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    targetlinkselectPop01: false,
    checked: true,
    options: [{
      value: 'Today',
      label: 'Today'
    }, {
      value: 'Discover',
      label: 'Discover'
    }, {
      value: '팝업',
      label: '팝업'
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
    tableData1: [
      {num: '20', category1: 'Physical', category2: '야구', category3: '유튜브형', category4: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', registerOrder: ''},
      {num: '20', category1: 'Physical', category2: '야구', category3: '유튜브형', category4: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', registerOrder: ''},
      {num: '20', category1: 'Physical', category2: '야구', category3: '유튜브형', category4: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', registerOrder: ''},
      {num: '20', category1: 'Physical', category2: '야구', category3: '유튜브형', category4: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', registerOrder: ''},
      {num: '20', category1: 'Physical', category2: '야구', category3: '유튜브형', category4: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.', lookupOrder: '000', likeOrder: '000', shareOrder: '000', bookmarkOrder: '000', registerOrder: ''}
    ],
    tableData2: [
      {num: '1', line: 'Weather News Line', select: '유튜브형', content: '선택한 콘텐츠 제목 표시'},
      {num: '2', line: 'Weather News Line', select: '유튜브형', content: '선택한 콘텐츠 제목 표시'},
      {num: '3', line: 'Weather News Line', select: '유튜브형', content: '선택한 콘텐츠 제목 표시'}
    ],
    tableData3: [
      {num: '20', category1: 'Physical', category2: '야구', category3: 'BBC뉴스', category4: '유튜브형', category5: '전시대기', title: '제목을 선택하면 상세화면으로 이동합니다.'}
    ],
    value: '',
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    radio: '',
    radio2: '1',
    radio3: '1',
    input1: '',
    textarea2: ''
  }),
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  }
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
.mb10{margin-bottom:10px;}
</style>
