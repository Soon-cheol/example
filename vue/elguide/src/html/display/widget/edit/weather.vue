<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>위젯 수정: 날씨</h3>
      <p class="tit-sub">기온 + 기상 조건</p>
      <p class="txt-point mb-10">감성 문구는 공백 포함 12글자까지 입력 가능합니다.</p>
      <el-table :data="tableData">
        <el-table-column prop="category0" label="기온" width="70">
        </el-table-column>
        <el-table-column label="기상조건">
          <el-table-column prop="category1" label="맑음">
            <el-input placeholder="" v-model="input1"></el-input>
          </el-table-column>
          <el-table-column prop="category2" label="구름 많음">
            <el-input placeholder="" v-model="input2" clearable></el-input>
          </el-table-column>
          <el-table-column prop="category3" label="흐림">
            <el-input placeholder="" v-model="input3" clearable></el-input>
          </el-table-column>
          <el-table-column prop="category4" label="비">
            <el-input placeholder="" v-model="input4" clearable></el-input>
          </el-table-column>
          <el-table-column prop="category5" label="비/눈">
            <el-input placeholder="" v-model="input5" clearable></el-input>
          </el-table-column>
          <el-table-column prop="category6" label="눈">
            <el-input placeholder="" v-model="input6" clearable></el-input>
          </el-table-column>
          <el-table-column prop="category7" label="소나기">
            <el-input placeholder="" v-model="input7" clearable></el-input>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <p class="tit-sub">미세먼지 (필수입력)</p>
      <p class="txt-point mb-10">감성 문구는 공백 포함 12글자까지 입력 가능합니다.</p>
      <el-table :data="tableData2">
        <el-table-column prop="category0" label="미세먼지 기준수치" width="200">
        </el-table-column>
        <el-table-column prop="category1" label="감성 문구">
          <el-input
            type="textarea"
            class="width100"
            maxlength="24"
            :autosize="{ minRows: 1, maxRows: 100}"
            placeholder=""
            v-model="textarea1"
            show-word-limit
            >
          </el-input>
        </el-table-column>
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <!-- 19.07.02 배경이미지 목록 추가 : start -->
    <div class="temp-cont">
      <p class="tit-sub">배경 이미지</p>
      <el-row>
        <el-col :span="2">맑음</el-col>
        <el-col :span="4">
          <el-upload
            class="file-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :span="2">구름많음, 흐림</el-col>
        <el-col :span="4">
          <el-upload
            class="file-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :span="2">비, 비/눈, 소나기</el-col>
        <el-col :span="4">
          <el-upload
            class="file-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :span="2">눈</el-col>
        <el-col :span="4">
          <el-upload
            class="file-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">특별 이미지</el-col>
        <el-col :span="22">
          <el-upload
            class="file-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-date-picker
            v-model="value3"
            class="width50"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
    <!-- 19.07.02 배경이미지 목록 추가 : end -->
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="btn-area">
        <el-button>확인</el-button>
        <el-button>취소</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- 등록 확인 : Start -->
    <el-dialog
      :visible.sync="registConfirmPop"
      width="20%"
      center>
      <span>변경사항을 저장했습니다.</span>
      <span slot="footer" class="dialog-footer">
      <el-button type="main" @click="registConfirmPop = false">확인</el-button>
      </span>
    </el-dialog>
    <!-- 등록 확인 : End -->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    registConfirmPop: false,
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
      {category0: '0ºC 미만', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '0ºC ~ 5ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '5ºC ~ 10ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '10ºC ~ 12ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '12ºC ~ 17ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '17ºC ~ 20ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '20ºC ~ 23ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '23ºC ~ 27ºC', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''},
      {category0: '27ºC 이상', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '', category7: '', category8: ''}
    ],
    tableData2: [
      {category0: '최고 좋음 (0~15)*', category1: ''},
      {category0: '좋음 (16~30)*', category1: ''},
      {category0: '양호 (31~40)*', category1: ''},
      {category0: '보통 (41~50)*', category1: ''},
      {category0: '나쁨 (51~75)*', category1: ''},
      {category0: '상당히 나쁨 (76~100)*', category1: ''},
      {category0: '매우 나쁨 (101~150)*', category1: ''},
      {category0: '최악 (151~)*', category1: ''}
    ],
    textarea1: '',
    textarea2: '',
    value: '',
    value3: '',
    radio: '1',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    imageUrl: ''
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
.ml-10 {margin-left:10px;}
.mb-10 {margin-bottom:10px;}
.link-url{
    overflow: hidden;
}
.link-url > div{
    float:left;
}
.link-url > div + div{
    margin-left: 2px;
}
.el-row .table>div.date-picker{
    display: inline-block;
    margin: 0 20px 0 -10px;
}
.file-uploader{display:inline-block; vertical-align:middle; margin-right:10px;}
</style>
