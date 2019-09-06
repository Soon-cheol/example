<!-- Form : Start -->
<template id="layoutForm">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Form</h3>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Activity name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                    <el-col :span="4">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1"></el-date-picker>
                    </el-col>
                    <el-col :span="4">
                    <el-time-picker placeholder="Pick a time" v-model="form.date2"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="Activity type">
                    <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type"></el-checkbox>
                    <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                    <el-checkbox label="Offline activities" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor"></el-radio>
                    <el-radio label="Venue"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="main" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Form : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    form: {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    }
  }),
  components: {
    menuTab
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
