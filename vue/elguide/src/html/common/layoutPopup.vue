<!-- Popup : Start -->
<template id="layoutPopup">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Popup</h3>
            <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>
            <el-dialog title="Outer Dialog" :visible.sync="outerVisible">
                <el-dialog width="30%" title="Inner Dialog" :visible.sync="innerVisible" append-to-body>
                </el-dialog>
                <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">Cancel</el-button>
                <el-button type="main" @click="innerVisible = true">open the inner Dialog</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Popup</h3>
            <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>
            <el-dialog
              title="Warning"
              :visible.sync="centerDialogVisible"
              width="30%"
              center>
              <span>It should be noted that the content will not be aligned in center by default</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="centerDialogVisible = false">Confirm</el-button>
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
              </span>
            </el-dialog>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    outerVisible: false,
    innerVisible: false,
    centerDialogVisible: false
  }),
  components: {
    menuTab
  }
}
</script>
