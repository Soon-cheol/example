<!-- Radio Button : Start -->
<template id="layoutRadio">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Radio Button</h3>
            <el-radio v-model="radio" label="1">Option A</el-radio>
            <el-radio v-model="radio" label="2">Option B</el-radio>
            <el-radio v-model="radio" label="disabled" disabled></el-radio>
            <el-radio v-model="radio" label="selected and disabled" disabled></el-radio>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Radio Button : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    radio: ''
  }),
  components: {
    menuTab
  }
}
</script>
