<template>
  <div class="bg">
    <img class="emblem" src="/images/mew03.png" />
    <div class="container">
      <div class="title">
        재미있고 흥미롭고 신나는 영어동요로 영어와 친숙하게
      </div>
      <span>
        <p>
          미취학 아동에게 강제 학습은 학습능력을 퇴행시킨다는 연구 결과가
          있습니다.
        </p>
        <p>그래서 제2 외국어는 학습이 아닌 놀이로 접하는 것이 효과적입니다.</p>
        <p>아름다운 애니메이션과 노래로 영어를 시작하세요!</p>
      </span>
      <div class="title">
        아이들의 발달에 맞게, 긍정적 정서 발달을 위해
      </div>
      <span>
        <p>
          누리과정과 다중지능을 연계한 학습 활동을 통해 복합적정서 발달을
          돕습니다.
        </p>
        <p>
          우리의 소중한 아이들이 글로벌 인재로 성장할 수 있도록 Good Attitude,
          Altruism을
        </p>
        <p>배양할 수 있는 긍정적인 주제와 소재를 접목하였습니다.</p>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/variable';

/* @import url('https://fonts.googleapis.com/css?family=Jua:400'); */
/* @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css); */
/* @import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css); */

@font-face {
  font-family: 'Jeju Gothic';
  font-style: normal;
  font-weight: 400;
  src: url(/font/JejuGothic-Regular.eot);
  src: url(/font/JejuGothic-Regular.eot?#iefix) format('embedded-opentype'),
    url(/font/JejuGothic-Regular.woff2) format('woff2'),
    url(/font/JejuGothic-Regular.woff) format('woff'),
    url(/font/JejuGothic-Regular.ttf) format('truetype');
}

.bg {
  width: 100%;
  height: 100%;
  background: #f7305e;
  display: flex;
  flex-direction: column;
  align-items: center;
  .emblem {
    padding-top: 150px;
    width: 70%;
    max-width: 500px;
  }
}
.container {
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  align-items: center;

  .title {
    padding: 30px;
    padding-bottom: 10px;
    font-family: 'Jua';
    font-size: 2em;
    font-weight: bold;
    color: #ffae3e;
  }
  span {
    width: 80%;
    font-family: 'Jeju Gothic';
    font-weight: normal;
    font-size: 1.3em;
    color: #ffccd8;
    // text-align: left;
  }
}
@media screen and (max-width: $mobileSize) {
  .bg {
    .emblem {
      padding-top: 40px;
    }
  }
  .container {
    .title {
      font-size: 1.5em;
    }
    span {
      text-align: left;
      width: 100%;
      font-size: 1em;
    }
  }
}
</style>
