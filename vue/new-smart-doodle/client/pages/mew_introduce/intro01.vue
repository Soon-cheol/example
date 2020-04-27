<template>
  <div class="container">
    <div class="text-contents">
      <div class="txt txt1">노래로 배우는 영어</div>
      <div class="txt txt2">놀이로 배우는 영어</div>
      <img class="logo" src="/images/mew01.png" />
    </div>
    <div class="emblem"><img src="/images/mew02.png" /></div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/variable';

@import url('https://fonts.googleapis.com/css?family=Jua:400');

.container {
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin: 0 auto;
  align-items: center;

  .text-contents {
    width: 50%;
    .txt {
      font-family: 'Jua';
      font-size: 3em;
      font-weight: bold;
    }
    .logo {
      width: 100%;
      padding-top: 30px;
    }
    .txt1 {
      color: #f7305e;
    }
    .txt2 {
      color: #26b2f0;
    }
  }
  .emblem {
    width: 50%;
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: $mobileSize) {
  .container {
    width: 100vw;
    flex-direction: column;
    .text-contents {
      width: 80%;
      .txt {
        font-size: 1.9em;
      }
      .logo {
        padding-top: 30px;
      }
    }
    .emblem {
      width: 80%;
      margin: 10%;
    }
  }
}
</style>
