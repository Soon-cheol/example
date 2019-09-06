<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>회원 통계 : 신규퍼소나</h3>
      <el-row>
          <el-col :span="4">기간별 통계</el-col>
          <el-col :span="14" class="stat-table">
            <el-date-picker
              v-model="value"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
            <el-select v-model="value" clearable placeholder="전체" class="width30">
              <el-option v-for="item in options" :key="item.value" :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
      </el-row>
      <div class="btn-area">
          <el-button>조회</el-button>
          <el-button>액셀 다운로드</el-button>
      </div>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="mgt10 mgb10">조회기간 YYYY.MM.DD~YYYY.MM.DD</div>
      <el-table :data="tableData">
        <el-table-column prop="date" width="100" label="일자">
        </el-table-column>
        <el-table-column prop="category" label="전체회원">
        </el-table-column>
        <el-table-column label="연령">
          <el-table-column prop="category" label="20세이하">
          </el-table-column>
          <el-table-column prop="category" label="21-25세">
          </el-table-column>
          <el-table-column prop="category" label="26-30세">
          </el-table-column>
          <el-table-column prop="category" label="31-35세">
          </el-table-column>
          <el-table-column prop="category" label="36-40세">
          </el-table-column>
          <el-table-column prop="category" label="41-45세">
          </el-table-column>
          <el-table-column prop="category" label="46세 이상">
          </el-table-column>
        </el-table-column>
        <el-table-column label="성별">
          <el-table-column prop="category" label="남성">
          </el-table-column>
          <el-table-column prop="category" label="여성">
          </el-table-column>
        </el-table-column>
        <el-table-column  label="자녀">
          <el-table-column prop="category" label="유">
          </el-table-column>
          <el-table-column prop="category" label="무">
          </el-table-column>
        </el-table-column>
        <el-table-column  label="커플">
          <el-table-column prop="category" label="싱글">
          </el-table-column>
          <el-table-column prop="category" label="커플">
          </el-table-column>
        </el-table-column>
        <el-table-column  label="퍼소나">
          <el-table-column prop="category" label="부부">
          </el-table-column>
          <el-table-column prop="category" label="커플">
          </el-table-column>
          <el-table-column prop="category" label="남성">
          </el-table-column>
          <el-table-column prop="category" label="여성">
          </el-table-column>
        </el-table-column>
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
<script type="text/javascript">
export default {
  data: () => ({
    contantsHidden: false,
    contantsHiddenInner: false,
    tableData: [
      {
        date: '누적',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      },
      {
        date: '00-00-00',
        total: '00',
        category: '00'
      }
    ],
    methods: {
      format (percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`
      }
    },
    value: '',
    value2: '',
    value3: ''
  })
}
</script>
