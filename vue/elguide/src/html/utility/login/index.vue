<template>
    <div class="template">
      <!-- temp-cont : Start -->
      <div class="temp-cont">
        <div class="login">
          <div class="box-card">
            <h3 class="logo"><a href="javascript=void(0)" alt="Lifeplus">Lifeplus</a></h3>
            <div class="inner-form">
              <!-- <form action="" method="" name="">
                <fieldset>
                  <legend>login</legend> -->
                  <div><label for="id">아이디</label><input type="text" id="id" placeholder="아이디를 입력하세요."></div>
                  <div><label for="pw">비밀번호</label><input type="password" id="pw" placeholder="비밀번호를 입력하세요."></div>
                  <div class="login-warning">
                    <i class="el-icon-warning" type="warning"> 알럿문구 노출 영역입니다.</i>
                  </div>
                  <button class="btn-login" @click="smsPop = true">로그인</button>
                  <div class="bottom-list">
                    <input type="checkbox" id="login-memory" class="login-checkbox" checked/><label for="login-memory"></label><span>아이디 저장</span>
                    <button class="pw-reset" type="button" @click="pwPop = true">비밀번호 재설정</button>
                  </div>
                <!-- </fieldset>
              </form> -->
            </div>
            <!-- 19.07.05 로그인 연장 팝업 : start -->
            <button type="button" @click="extensionPop = true" style="margin-top:20px; border:1px solid #000; padding:6px; font-weight:bold; font-size:13px;">로그인 연장 팝업</button> <!-- style 추후 삭제하세요 -->
            <!-- 19.07.05 로그인 연장 팝업 : end -->
          </div>
        </div>
      </div>
      <!-- temp-cont : End -->
      <!-------------------- Dialog : Start -------------------->
      <!-- 비밀번호 재설정 : Start -->
      <el-dialog
        title="비밀번호 재설정"
        :visible.sync="pwPop"
        width="20%"
        >
        <span>등록된 휴대폰 번호로 임시 비밀번호가 발송됩니다.</span>
        <div class="temp-cont mt20">
          <div class="el-col-div">
            <span class="input-type02">아이디</span>
            <el-input placeholder="" v-model="input2" class="width70"></el-input>
          </div>
          <div class="el-col-div">
            <span class="input-type02">이름</span>
            <el-input placeholder="" v-model="input3" class="width70"></el-input>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="pwPopInner = true">임시 비밀번호 발송</el-button>
        </span>
        <el-dialog title="비밀번호 재설정" width="20%" :visible.sync="pwPopInner" append-to-body>
          <span>등록된 휴대폰 번호로 임시 비밀번호가 발송되었습니다.</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="pwPopInner2 = true">확인</el-button>
          </span>
          <!-- 19.07.05 비밀번호 재설정 팝업 한단계 추가(임시 비밀번호 입력) : start -->
          <el-dialog title="비밀번호 재설정" width="20%" :visible.sync="pwPopInner2" append-to-body>
            <span>휴대폰으로 받은 임시 비밀번호를 입력하세요.</span>
            <div class="temp-cont mt20">
              <div class="el-col-div">
                <span class="input-type02">비밀번호</span>
                <el-input type="password" placeholder="" v-model="input2" class="width70"></el-input>
              </div>
              <div class="el-col-div">
                <span class="input-type02">비밀번호확인</span>
                <el-input type="password" placeholder="" v-model="input3" class="width70"></el-input>
                <p class="txt-point">비밀번호가 일치하지 않습니다.</p>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="main" @click="pwPopInner3 = true" class="mt20">로그인</el-button>
            </span>
            <el-dialog title="비밀번호 재설정" width="20%" :visible.sync="pwPopInner3" append-to-body>
              <span>신규 비밀번호를 입력해 주세요.<br>(영문, 숫자, 특수문자 조합 6~15자리)</span>
              <div class="temp-cont mt20">
                <div class="el-col-div">
                  <span class="input-type02">비밀번호</span>
                  <el-input type="password" placeholder="" v-model="input2" class="width70"></el-input>
                </div>
                <div class="el-col-div">
                  <span class="input-type02">비밀번호확인</span>
                  <el-input type="password" placeholder="" v-model="input3" class="width70"></el-input>
                  <p class="txt-point">비밀번호가 일치하지 않습니다.</p>
                </div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button type="main" @click="pwPopInner3 = true" class="mt20">비밀번호 변경</el-button>
              </span>
            </el-dialog>
          </el-dialog>
          <!-- 19.07.05 비밀번호 재설정 팝업 한단계 추가(임시 비밀번호 입력) : end -->
        </el-dialog>
      </el-dialog>
      <!-- 비밀번호 재설정 : End -->
      <!-- 휴대폰 인증 : Start -->
      <el-dialog
        title="휴대폰 인증"
        :visible.sync="smsPop"
        width="20%"
        >
        <h3 class="pop-logo">Lifeplus</h3>
        <span>외부 접속 시 휴대폰 인증이 필요합니다.<br>SMS 받기 버튼을 클릭해 주세요.</span>
        <div class="temp-cont mt20">
          <div class="count-wrap">
            <el-input placeholder="인증번호" v-model="input1" clearable></el-input>
            <el-button size="large" @click="smspopInner = true">SMS 받기</el-button>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="smsPop = false">확인</el-button>
        </span>
        <el-dialog title="휴대폰 인증" width="20%" :visible.sync="smspopInner" append-to-body>
          <h3 class="pop-logo">Lifeplus</h3>
          <span>등록된 휴대폰으로 SMS가 발송되었습니다.<br>인증번호를 입력해 주세요.</span>
          <div class="temp-cont mt20">
            <div class="count-wrap">
              <el-input placeholder="인증번호" v-model="input1" clearable></el-input><span class="sms-count">03:00</span
            ></div>
            <el-button size="large" @click="smspopInner = true">재발송</el-button>
            <p class="txt-point">인증시간이 초과되었습니다. SMS인증을 다시 시도해주세요.</p> <!-- 3분 내 인증번호를 입력하지 않았을 시 alert -->
            <p class="txt-point">인증번호가 일치하지 않습니다.</p> <!-- 인증번호가 일치하지 않을 시 alert -->
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="main" @click="smspopInner = false">확인</el-button>
          </span>
        </el-dialog>
      </el-dialog>
      <!-- 휴대폰 인증 : End -->
      <!-- 로그인 연장 팝업 : Start -->
      <el-dialog
        title="로그인 연장 팝업"
        :visible.sync="extensionPop"
        width="20%"
        >
        <span>로그인 후 60분 동안 활동이 없으면 로그아웃됩니다.<br>로그인 시간을 연장하시겠습니까?</span>
        <div class="temp-cont mt20">
          <div class="count-wrap">
            남은 시간 <span class="extension-count">09:40</span>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="main" @click="extensionPop = false">연장하기</el-button>
          <el-button @click="extensionPop = false">로그아웃</el-button>
        </span>
      </el-dialog>
      <!-- 로그인 연장 팝업 : End -->
      <!-------------------- Dialog : End -------------------->
    </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    smsPop: false,
    smspopInner: false,
    pwPop: false,
    pwPopInner: false,
    pwPopInner2: false,
    pwPopInner3: false,
    extensionPop: false,
    input1: '',
    input2: '',
    input3: ''
  })
}
</script>
<style scoped>
.login{width:30%; margin:0 auto;}
.box-card{border:none; padding:30px}
.box-card .logo{font-weight:bold; font-size:30px; margin-bottom:10px;}
.box-card .logo a{color:#f36910; text-decoration: none !important;}
.inner-form{padding:20px 0 0; border-top:1px solid #f36910;}
.inner-form div{margin-bottom:10px;}
.inner-form label{display:inline-block; width:80px; font-size:15px; color:#000; font-weight: 500;}
.inner-form input[type="text"],.inner-form input[type="password"] {width:100%; height:auto; line-height:normal; margin-top:5px; font-family: inherit; font-size:13px; padding:10px; border:1px solid #ccc; background:rgba(255,255,255,0.8); outline-style: none; -webkit-appearance:none; -moz-appearance:none; appearance:none;}
.inner-form input::placeholder{color:#f36910; opacity:0.8;}
.el-icon-warning{color:#cf0505; font-size:13px; letter-spacing:-0.05em;}
.el-icon-warning:before{color:#cf0505}
.btn-login{background:#f36910; width:100%; padding:10px 0; color:#fff; font-size:15px;}
.btn-login:hover{background:#f6721d;}
.bottom-list {margin-top:10px;}
.bottom-list::after{content:''; display:block; clear:both;}
.bottom-list .login-checkbox{display:none;}
.bottom-list .login-checkbox + label{position:relative; background:#f6721d; padding:9px; width:12px; display:inline-block; vertical-align: bottom;}
.bottom-list .login-checkbox + label + span{vertical-align: text-top; margin-left:5px; vertical-align: bottom; font-size:14px; letter-spacing:-0.05em; color:#000;}
.bottom-list .login-checkbox:checked + label{background:#f6721d; color: #000;}
.bottom-list .login-checkbox:checked + label:after{content:'\2714'; font-size:15px; position:absolute; top:0px; left:3px; color:#fff;}
.pw-reset{float:right; padding:0 0; font-size:14px; border-bottom:1px solid #000; letter-spacing:-0.05em;}
.pop-logo{font-size:30px; color:#000; border-bottom:1px solid #000; margin-bottom:10px;}
.mt20{margin-top:20px;}
.temp-cont.pb20{padding-bottom:20px;}
.temp-cont.mt20 button{vertical-align: bottom;}
.count-wrap{position:relative; display:inline-block;}
.count-wrap .sms-count{position:absolute; right:15px; top:12px; font-size:13px; color:#999;}
.count-wrap .extension-count{color:#000; font-weight:bold;}
.input-type02{width:80px; display:inline-block;}
.el-col-div{padding:5px}
</style>
