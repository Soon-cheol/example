<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>이벤트</h3>
            <el-row>
                <el-col :span="4">진행기간</el-col>
                <el-col :span="10">
                  <el-date-picker
                    v-model="value"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date">
                  </el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">진행상태</el-col>
                <el-col :span="10">
                    <el-select v-model="value5" clearable placeholder="전체">
                        <el-option v-for="item in options3" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">검색</el-col>
                <el-col :span="10" class="table">
                    <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                </el-col>
            </el-row>
            <div class="btn-area">
                <el-button>검색</el-button>
                <el-button>초기화</el-button>
            </div>
            <div class="btn-area right">
                <div class="block">
                  <el-cascader
                    v-model="value1"
                    placeholder="신규등록"
                    :options="options1"
                    @change="handleChange"></el-cascader>
                </div>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-table :data="tableData">
                <el-table-column prop="num" label="번호" width="60"></el-table-column>
                <el-table-column prop="title" label="제목" align="left"></el-table-column>
                <el-table-column prop="participants" label="참여자" width="150"></el-table-column>
                <el-table-column prop="date" label="진행기간" width="240"></el-table-column>
                <el-table-column prop="progress" label="진행상태" width="220"></el-table-column>
                <!-- <el-table-column prop="visibility" label="공개상태" width="220"></el-table-column> -->
            </el-table>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
        <!-- temp-cont : End -->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    eventParticipantsPop: false,
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
    options3: [{
      value: '전체',
      label: '전체'
    }, {
      value: '진행전',
      label: '진행전'
    }, {
      value: '진행중',
      label: '진행중'
    }, {
      value: '종료',
      label: '종료'
    }],
    value1: [],
    options1: [{
      value: '응모형',
      label: '응모형',
      children: [{
        value: 'disciplines',
        label: 'Disciplines',
        children: [{
          value: 'consistency',
          label: 'Consistency'
        }, {
          value: 'feedback',
          label: 'Feedback'
        }, {
          value: 'efficiency',
          label: 'Efficiency'
        }, {
          value: 'controllability',
          label: 'Controllability'
        }]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
          value: 'side nav',
          label: 'Side Navigation'
        }, {
          value: 'top nav',
          label: 'Top Navigation'
        }]
      }]
    }, {
      value: '항목선택 글자형',
      label: '항목선택 글자형',
      children: [{
        value: 'basic',
        label: 'Basic',
        children: [{
          value: 'layout',
          label: 'Layout'
        }, {
          value: 'color',
          label: 'Color'
        }, {
          value: 'typography',
          label: 'Typography'
        }, {
          value: 'icon',
          label: 'Icon'
        }, {
          value: 'button',
          label: 'Button'
        }]
      }, {
        value: 'form',
        label: 'Form',
        children: [{
          value: 'radio',
          label: 'Radio'
        }, {
          value: 'checkbox',
          label: 'Checkbox'
        }, {
          value: 'input',
          label: 'Input'
        }, {
          value: 'input-number',
          label: 'InputNumber'
        }, {
          value: 'select',
          label: 'Select'
        }, {
          value: 'cascader',
          label: 'Cascader'
        }, {
          value: 'switch',
          label: 'Switch'
        }, {
          value: 'slider',
          label: 'Slider'
        }, {
          value: 'time-picker',
          label: 'TimePicker'
        }, {
          value: 'date-picker',
          label: 'DatePicker'
        }, {
          value: 'datetime-picker',
          label: 'DateTimePicker'
        }, {
          value: 'upload',
          label: 'Upload'
        }, {
          value: 'rate',
          label: 'Rate'
        }, {
          value: 'form',
          label: 'Form'
        }]
      }, {
        value: 'data',
        label: 'Data',
        children: [{
          value: 'table',
          label: 'Table'
        }, {
          value: 'tag',
          label: 'Tag'
        }, {
          value: 'progress',
          label: 'Progress'
        }, {
          value: 'tree',
          label: 'Tree'
        }, {
          value: 'pagination',
          label: 'Pagination'
        }, {
          value: 'badge',
          label: 'Badge'
        }]
      }, {
        value: 'notice',
        label: 'Notice',
        children: [{
          value: 'alert',
          label: 'Alert'
        }, {
          value: 'loading',
          label: 'Loading'
        }, {
          value: 'message',
          label: 'Message'
        }, {
          value: 'message-box',
          label: 'MessageBox'
        }, {
          value: 'notification',
          label: 'Notification'
        }]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
          value: 'menu',
          label: 'NavMenu'
        }, {
          value: 'tabs',
          label: 'Tabs'
        }, {
          value: 'breadcrumb',
          label: 'Breadcrumb'
        }, {
          value: 'dropdown',
          label: 'Dropdown'
        }, {
          value: 'steps',
          label: 'Steps'
        }]
      }, {
        value: 'others',
        label: 'Others',
        children: [{
          value: 'dialog',
          label: 'Dialog'
        }, {
          value: 'tooltip',
          label: 'Tooltip'
        }, {
          value: 'popover',
          label: 'Popover'
        }, {
          value: 'card',
          label: 'Card'
        }, {
          value: 'carousel',
          label: 'Carousel'
        }, {
          value: 'collapse',
          label: 'Collapse'
        }]
      }]
    }, {
      value: '항목선택 복합형',
      label: '항목선택 복합형',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'docs',
        label: 'Design Documentation'
      }]
    }, {
      value: '자유형',
      label: '자유형',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'docs',
        label: 'Design Documentation'
      }]
    }],
    tableData: [
      {num: '20', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '19', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '18', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '17', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '16', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '15', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '14', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '13', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '12', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'},
      {num: '11', title: '이벤트 제목', participants: '0,000', date: '2019.00.00 ~ 2019.00.00', progress: '진행중', visibility: '공개'}
    ],
    tableData2: [
      {num: '20', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '19', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '18', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '17', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '16', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '14', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '14', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '13', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '12', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'},
      {num: '11', name: '홍길동', email: 'emailed@email.co.kr', date: 'YYYY.MM.DD HH:MM'}
    ],
    radio: '1',
    input1: '',
    input2: '',
    value: '',
    value5: ''
  }),
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
