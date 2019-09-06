<!-- Common : Start -->
<template id="layoutCommon">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="heading-option">
                <h3>Tilte Option</h3>
                <div class="option">
                    <el-select v-model="value" clearable placeholder="Select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button size="large">large</el-button>
                </div>
            </div>
            <el-table :data="tableData">
                <el-table-column prop="date" label="Date" width="180"></el-table-column>
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Button Area</h3>
            <p class="tit-sub">2019년 9월 검색어 순위 : 전체 검색어 00,000개</p>
            <el-table :data="tableData">
                <el-table-column prop="date" label="Date" width="180"></el-table-column>
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
            </el-table>
            <div class="btn-area">
                <el-button type="main" size="large">Main</el-button>
                <el-button type="primary" size="large">Primary</el-button>
                <el-button type="success" size="large">Success</el-button>
                <el-button type="info" size="large">Info</el-button>
                <el-button type="warning" size="large">Warning</el-button>
                <el-button type="danger" size="large">Danger</el-button>
            </div>
            <div class="btn-area left">
                <el-button type="main" size="large">Main</el-button>
                <el-button type="primary" size="large">Primary</el-button>
                <el-button type="success" size="large">Success</el-button>
                <el-button type="info" size="large">Info</el-button>
                <el-button type="warning" size="large">Warning</el-button>
                <el-button type="danger" size="large">Danger</el-button>
            </div>
            <div class="btn-area right">
                <el-button type="main" size="large">Main</el-button>
                <el-button type="primary" size="large">Primary</el-button>
                <el-button type="success" size="large">Success</el-button>
                <el-button type="info" size="large">Info</el-button>
                <el-button type="warning" size="large">Warning</el-button>
                <el-button type="danger" size="large">Danger</el-button>
            </div>
            <div class="btn-area cell">
                <div>
                    <el-button type="main" size="large">Main</el-button>
                    <el-button type="primary" size="large">Primary</el-button>
                    <el-button type="success" size="large">Success</el-button>
                </div>
                <div>
                    <el-button type="info" size="large">Info</el-button>
                    <el-button type="warning" size="large">Warning</el-button>
                    <el-button type="danger" size="large">Danger</el-button>
                </div>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>width1 ~ width100</h3>
            <el-input placeholder="basic input" v-model="input1" class="width10" clearable></el-input><br /><br />
            <el-input placeholder="basic input" v-model="input1" class="width100" clearable></el-input>
        </div>
        <!-- temp-cont : End -->
    </div>
    <!-- temp-cont : End -->
</template>
<!-- Common : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    tableData: [{date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles'},
      {date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles'},
      {date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles'},
      {date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles'}],
    tableData2: [{date: '2016-05-03', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'},
      {date: '2016-05-02', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'},
      {date: '2016-05-04', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'},
      {date: '2016-05-01', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'},
      {date: '2016-05-08', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'},
      {date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'},
      {date: '2016-05-07', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036'}],
    tableData3: [{id: '12987122', name: 'Tom', amount1: '234', amount2: '3.2', amount3: 10},
      {id: '12987123', name: 'Tom', amount1: '165', amount2: '4.43', amount3: 12},
      {id: '12987124', name: 'Tom', amount1: '324', amount2: '1.9', amount3: 9},
      {id: '12987125', name: 'Tom', amount1: '621', amount2: '2.2', amount3: 17},
      {id: '12987126', name: 'Tom', amount1: '539', amount2: '4.1', amount3: 15}],
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
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  }),
  components: {
    menuTab
  }
}
</script>
