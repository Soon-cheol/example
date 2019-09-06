<!-- Paging : Start -->
<template id="layoutPaging">
    <div class="template">
        <menuTab />
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Paging</h3>
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Total item count</h3>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Change page size</h3>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage2"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="sizes, prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>Jump to</h3>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>All combined</h3>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- Paging : End -->
<script type="text/javascript">
import menuTab from '@/html/common/menuTab'
export default {
  data: () => ({
    currentPage1: 5,
    currentPage2: 5,
    currentPage3: 5,
    currentPage4: 4
  }),
  components: {
    menuTab
  },
  methods: {
    handleSizeChange (val) {
      console.log(`${val} items per page`)
    },
    handleCurrentChange (val) {
      console.log(`current page: ${val}`)
    }
  }
}
</script>
