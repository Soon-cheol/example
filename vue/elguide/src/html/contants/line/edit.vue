<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>Line 관리</h3>
      <el-row>
        <el-col :span="4" class="required">카테고리 선택</el-col>
        <el-col :span="10" class="table">
          <el-select v-model="value" clearable placeholder="선택">
            <el-option v-for="item in options" :key="item.value" :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="categoryPop = true">카테고리 관리</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">Line 명</el-col>
        <el-col :span="10">
            <el-input placeholder="" v-model="input1" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="required">썸네일 이미지</el-col>
        <el-col :span="10">
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
        <div class="btn-area">
          <el-button>등록</el-button>
          <el-button>취소</el-button>
        </div>
    </div>
    <!-- temp-cont : End -->
    <!-------------------- Dialog : Start -------------------->
    <!-- 카테고리관리 : Start -->
    <el-dialog title="카테고리 관리"
      :visible.sync="categoryPop"
      width="20%"
      >
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <el-table :data="tableData2">
          <el-table-column label="카테고리명" prop="category">
              <el-input placeholder="카테고리명" v-model="input" class="width100" clearable></el-input>
          </el-table-column>
          <el-table-column prop="admin" label="관리" width="100">
            <el-button @click="categoryEdit = true">수정</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- temp-cont : End -->
    </el-dialog>
    <!-- 카테고리관리 : End -->
    <!-- 카테고리 수정 : Start -->
    <el-dialog
      :visible.sync="categoryEdit"
      width="30%"
      center>
      <span>해당 카테고리를 수정하시겠습니까?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="categoryEdit = false">확인</el-button>
        <el-button @click="categoryEdit = false">취소</el-button>
      </span>
    </el-dialog>
    <!-- 카테고리 수정 : End -->
    <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    categoryPop: false,
    categoryCreate: false,
    categoryCreateInner: false,
    categoryEdit: false,
    categoryEditInner: false,
    categoryDelete: false,
    categoryDeleteInner: false,
    categoryDeleteInner2: false,
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
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    tableData2: [
      {category: 'Financial', admin: ''},
      {category: 'Financial', admin: ''},
      {category: 'Financial', admin: ''},
      {category: 'Financial', admin: ''},
      {category: 'Financial', admin: ''}
    ],
    value: '',
    value2: '',
    value3: '',
    value4: '',
    input1: '',
    input2: '',
    input3: '',
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
.input-type02{width:110px; display:inline-block;}
</style>
