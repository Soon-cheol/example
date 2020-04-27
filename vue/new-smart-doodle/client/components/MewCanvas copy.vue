<template>
  <div class="container">
    <canvas ref="stage" />
  </div>
</template>

<script>
const _ScriptHandle = {}
// 모든 MGApplication용 스크립트를 로드한다.
function scriptLoad(src = '', async = true) {
  return new Promise((resolve, reject) => {
    if (!src) reject(new Error('js의 src가 없습니다.'))

    const exist = document.querySelector(`script[src='${src}']`)
    if (exist) {
      resolve(exist)
      return
    }

    const script = document.createElement('script')
    script.onload = () => {
      _ScriptHandle[src] = script
      resolve(script)
    }
    script.onerror = () => {
      reject(new Error('script load error'))
      document.body.removeChild(script)
    }
    script.async = async
    script.src = src

    document.body.appendChild(script)
  })
}

export default {
  props: {
    pid: { type: String, default: '' },
    musicList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    this.contentsAddress = 'https://www.minigate.kr:53443/viewer/mew/'
    this.stage = this.$refs.stage
    this.scriptHandle = {}
    this.scriptList = [
      'js/webfont.js',
      'js/magic-wand.js',
      'js/pixi.min.js',
      'js/pixi-spine.js',
      'js/pixi-sound.js',
      'js/pixi-minigate.js',
      'js/recorder.js',
      'js/MGContentProvider.js',
      'js/mgapplication.js'
    ]
  },

  async mounted() {
    for (const scr of this.scriptList) {
      // console.log(this.contentsAddress + scr)
      try {
        await scriptLoad(this.contentsAddress + scr)
      } catch (e) {}
    }
    this.readyForMGProvider()
    this.startMew()
  },

  methods: {
    // scriptLoad(src = '', async = true) {
    //   return new Promise((resolve, reject) => {
    //     if (!src) reject(new Error('js의 src가 없습니다.'))

    //     const exist = document.querySelector(`script[src='${src}']`)
    //     if (exist) {
    //       resolve(exist)
    //       return
    //     }

    //     const script = document.createElement('script')
    //     script.onload = () => {
    //       // console.log('-> script load:', src)
    //       resolve(script)
    //     }
    //     script.onerror = () => {
    //       reject(new Error('script load error'))
    //       document.body.removeChild(script)
    //     }
    //     script.async = async
    //     script.src = src

    //     document.body.appendChild(script)
    //   })
    // },

    readyForMGProvider() {
      console.log(MGContentProvider)
      MGContentProvider = {}
      MGContentProvider.getProductList = this.getProductList
      // MGContentProvider.getContentList = this.getContentList
      MGContentProvider.getProduct = this.getProduct
      MGContentProvider.saveContentComplete = this.saveContentComplete
      MGContentProvider.savePortfolio = this.savePortfolio
      MGContentProvider.getPortfolioList = this.getPortfolioList
      MGContentProvider.goStore = this.goStore
      MGContentProvider.closeApp = this.closeApp
    },

    startMew() {
      WebFont.load({
        custom: {
          families: ['BPreplay', 'NotoSansKR'],
          urls: [this.contentsAddress + 'fonts/fonts.css']
        },
        active() {
          console.log('->Mew.start:', this.pid)
          Mew.start(this.stage, this.pid)
        }
      })
    },

    // MGApplication bind --------------------------------
    async getProductList(callback = (ok, list_) => {}) {
      console.log('-->', this.musicList)
      for (const info of this.musicList) {
        if (info.isBuyed) {
          const rs = await this.$store.dispatch('lectures/getMusicDetail', {
            prodId: info.productID,
            myLrngSeqno: info.myLrngSeqno
          })
          info.activities = rs.result
        }
      }
      // eslint-disable-next-line standard/no-callback-literal
      callback(true, this.musicList.splice(0))
    },
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
    async goStore() {
      await this.closeApp()
    },
    async closeApp() {
      this.destroy()
      await this.onGetProductList()
      this.$emit('close')
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
    width: 100vw;
    height: calc(100vw * 0.625) !important;
    background-color: rgb(255, 0, 0);
  }
  @media screen and (orientation: landscape) {
    canvas {
      width: calc(100vh * 1.6) !important;
      height: 100%;
    }
  }
  @media screen and (orientation: portrait) {
    canvas {
      width: 100vw;
      height: calc(100vw * 0.625) !important;
    }
  }
}
</style>
