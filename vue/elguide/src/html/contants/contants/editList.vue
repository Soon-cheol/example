<template>
    <div class="template">
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <h3>콘텐츠 관리</h3>
            <el-row>
                <el-col :span="4" class="required">구분</el-col>
                <el-col :span="6">
                    <el-select v-model="value3" clearable placeholder="리스티클형">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">Line</el-col>
                <el-col :span="20">
                    <el-button @click="lineSelectPop = true">선택하기</el-button>
                    <div class="el-col-div">
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">[기본] 선택된 Line명 출력</el-button>
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">[추가1] 선택된 Line명 출력</el-button>
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">[추가2] 선택된 Line명 출력</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">카테고리</el-col>
                <el-col :span="10" class="table">
                    야구
                    <!-- <el-select v-model="value" clearable placeholder="Select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" clearable placeholder="Select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select> -->
                </el-col>
            </el-row>
            <!-- 19.07.04 서브카피 / 이미지 썸네일 영역 / 본문 영역 수정 및 추가 : start -->
            <el-row>
                <el-col :span="4">CP선택</el-col>
                <el-col :span="20">
                    <el-button @click="cpSelectPop = true">선택하기</el-button>
                    <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 CP명 출력</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">제목</el-col>
                <el-col :span="20">
                    <el-input
                        type="textarea"
                        class="width100"
                        maxlength="20"
                        :autosize="{ minRows: 1, maxRows: 100}"
                        placeholder="텍스트를 입력하세요. 엔터키를 치면 줄바꿈이 적용됩니다."
                        v-model="textarea2"
                        show-word-limit
                        >
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">서브카피</el-col>
                <el-col :span="20">
                    <el-input
                        type="textarea"
                        class="width100"
                        maxlength="30"
                        :autosize="{ minRows: 1, maxRows: 100}"
                        placeholder="텍스트를 입력하세요."
                        v-model="textarea2"
                        show-word-limit
                        >
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">대표 이미지</el-col>
                <el-col :span="20">
                    <el-upload
                        class="file-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    이미지 출처
                    <el-input
                        type="textarea"
                        class="width40"
                        maxlength="20"
                        :autosize="{ minRows: 1, maxRows: 100}"
                        placeholder="텍스트를 입력하세요."
                        v-model="textarea2"
                        show-word-limit
                        >
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">썸네일 이미지</el-col>
                <el-col :span="20">
                    <el-upload
                        class="file-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-upload
                        class="file-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-upload
                        class="file-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-upload
                        class="file-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">본문</el-col>
                <el-col :span="20">
                    <div class="el-col-div">
                        <el-row>
                            <el-col :span="3">랭킹 생성</el-col>
                            <el-col :span="21">
                                <el-select v-model="value4" clearable placeholder="랭킹 선택">
                                    <el-option v-for="item in options2" :key="item.value"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-button @click="imgViewPop = true" size="large">생성</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="el-col-div">
                        <el-row>
                            <el-col :span="3">랭킹 1</el-col>
                            <el-col :span="21">
                                <el-button type="info" icon="el-icon-minus" size="small"></el-button>
                            </el-col>
                            <!-- <el-col :span="21" class="ranking-radio">
                                <span class="tit">등락폭 추가</span>
                                <el-radio v-model="radio" label="1">변동없음</el-radio>
                                <el-radio v-model="radio" label="2">상승순위
                                    <el-input v-model="input3" :disabled="false"></el-input>
                                </el-radio>
                                <el-radio v-model="radio" label="3">하락순위
                                    <el-input v-model="input4" :disabled="true"></el-input>
                                </el-radio>
                            </el-col> -->
                        </el-row>
                        <el-row>
                            <!-- 19.07.02 기획서 텍스트변경. 랭킹 타이틀 -> 타이틀 : start -->
                            <!-- 19.07.04 기획서 텍스트변경. 타이틀 -> 랭킹 타이틀: start -->
                            <el-col :span="3">랭킹 타이틀</el-col>
                            <!-- 19.07.04 기획서 텍스트변경. 타이틀 -> 랭킹 타이틀: end -->
                            <!-- 19.07.02 기획서 텍스트변경. 랭킹 타이틀 -> 타이틀 : end -->
                            <el-col :span="21">
                                <el-input
                                    type="textarea"
                                    class="width100"
                                    maxlength="20"
                                    :autosize="{ minRows: 1, maxRows: 100}"
                                    placeholder="텍스트를 입력하세요."
                                    v-model="textarea2"
                                    show-word-limit
                                    >
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">
                                <el-select v-model="value4" clearable placeholder="이미지">
                                    <el-option v-for="item in options2" :key="item.value"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="21">
                                <el-upload
                                    class="file-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                이미지 출처
                                <el-input
                                    type="textarea"
                                    class="width40"
                                    maxlength="20"
                                    :autosize="{ minRows: 1, maxRows: 100}"
                                    placeholder=""
                                    v-model="textarea2"
                                    show-word-limit
                                    >
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">
                                <el-select v-model="value4" clearable placeholder="유튜브">
                                    <el-option v-for="item in options2" :key="item.value"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="21">
                                <el-input
                                    type="textarea"
                                    class="width40"
                                    :autosize="{ minRows: 1, maxRows: 100}"
                                    placeholder="영상ID 입력"
                                    v-model="textarea2"
                                    >
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">텍스트(Bold)<el-button type="danger" icon="el-icon-remove-outline" circle></el-button></el-col>
                            <el-col :span="21">
                                <el-input
                                    type="textarea"
                                    class="width100"
                                    maxlength="20"
                                    :autosize="{ minRows: 1, maxRows: 100}"
                                    placeholder="텍스트를 입력하세요."
                                    v-model="textarea2"
                                    show-word-limit
                                    >
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">텍스트(Normal)<el-button type="danger" icon="el-icon-remove-outline" circle></el-button></el-col>
                            <el-col :span="21">
                                <el-input
                                    type="textarea"
                                    class="width100"
                                    :autosize="{ minRows: 1, maxRows: 100}"
                                    placeholder="텍스트를 입력하세요."
                                    v-model="textarea2"
                                    >
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">링크 URL<el-button type="danger" icon="el-icon-remove-outline" circle></el-button></el-col>
                            <el-col :span="21" class="youtube">
                                <el-select v-model="value2" clearable placeholder="버튼명 입력">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-input placeholder="" v-model="input1" class="width50">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">More info<el-button type="danger" icon="el-icon-remove-outline" circle></el-button></el-col>
                            <el-col :span="21" class="youtube">
                                <el-select v-model="value4" clearable placeholder="선택">
                                    <el-option v-for="item in options1" :key="item.value"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-input v-model="input1" clearable class="width50"></el-input>
                                <el-button type="info" icon="el-icon-plus" size="large"></el-button>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">CP 선택<el-button type="danger" icon="el-icon-remove-outline" circle></el-button></el-col>
                            <el-col :span="21">
                                <el-button @click="tagSelectPop = true">선택하기</el-button>
                                <div class="el-col-div">
                                    <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 CP명 출력</el-button>
                                    <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 CP명 출력</el-button>
                                    <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 CP명 출력</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">태그</el-col>
                <el-col :span="20">
                    <el-button @click="tagSelectPop = true">선택하기</el-button>
                    <div class="el-col-div">
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" class="required">전시일정</el-col>
                <el-col :span="10" class="table">
                    <el-radio v-model="radio" label="1">예약</el-radio>
                    <el-date-picker v-model="value3" type="datetime" placeholder="Select date and time" class="date-picker"></el-date-picker>
                    <el-radio v-model="radio" label="2">전시안함</el-radio>
                </el-col>
            </el-row>
            <!-- 19.07.04 서브카피 / 이미지 썸네일 영역 / 본문 영역 수정 및 추가 : end -->
            <p class="txt-point">변동사항은 등록 버튼을 선택해 최종 저장해야 반영됩니다.</p>
        </div>
        <!-- temp-cont : End -->
        <!-- temp-cont : Start -->
        <div class="temp-cont">
            <div class="btn-area">
                <el-button @click="registConfirmPop = true">등록</el-button>
                <el-button>취소</el-button>
            </div>
        </div>
        <!-- temp-cont : End -->
        <!-------------------- Dialog : Start -------------------->
        <!-- Line 선택하기 : Start -->
        <el-dialog title="Line 선택" :visible.sync="lineSelectPop">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-row>
                    <el-col :span="4">Line 선택</el-col>
                    <el-col :span="20" class="table">
                        <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                        <el-button size="large">검색</el-button>
                    </el-col>
                </el-row>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <p class="tit-sub">검색결과 (0,000건)</p>
                <el-table :data="tableData">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column prop="category1" label="카테고리" width="150"></el-table-column>
                    <el-table-column prop="line" label="Line" align="left"></el-table-column>
                </el-table>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
            <!-- temp-cont : End -->
        </el-dialog>
        <!-- Line 선택하기 : End -->
        <!-- CP 선택하기 : Start -->
        <el-dialog title="CP 선택" :visible.sync="cpSelectPop">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-row>
                    <el-col :span="4">CP 검색</el-col>
                    <el-col :span="20" class="table">
                        <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                        <el-button size="large">검색</el-button>
                    </el-col>
                </el-row>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <p class="tit-sub">검색결과 (0,000건)</p>
                <el-table :data="tableData">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column prop="line" label="CP"></el-table-column>
                </el-table>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
            <!-- temp-cont : End -->
        </el-dialog>
        <!-- CP 선택하기 : End -->
        <!-- 태그 선택하기 : Start -->
        <el-dialog title="태그 선택" :visible.sync="tagSelectPop">
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-row>
                    <el-col :span="4">태그 검색</el-col>
                    <el-col :span="20" class="table">
                        <el-input placeholder="키워드를 입력하세요" v-model="input1" class="width50" clearable></el-input>
                        <el-button size="large">검색</el-button>
                    </el-col>
                </el-row>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <p class="tit-sub">검색결과 (0,000건)</p>
                <el-row>
                    <el-col :span="4">선택한 태그</el-col>
                    <el-col :span="20">
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                        <el-button  class="delete" plain  @click="centerDialogVisible = true">선택된 태그 출력</el-button>
                    </el-col>
                </el-row>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-table :data="tableData">
                    <el-table-column prop="num" label="번호" width="60"></el-table-column>
                    <el-table-column width="60">
                        <el-checkbox></el-checkbox>
                    </el-table-column>
                    <el-table-column prop="line" label="태그"></el-table-column>
                </el-table>
            </div>
            <!-- temp-cont : End -->
            <!-- temp-cont : Start -->
            <div class="temp-cont">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
            <el-button>선택완료</el-button>
            <!-- temp-cont : End -->
        </el-dialog>
        <!-- 태그 선택하기 : End -->
        <!-- 선택하기 리스트 삭제 : Start -->
        <el-dialog
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>정말 삭제하시겠습니까?</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="centerDialogVisible = false">확인</el-button>
            <el-button @click="centerDialogVisible = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 선택하기 리스트 삭제 : End -->
        <!-- 이미지 보기 : Start -->
        <el-dialog
            :visible.sync="imgViewPop"
            width="30%"
            center>
            <span><img src="@/assets/test.png"></span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="imgViewPop = false">확인</el-button>
            <el-button @click="imgViewPop = false">취소</el-button>
            </span>
        </el-dialog>
        <!-- 이미지 보기 : End -->
        <!-- 등록 확인 : Start -->
        <el-dialog :visible.sync="registConfirmPop" width="20%" center>
            <span>이 콘텐츠는 Discover에 전시중이므로,<br />Line 변경은 반영하지 않습니다.</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="registConfirmPop = false">확인</el-button>
            </span>
        </el-dialog>
        <!-- 등록 확인 : End -->
        <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    lineSelectPop: false,
    cpSelectPop: false,
    centerDialogVisible: false,
    registConfirmPop: false,
    tagSelectPop: false,
    checked: true,
    imgViewPop: false,
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
    options1: [{
      value: '기간',
      label: '기간'
    }, {
      value: '기타',
      label: '기타'
    }, {
      value: '등급',
      label: '등급'
    }, {
      value: '메뉴',
      label: '메뉴'
    }, {
      value: '배우',
      label: '배우'
    }, {
      value: '시간',
      label: '시간'
    }, {
      value: '요금',
      label: '요금'
    }, {
      value: '주차',
      label: '주차'
    }, {
      value: '전화',
      label: '전화'
    }, {
      value: '주소',
      label: '주소'
    }, {
      value: '홈페이지',
      label: '홈페이지'
    }, {
      value: '인스타그램',
      label: '인스타그램'
    }, {
      value: '페이스북',
      label: '페이스북'
    }, {
      value: '링크URL',
      label: '링크URL'
    }],
    options2: [{
      value: '1'
    }, {
      value: '2'
    }, {
      value: '3'
    }, {
      value: '4'
    }, {
      value: '5'
    }, {
      value: '6'
    }, {
      value: '7'
    }, {
      value: '8'
    }, {
      value: '9'
    }, {
      value: '10'
    }],
    tableData: [
      {num: '1', title: 'Tom', date: '2019.00.00 ~ 2019.00.00', category1: 'Mental', category2: '힐링', progress: '진행중', exhibition: '전시중', line: '목록 클릭하면 팝업 닫은 후 선택되도록'},
      {num: '2', title: 'Tom', date: '2019.00.00 ~ 2019.00.00', category1: 'Mental', category2: '힐링', progress: '진행종료', exhibition: '전시종료', line: '목록 클릭하면 팝업 닫은 후 선택되도록'}
    ],
    value: '',
    value2: '',
    value4: '',
    value3: '',
    textarea: '',
    textarea2: '',
    textarea3: '',
    radio: '1',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    imageUrl: '',
    fileList: []
  }),
  methods: {
    youtubeOpen () {
      alert(1)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style scoped>
.youtube{
    overflow:hidden;
}
.youtube > *{
    float:left;
}
.el-button.is-circle{
    padding: 7px;
    background: #fff;
    border: 0 none;
    color:#333
}
.el-row>div .el-col-div:first-child{
    margin-top:0;
}
.ranking-radio{
    overflow:hidden;
}
.ranking-radio .tit{
    display:inline-block;
    margin-right:26px;
}
.ranking-radio > *{
    float:left;
    height:40px;
    line-height:40px;
}
.ranking-radio label .el-input{
    width:72px;
    margin-left: 8px;
}
.input-addr2{
    margin-top:10px;
}
.el-textarea{text-align:right !important;}
.el-input__count{background:none !important;}
.file-uploader{display:inline-block; vertical-align:middle; margin-right:10px;}
</style>
