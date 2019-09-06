<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>CP 관리</h3>
            <el-row>
                <el-col :span="4" class="required">CP 명</el-col>
                <el-col :span="10">
                  <el-input placeholder="" v-model="input1" clearable></el-input>
                </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" class="required">아이콘</el-col>
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
            <el-row>
              <el-col :span="4">설명</el-col>
              <el-col :span="20">
                  <el-input
                    type="textarea"
                    class="width100"
                    :autosize="{ minRows: 4, maxRows: 100}"
                    placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
                    v-model="textarea2">
                  </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">URL</el-col>
              <el-col :span="20" class="link-url">
                <el-input placeholder="" v-model="input1" class="width50">
                    <template slot="prepend">Http://</template>
                </el-input>
                <el-button size="large">URL 체크</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">앱스토어 URL</el-col>
              <el-col :span="20" class="link-url">
                <el-input placeholder="" v-model="input1" class="width50">
                    <template slot="prepend">Http://</template>
                </el-input>
                <el-button size="large">URL 체크</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">구글플레이 URL</el-col>
              <el-col :span="20" class="link-url">
                <el-input placeholder="" v-model="input1" class="width50">
                    <template slot="prepend">Http://</template>
                </el-input>
                <el-button size="large">URL 체크</el-button>
              </el-col>
            </el-row>
            <div class="btn-area">
                <el-button>등록</el-button>
                <el-button>취소</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
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
    textarea2: '',
    value: '',
    value2: '',
    value3: '',
    value4: '',
    input1: '',
    input2: '',
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
</style>
