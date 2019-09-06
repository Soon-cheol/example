<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>이벤트</h3>
            <el-row>
                <el-col :span="4">유형</el-col>
                <el-col :span="20">
                    자유형
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">제목</el-col>
                <el-col :span="20">
                    Lifeplus App 런칭 기념 이벤트
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">진행기간</el-col>
                <el-col :span="20">
                    2019.06.10 ~ 2019.06.10
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button></div>
            </div>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    value: '',
    value1: '',
    radio: '1',
    input1: '',
    input2: ''
  })
}
</script>
<style scoped>
/* .line-name .el-col {height:90px} */
.line-name .el-col img {max-width: 100px;}
.el-row>div.bg-fffcfc{background: #fffcfc}
.el-row>div.bg-fff{background: #fff}
.el-progress{display:inline-block; margin-left:10px;}
</style>
