<!-- Input : Start -->
<template id="layoutInput">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Input</h3>
            <el-input placeholder="basic input" v-model="input1" clearable></el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Readonly Input</h3>
            <el-input placeholder="readonly input" v-model="input2" readonly="readonly"></el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Disabled Input</h3>
            <el-input placeholder="disabled input" v-model="input3" :disabled="true"></el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Password Input</h3>
            <el-input placeholder="password input" v-model="input4" show-password></el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>TimePicker</h3>
            <el-time-select v-model="value2" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="Select time"></el-time-select>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Date Input</h3>
            <el-date-picker v-model="value3" type="datetime" placeholder="Select date and time"></el-date-picker>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Search Input</h3>
            <el-input placeholder="search input" v-model="input5" clearable><i slot="prefix"
                        class="el-input__icon el-icon-search"></i></el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>URL Input</h3>
            <el-input placeholder="Please input" v-model="input1">
                <template slot="prepend">Http://</template>
            </el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>File Input</h3>
            <el-upload
            class="file-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Input : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    value: '',
    value2: '',
    value3: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    imageUrl: ''
  }),
  components: {
    menuTab
  },
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
