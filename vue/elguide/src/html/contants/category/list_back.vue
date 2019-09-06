<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>카테고리 관리</h3>
            <el-row>
                <el-col :span="4">카테고리 추가</el-col>
                <el-col :span="8" class="table">
                    <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                    <el-button size="large">검색</el-button>
                    <el-button size="large">초기화</el-button>
                </el-col>
                <el-col :span="4">중분류</el-col>
                <el-col :span="8" class="table">
                    <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                    <el-button size="large">검색</el-button>
                    <el-button size="large">초기화</el-button>
                </el-col>
            </el-row>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    input1: '',
    data:
    [
      {
        label: 'Financial',
        children: [{
          label: 'Level two 1-1'
        }, {
          label: 'Level two 1-1'
        }]
      }, {
        label: 'Physical',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Mental',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Inspirational',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }
    ],
    defaultProps: {
      children: 'children',
      label: 'label'
    }
  }),
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
