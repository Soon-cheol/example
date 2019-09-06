<!-- Select : Start -->
<template id="layoutSelect">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Select</h3>
            <el-select v-model="value" clearable placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Multiple Select</h3>
            <el-select v-model="value2" clearable
                placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value3" clearable placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Disabled Select</h3>
            <el-select v-model="value4" disabled placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Select : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
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
    value: '',
    value2: '',
    value3: '',
    value4: ''
  }),
  components: {
    menuTab
  }
}
</script>
