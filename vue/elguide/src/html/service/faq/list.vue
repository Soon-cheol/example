<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>FAQ</h3>
            <!-- 19.06.26 해당 부분 삭제 : start -->
            <!-- <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="5">
                    <el-select v-model="value" clearable placeholder="전체">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row> -->
            <!-- 19.06.26 해당 부분 삭제 : end -->
            <el-row>
                <el-col :span="4">키워드</el-col>
                <el-col :span="20">
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button >검색</el-button>
                <el-button>초기화</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData" :default-sort="{prop: 'contants, subscriber'}">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <!-- 19.06.26 해당 부분 삭제 : start -->
                <!-- <el-table-column prop="category" label="카테고리" width="200"></el-table-column> -->
                <!-- 19.06.26 해당 부분 삭제 : end -->
                <el-table-column prop="faq" label="질문" align="left"></el-table-column>
            </el-table>
            <div class="btn-area right">
                <el-button>신규등록</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
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
    tableData: [
      {num: '1', category: 'Financial', faq: 'test'},
      {num: '1', category: 'Financial', faq: 'test'},
      {num: '1', category: 'Financial', faq: 'test'},
      {num: '1', category: 'Financial', faq: 'test'},
      {num: '1', category: 'Financial', faq: 'test'}
    ]
  })
}
</script>
<style scoped>
</style>
