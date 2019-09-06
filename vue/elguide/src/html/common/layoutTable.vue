<!-- Table : Start -->
<template id="layoutTable">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Basic Table</h3>
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
            <h3>Select Table</h3>
            <el-table :data="tableData" :row-class-name="tableRowClassName">
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
            <h3>Rowspan and colspan</h3>
            <el-table :data="tableData">
                <el-table-column prop="date" label="Date">
                </el-table-column>
                <el-table-column label="Delivery Info">
                    <el-table-column prop="name" label="Name">
                    </el-table-column>
                    <el-table-column label="Address Info">
                        <el-table-column prop="state" label="State">
                        </el-table-column>
                        <el-table-column prop="city" label="City">
                        </el-table-column>
                        <el-table-column prop="address" label="Address">
                        </el-table-column>
                        <el-table-column prop="zip" label="Zip">
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Sorting</h3>
            <el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column prop="date" label="Date" sortable width="180">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Expandable row</h3>
            <el-table :data="tableData">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <p>State: {{ props.row.state }}</p>
                        <p>City: {{ props.row.city }}</p>
                        <p>Address: {{ props.row.address }}</p>
                        <p>Zip: {{ props.row.zip }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date">
                </el-table-column>
                <el-table-column label="Name" prop="name">
                </el-table-column>
            </el-table>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Table : End -->
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
      {id: '12987126', name: 'Tom', amount1: '539', amount2: '4.1', amount3: 15}]
  }),
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1 || rowIndex === 3) {
        return 'select-row'
      }
      return ''
    }
  },
  components: {
    menuTab
  }
}
</script>
