class MewManager {
  constructor() {
    this._baseUrl = 'https://www.minigate.kr:53443/viewer/mew/js/'

    this._paths = [
      'webfont.js',
      'magic-wand.js',
      'pixi.min.js',
      'pixi-spine.js',
      'pixi-sound.js',
      'pixi-minigate.js',
      'recorder.js',
      'mgapplication.js'
    ]

    this._scripts = {}
  }
  async loadDependencies() {
    for (const path of this._paths) {
      if (!this._scripts.hasOwnProperty(this._baseUrl + path)) {
        try {
          await this.scriptLoad(this._baseUrl + path)
        } catch (e) {
          return false
        }
      }
    }
    return true
  }

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
        this._scripts[src] = script
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

  scriptUnload() {
    for (const name of Object.keys(this._scripts)) {
      document.body.removeChild(this._scripts[name])
    }
    this._scripts = {}
  }

  // eslint-disable-next-line require-await
  async play(stage, productID) {
    const isLoaded = await this.loadDependencies()
    if (!isLoaded) {
      return
    }
    window.WebFont.load({
      custom: {
        families: ['BPreplay', 'NotoSansKR'],
        urls: ['https://www.minigate.kr:53443/viewer/mew/fonts/fonts.css']
      },
      active() {
        Mew.start(stage, productID)
      }
    })
  }
}

export { MewManager }
