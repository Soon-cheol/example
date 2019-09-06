<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>FAQ</h3>
            <!-- 19.06.26 해당 부분 삭제 : start -->
            <!-- <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="20">카테고리명</el-col>
            </el-row> -->
            <!-- 19.06.26 해당 부분 삭제 : end -->
            <el-row>
                <el-col :span="4">질문</el-col>
                <el-col :span="20" class="txt-cont">와이파이의 신호도 굴절시킬 수 있나요?
라디오 am같은 경우에는 상대적으로 주파수가 낮아서 전리층에 의해 굴절이 되는데 그렇다면 와이파이같은 경우에는 굴절시킬 방법이 없나요?</el-col>
            </el-row>
            <el-row>
                <el-col :span="4">답변</el-col>
                <el-col :span="20" class="txt-cont">AM 라디오파는 전리층에 의해 반사되어서 지상에서 직선으로 도달되지 않는 위치에서도 이런 반사로 방송이 나오는 경우가 있는데 와이파이도 그렇게 반사를 이용할 수 있는지 물어보는 질문인지요?

(굴절은 서로 다른 매질의 경계에서 직진하지 않고 휘어져 가는 현상을 말합니다. 모든 전자기파가 두 매질의 경계에서 거의 비슷하게 굴절합니다. 전자기파가 굴절하는 정도는 두 매질의 굴절률 차이에 따라 결정되는데, 전자기파의 진동수가 다르더라도 굴절률은 모두 거의 다 같아요.)

대부분의 전자기파는 금속 표면에서 반사합니다. 전리층도 금속의 성질 때문에 반사시키는 것이지요. 그래서 wifi 시그널도 금속 표면에서 반사합니다.

그런데 그런 반사를 이용해서 건물내에서 와이파이가 잘 수신될 수 있게 설계하는 것은 쉽지 않다고 하네요. 오히려 원래 wifi 파와 반사된 파가 간섭해서 신호가 더 망가질 확률이 더 높다고 합니다.</el-col>
            </el-row>
            <div class="btn-area cell">
                <div><el-button>목록</el-button></div>
                <div><el-button>수정</el-button><el-button @click="centerDisplayVisible = true">전시종료</el-button></div>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- 전시 종료 : Start -->
        <el-dialog
            :visible.sync="centerDisplayVisible"
            width="30%"
            center>
            <span>해당 FAQ의 전시를 종료하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="centerDisplayVisible = false">종료</el-button>
            <el-button @click="centerDisplayVisible = false">닫기</el-button>
            </span>
        </el-dialog>
        <!-- 전시 종료 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    centerDisplayVisible: false
  })
}
</script>
<style scoped>
/* .line-name .el-col {height:90px} */
</style>
