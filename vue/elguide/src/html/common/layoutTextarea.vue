
<!-- textarea : Start -->
<template id="layoutTextarea">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Textarea</h3>
            <el-input type="textarea" :rows="4" placeholder="Textarea" v-model="textarea"></el-input>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
          <h3>Textarea Auto Height</h3>
          <el-input
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 100}"
            placeholder="Please input"
            v-model="textarea2">
          </el-input>
        </div>
        <!-- temp-cont : End -->

    </div>
</template>
<!-- textarea : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    textarea: '',
    textarea2: ''
  }),
  components: {
    menuTab
  }
}
</script>
