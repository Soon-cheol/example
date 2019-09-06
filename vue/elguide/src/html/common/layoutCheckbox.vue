
<!-- Checkbox : Start -->
<template id="layoutCheckbox">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Checkbox</h3>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="Option A"></el-checkbox>
                <el-checkbox label="Option B"></el-checkbox>
                <el-checkbox label="Option C"></el-checkbox>
                <el-checkbox label="disabled" disabled></el-checkbox>
                <el-checkbox label="selected and disabled" disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Checkbox : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    checked: true,
    checkList: ['selected and disabled', 'Option A']
  }),
  components: {
    menuTab
  }
}
</script>
