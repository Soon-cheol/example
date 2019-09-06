<!-- Picker : Start -->
<template id="layoutPicker">
    <div class="template">
      <menuTab />
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Default</h3>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Picker with quick options</h3>
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="Pick a day"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Week</h3>
        <el-date-picker
          v-model="value1"
          type="week"
          format="Week WW"
          placeholder="Pick a week">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Month</h3>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="Pick a month">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Year</h3>
        <el-date-picker
          v-model="value3"
          type="year"
          placeholder="Pick a year">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Dates</h3>
        <el-date-picker
          type="dates"
          v-model="value4"
          placeholder="Pick one or more dates">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Start ~ End 1</h3>
        <el-date-picker
          v-model="value5"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Start ~ End 2</h3>
        <el-date-picker
          v-model="value6"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <h3>Start ~ End 3</h3>
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          default-value="2010-10-01">
        </el-date-picker>
      </div>
      <!-- temp-cont : End -->
    </div>
</template>
<!-- Picker : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    pickerOptions: {
      disabledDate (time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [{
        text: 'Today',
        onClick (picker) {
          picker.$emit('pick', new Date())
        }
      }, {
        text: 'Yesterday',
        onClick (picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          picker.$emit('pick', date)
        }
      }, {
        text: 'A week ago',
        onClick (picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', date)
        }
      }]
    },
    pickerOptions2: {
      shortcuts: [{
        text: 'Last week',
        onClick (picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', [start, end])
        }
      }, {
        text: 'Last month',
        onClick (picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          picker.$emit('pick', [start, end])
        }
      }, {
        text: 'Last 3 months',
        onClick (picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          picker.$emit('pick', [start, end])
        }
      }]
    },
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: ''
  }),
  components: {
    menuTab
  }
}
</script>
