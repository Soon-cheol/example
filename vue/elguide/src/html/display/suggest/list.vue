<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>Suggest 관리</h3>
      <!-- 19.07.08 해당 레이블 텍스트 수정 / 인풋 영역 추가 : start -->
      <el-row class="table">
        <el-col :span="4">기간 지정</el-col>
        <el-col :span="20">
          <el-date-picker
            v-model="value"
            class="width40"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
          <el-input placeholder="검색 키워드를 입력하세요" v-model="input1" class="width30" clearable></el-input>
        </el-col>
      </el-row>
      <!-- 19.07.08 해당 레이블 텍스트 수정 / 인풋 영역 추가 : end -->
      <div class="btn-area">
        <el-button >검색</el-button>
        <el-button>초기화</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="heading-option">
        <div class="btn-area cell">
          <div>
            <el-button type="info" icon="el-icon-arrow-left" size="mini" class="btn-type01"></el-button>
            <span class="date-inquiry">
              <span class="start-date">YYYY.MM.DD</span>
              ~
              <span class="last-date">YYYY.MM.DD</span>
            </span>
            <el-button type="info" icon="el-icon-arrow-right" size="mini" class="btn-type01"></el-button>
          </div>
          <div><el-button>신규등록</el-button></div>
        </div>
      </div>
      <div class="suggest-table">
        <table>
          <thead>
            <tr>
              <th class="date">날짜</th>
              <th class="title">타이틀</th>
              <th class="line">Line명</th>
              <th class="category">구분</th>
              <th class="content">콘텐츠 제목</th>
            </tr>
          </thead>
          <tbody id="contacts">
            <tr v-for="(contact, index) in tableData" :key="index">
              <td class="date">{{contact.date}}</td>
              <td colspan="4">
                <table>
                  <tr v-for="(contact, subIndex) in contact.contants" :key="subIndex">
                    <td class="title">{{contact.title}}</td>
                    <td colspan="3">
                      <table>
                        <tr v-for="(contact, lastIndex) in contact.contants" :key="lastIndex">
                          <td class="line">{{contact.line}}</td>
                          <td class="category">{{contact.category}}</td>
                          <td class="content">{{contact.content}}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <el-table :data="tableData" :row-class-name="tableRowClassName">
        <el-table-column prop="titleNone" label="" width="180" align="left"></el-table-column>
        <el-table-column prop="title" label="타이틀" align="left"></el-table-column>
        <el-table-column prop="line" label="Line" align="left"></el-table-column>
        <el-table-column prop="content" label="콘텐츠 제목" align="left">
          <template slot-scope="scope">
            <router-link
            v-bind:to="{}">
                {{scope.row.content}}
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="admin" label="관리" width="180">
          <el-button @click="contantsHidden = true">전시 종료</el-button>
        </el-table-column>
      </el-table> -->
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start : 19.08.20 로딩화면 추가  -->
    <div class="temp-cont">
      <loading v-if="loading"></loading>
    </div>
    <!-- temp-cont : End : 19.08.20 로딩화면 추가 -->
    <!-------------------- Dialog : Start -------------------->
    <!-- 전시종료 : Start -->
      <el-dialog
          :visible.sync="contantsHidden"
          width="30%"
          center>
          <span>해당 콘텐츠의 전시를 종료하시겠습니까?</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="contantsHiddenInner = true">확인</el-button>
            <el-button @click="contantsHidden = false">취소</el-button>
          </span>
          <el-dialog width="30%" :visible.sync="contantsHiddenInner" append-to-body>
            <span>해당 콘텐츠의 전시를 종료했습니다.</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="contantsHiddenInner = false">확인</el-button>
            </span>
          </el-dialog>
      </el-dialog>
      <!-- 전시종료 : End -->
      <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
import loading from '@/components/ui/loading.vue'

export default {
  components: {
    loading
  },
  data: () => ({
    loading: false,
    contantsHidden: false,
    contantsHiddenInner: false,
    tableData: [
      {
        date: 'MM.DD 월',
        contants: [
          {title: '미세먼지 콘텐츠1',
            contants: [
              {line: 'Weather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News LineWeather News Line', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
              {line: '프리미엄 영화 채널', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
              {category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'}
            ]
          },
          {title: '미세먼지 콘텐츠2',
            contants: [
              {line: 'Weather News Line', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'}
            ]
          }
        ]
      },
      {
        date: 'MM.DD 화',
        contants: [
          {title: '미세먼지 콘텐츠',
            contants: [
              {line: 'Weather News Line', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
              {line: '프리미엄 영화 채널', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로수정화면으로 이동합니다.'},
              {line: '씨네21', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'}
            ]
          }
        ]
      },
      {
        date: 'MM.DD 수',
        contants: [
          {title: '미세먼지 콘텐츠',
            contants: [
              {line: 'Weather News Line', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
              {line: '프리미엄 영화 채널', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
              {line: '씨네21', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'}
            ]
          }
        ]
      }
      // {title: '주말 여행지 특집', line: '씨네21', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'}
      // {title: '', line: '프리미엄 영화 채널', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: 'NEW&HOT', line: '트레블 뉴스', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: '지난 주의 프로야구', line: 'MLB닷컴', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: '힐링 콘텐츠', line: '힐링 캠프', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: '', line: '힐링 캠프', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: 'NEW&HOT', line: 'JTBC 뉴스', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: '', line: 'CNN', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'},
      // {title: '', line: 'Euro Sports', category: '유튜브형', content: '콘텐츠 제목을 클릭하면 수정화면으로 이동합니다.'}
    ],
    value: '',
    input1: ''
  }),
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1 || rowIndex === 3) {
        return 'select-row'
      }
      return ''
    }
  }
}
</script>
<style scoped>
.btn-type01{padding:2px !important;}
.date-inquiry{font-size:13px; padding:0 10px; vertical-align:middle;}
</style>
