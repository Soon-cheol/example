<template>
  <div class="container">
    <canvas ref="stage" />

    <!-- <script src="https://www.minigate.kr:53443/viewer/mew/js/webfont.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/magic-wand.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/pixi.min.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/pixi-spine.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/pixi-sound.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/pixi-minigate.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/recorder.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/MGContentProvider.js" />
    <script src="https://www.minigate.kr:53443/viewer/mew/js/mgapplication.js" /> -->
  </div>
</template>

<script>
export default {
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
      console.log(this.contentsAddress + scr)
      try {
        this.scriptHandle[scr] = await this.scriptLoad(
          this.contentsAddress + scr
        )
      } catch (e) {}
    }
    this.readyForMGProvider()
    // this.startMew()
  },

  methods: {
    scriptLoad(src = '', async = true) {
      return new Promise((resolve, reject) => {
        if (!src) reject(new Error('js의 src가 없습니다.'))

        const exist = document.querySelector(`script[src='${src}']`)
        if (exist) {
          resolve(exist)
          return
        }

        const script = document.createElement('script')
        script.onload = () => {
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
    },

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
          Mew.start(this.stage, 'PD-20200306151655475')
        }
      })
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
