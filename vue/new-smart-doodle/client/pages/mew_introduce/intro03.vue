<template>
  <div class="bg">
    <img class="emblem" src="/images/mew03.png" />
    <div class="container">
      <div class="title">
        특징과 장점
      </div>
      <div class="sub-container">
        <IntroCard :items="itemlist" />
        <div class="comment">
          <p>
            Song, Chant Song, Sing Along은 신나고 재미있는 노래를 반복적으로
            들려주어 자연스러운 발화를 돕습니다.
          </p>
          <p>
            동요는 Song 과 Chant song으로 변주하여 여러 번 들어도 지루하지
            않도록 구성되어있습니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IntroCard from './IntroCard'

export default {
  components: {
    IntroCard
  },
  data() {
    return {
      currentItemIDX: 0,
      itemlist: [
        {
          img: '/images/intro03/img01.png',
          text: '아름다운 일러스트와 부드럽고 섬세한 애니메이션'
        },
        {
          img: '/images/intro03/img02.png',
          text: '풍부하고 아름다운 선율과 귀에 쏙 쏙 들어오는 가사'
        },
        {
          img: '/images/intro03/img03.png',
          text: '가사와 내용의 이해를 돕는 스토리텔링과 연출'
        },
        {
          img: '/images/intro03/img04.png',
          text: '다양한 곡의 구성 부모님도 아이도 익숙한 노래'
        }
      ]
    }
  },
  created() {}
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/variable';

@import url('https://fonts.googleapis.com/css?family=Jua:400');
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
  background: #26b2f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .emblem {
    padding-top: 150px;
    width: 70%;
    max-width: 500px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    .title {
      padding: 30px;
      padding-bottom: 10px;
      font-family: 'Jua';
      font-size: 2em;
      font-weight: normal;
      color: #fff;
    }

    .sub-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
      .comment {
        padding: 20px;
        width: 400px;
      }
    }
  }
}
@media screen and (max-width: $mobileSize) {
  .bg {
    .emblem {
      padding-top: 40px;
    }
    .container {
      .title {
        font-size: 1.5em;
      }
      .sub-container {
        flex-direction: column;
      }
    }
  }
}
</style>
