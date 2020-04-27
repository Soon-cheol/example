<template>
  <div class="container">
    <canvas ref="stage" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapState } from 'vuex'
import { MewManager } from './MewManager'

const MewMGR = new MewManager()

export default {
  // name: 'MGStudy',
  props: {
    pid: { type: String, default: '' },
    musicList: {
      type: Array,
      default: () => {
        return []
      }
    }
    // files: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // }
  },
  data() {
    return {}
  },
  created() {
    // musicList가 준비가 안되어있다면. restAPI요청
    if (this.musicList.length === 0 && this.logined) {
      this.$store.dispatch('lectures/getMusicList')
    }
  },
  mounted() {
    // console.warn(this.item)
    // window.onpopstate = (e) => {
    //   console.warn('뒤로가기 버튼 클릭 ===============')
    //   if (window.Mew) {
    //     window.Mew.onStop()
    //   }
    //   this.destroy()
    // }
    // // const prodId = 'PD-20200226152402353'
    // // const cntsId = 'CS-20200223125512159'

    // this.$nextTick(async () => {
    //   console.warn('next tick ===========')
    //   await this.load()
    //   this.setSize()
    //   window.addEventListener('resize', this.setSize)
    //   this.$on('hook:beforeDestory', () => {
    //     window.removeEventListener('resize', this.setSize)
    //   })
    // })

    window.MGContentProvider = {}

    /**
     * app start 하면서 앱내 메소드와 api메소드 연동
     */
    MGContentProvider.getProductList = this.getProductList
    // MGContentProvider.getContentList = this.getContentList
    MGContentProvider.getProduct = this.getProduct
    MGContentProvider.saveContentComplete = this.saveContentComplete
    MGContentProvider.savePortfolio = this.savePortfolio
    MGContentProvider.getPortfolioList = this.getPortfolioList
    MGContentProvider.goStore = this.goStore
    MGContentProvider.closeApp = this.closeApp
    MewMGR.play(this.$refs.stage, this.pid)
  },
  methods: {
    ...mapActions({
      onGetProductList: 'lectures/getMusicList',
      onGetContentList: 'lectures/getMusicDetail',
      onSaveContentStart: 'lectures/saveContentStart',
      onSaveContentComplete: 'lectures/saveContentComplete',
      onSavePortfolio: 'lectures/savePortfolio',
      onGetPortfolio: 'lectures/getPortfolio'
    }),

    /**
     * Mew 객체 삭제 및 mgapplication script 삭제
     */
    destroy() {
      console.warn('destroy ================== ')
      window.Mew = undefined
      delete window.Mew
      MewMGR.scriptUnload()
    },
    /**
     * ==================================== binding mehtods
     */
    /**
     * Api -> App
     * 초기 상품(곡)정보 셋팅 = 구매완료한 상품(곡) 리스트 + 각 상품(곡)의 콘텐츠(액티비티) 정보
     */
    async getProductList(callback = () => {}) {
      const rs = await this.addActivityToPayedList()
      if (!rs.ok) {
        alert('구매하신 상품이 없습니다')
        return
      }
      callback(rs.ok, rs.result)
    },
    /**
     * App -> Api
     * 해당 상품(곡)의 콘텐츠(액티비티) 정보만 가져옴.
     * 상세뷰어 -> 메인뷰어 이동시 갱신
     *
     * @param prodId 상품아이디
     * @param myLrngSeqno 나의학습일련번호
     */
    async getProduct(prodId = '', callback = () => {}) {
      try {
        const param = {
          prodId,
          myLrngSeqno: this.getMyLrngSeqno(prodId)
        }
        const rs = await this.onGetContentList(param)
        callback(rs.ok, rs.result)
      } catch (e) {
        callback(e.ok)
      }
    },
    /**
     * App -> Api
     * 액티비티 완료 후 큐레이션 이동시 액티비티 정보 갱신하기 위함
     * 1상품 + 12콘텐츠
     */
    // async getProduct(prodId = '', callback = () => {}) {
    //   await this.onGetProductList()
    //   const rs = await this.addActivityToPayedList()
    //   let b = {}
    //   for (const a of rs.result) {
    //     if (a.prodId === prodId) {
    //       b = a
    //     }
    //   }
    //   // eslint-disable-next-line standard/no-callback-literal
    //   callback(true, b)
    // },
    /**
     * App -> Api
     * 콘텐츠 -> 메인뷰어로 이동시 콘텐츠 완료여부를 저장후 모든 콘텐츠를 완료찍으면 상품(곡)완료여부가 체크가 되어야한다. 상품아이디와 완료여부만 데이터가공하여 리턴.
     */
    // async chkProductComplete(prodId = '', callback = () => {}) {
    //   await this.onGetProductList
    //   // eslint-disable-next-line standard/no-callback-literal
    //   callback(true, this.getChkProductComplete())
    // },
    /**
     * App -> Api
     * 콘텐츠(액티비티) 1개에 대한 완료여부
     */
    // async chkContentComplete(prodId = '', cntsId = '', callback = () => {}) {
    //   const param = {
    //     prodId,
    //     myLrngSeqno: this.myLrngSeqno()
    //   }
    //   // prodId로 상세 액티비티들 가져옴.
    //   const detail = await this.onGetContentList(param)
    //   console.log('=================', detail)
    //   // cntsId로 1개 액티비티 정보 가져옴.
    //   // 완료여부 체크하여 리턴.
    //   // callback(ok, value)
    // },
    /**
     * App -> Api
     * 콘텐츠(액티비티) 진도체크시작
     *
     * @param myLrngSeqno 나의학습일련번호
     * @param prodCmptSeqno 상품구성일련번호
     * @param prodId 상품아이디
     * @param cntsId 콘텐츠아이디
     * @param callback
     */
    async saveContentStart(prodId = '', cntsId = '', callback = () => {}) {
      const param = {
        prodId,
        cntsId,
        myLrngSeqno: this.getMyLrngSeqno(prodId)
      }
      const rs = await this.onSaveContentStart(param)
      callback(rs)
    },
    /**
     * App -> Api
     * 콘텐츠(액티비티) 진도체크완료
     *
     * @param myLrngSeqno 나의학습일련번호
     * @param prodId 상품아이디
     * @param cntsId 콘텐츠아이디
     * @param callback
     */
    async saveContentComplete(prodId = '', cntsId = '', callback = () => {}) {
      const param = {
        prodId,
        cntsId,
        myLrngSeqno: this.getMyLrngSeqno(prodId),
        prodCmptSeqno: await this.getProdCmptSeqno(prodId, cntsId)
      }
      const rs = await this.onSaveContentComplete(param)
      callback(rs.ok)
    },
    /**
     * App -> Api
     * 이미지, 음성녹음파일 저장
     *
     * @param myLrngSeqno 나의학습일련번호
     * @param prodId 상품아이디
     * @param fileData 저장될 데이터
     * @param fileType ???
     */
    async savePortfolio(
      prodId = '',
      studycode = '',
      fileData = null,
      fileType = '',
      callback = () => {}
    ) {
      // studycode substr
      const studycodeTemp = studycode.substr(studycode.length - 2, 2)
      let fileTypeTemp = ''
      fileType === 'sound' ? (fileTypeTemp = 'wav') : (fileTypeTemp = 'image')

      const param = {
        myLrngSeqno: this.getMyLrngSeqno(prodId),
        prodId,
        galrLrngClCd: studycodeTemp,
        galrLrngTpCd: studycodeTemp,
        tbpfiles: fileData,
        fileType: fileTypeTemp
      }
      const rs = await this.onSavePortfolio(param)
      callback(rs.ok)
    },
    /**
     * Api -> App
     * 포트폴리오 리스트 가져오기
     *
     * @param myLrngSeqno 나의학습일련번호
     * @param prodId 상품아이디
     * @param studyCode 불러올 콘텐츠 코드(01~12)
     * @param listCount 불러올 데이터 갯수
     * @param galrClCd GA: MyOwnStage, GB:SingAlong, GC:pingment
     */
    async getPortfolioList(
      studycode = '',
      listCount = '',
      callback = () => {}
    ) {
      const param = {
        galrLrngTpCd: studycode
      }
      const rs = await this.onGetPortfolio(param)
      callback(rs.ok, rs.result)
    },
    /**
     * App -> Api
     * 구매페이지 이동, 리스트 갱신 후 뷰어닫는기능이면 됌.
     */
    async goStore() {
      await this.closeApp()
    },
    /**
     * App -> Api
     * 학습창 종료
     * 종료시 내 강의실 리스트 갱신. - 상품(곡) 완료여부 갱신위해
     */
    async closeApp() {
      this.destroy()
      await this.onGetProductList()
      this.$emit('close')
    },

    /**
     * ==================================== 재료들
     */
    /**
     * 상품구성일련번호 추출
     * @param prodId 나의학습일련번호
     * @return string
     */
    async getProdCmptSeqno(prodId = '', cntsId = '') {
      const param = {
        prodId,
        myLrngSeqno: this.getMyLrngSeqno(prodId)
      }
      const rs = await this.onGetContentList(param)
      for (const a of rs.result) {
        if (Object.is(a.cntsId, cntsId)) {
          return a.prodCmptSeqno
        }
      }
    },
    /**
     * 나의 학습 일련번호
     * @param prodId 상품아이디
     *
     * @return String 나의학습일련번호
     */
    getMyLrngSeqno(prodId = '') {
      for (const a of this.musicList) {
        if (Object.is(a.prodId, prodId)) return a.myLrngSeqno
      }
    },
    /**
     * 상품(곡)의 콘텐츠(액티비티) 전체완료 여부 - 보상카드 관련
     * @param prodId 상품아이디
     *
     * @return boolean
     */
    // async getChkProductComplete(prodId = '') {
    /** 곡에 대한 정보 넘겨주는 걸로 수정 */
    // for (const a of this.getPayedList) {
    //   return !!Object.is(a.prodId, prodId)
    // }
    // const rs = await this.onGetContentList(param)
    // },
    // 구매된 상품(곡)리스트
    getPayedList() {
      const rs = []
      for (const a of this.musicList) {
        if (a.myLrngIsuse === '1') {
          rs.push(a)
        }
      }
      return rs
    },
    /**
     * 구매된 리스트에 액티비티 추가하기
     * 구매된 상품n + 12콘텐츠
     * @return Object
     */
    async addActivityToPayedList() {
      const payedList = this.getPayedList()
      if (payedList.length) {
        for (const a of payedList) {
          try {
            const rs = await this.onGetContentList(a)
            a.activities = rs.result
          } catch (e) {
            return {
              ok: false,
              result: null
            }
          }
        }
        return {
          ok: true,
          result: payedList
        }
      }
      return { ok: false, result: null }
    },
    getSize() {
      const wsize = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      const standard = {
        w: { width: 0, height: 0 },
        h: { width: 0, height: 0 }
      }

      standard.w.width = wsize.width
      standard.w.height = wsize.width * (10 / 16)

      standard.h.width = wsize.height * 1.5023
      standard.h.height = wsize.height

      const frame = {
        width: 0,
        height: 0
      }

      frame.width = wsize.height * 1.624
      frame.height = wsize.height

      return frame
    },
    setSize() {
      // const size = this.getSize()
      // this.$refs.mgStudyInner.style.width = `${size.width}px`
      // this.$refs.mgStudyInner.style.height = `${size.height}px`
    },
    /**
     * 서버에 위치한 js경로 리턴
     */
    getPath(fileName = '') {
      const baseUrl = 'https://www.minigate.kr:53443/viewer/mew/js'
      return `${baseUrl}${fileName}`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  canvas {
    /* width: 100%; */
    /* height: calc( 100vw * 0.625 ) !important; */
    width: 100vw !important;
    height: calc(100vw * 0.625) !important;
    background-color: rgb(0, 0, 0);
  }
  @media screen and (min-aspect-ratio: 16/10) {
    canvas {
      height: 100vh !important;
      width: calc(100vh * 1.6) !important;
    }
  }

  @media screen and (orientation: landscape) {
    canvas {
      // width: calc(100% * 1.6) !important;
      // height: 100%;
      // border: 2px solid #f00;
    }
  }
  @media screen and (orientation: portrait) {
    canvas {
      width: 100vw !important;
      height: calc(100vw * 0.625) !important;
    }
  }
}
</style>
