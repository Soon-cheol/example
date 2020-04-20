const webpack = require('webpack')

// export default -> module.export 로 변경
module.exports = {
  // mode: 'spa',
  mode: 'universal',
  srcDir: 'client',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge, chrome=1'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: '/favicons/favicon.ico',
        type: 'image/x-icon'
      },

      // Works in Chrome, Safari, IE
      {
        rel: 'icon',
        href: '/favicons/favicon.ico',
        type: 'image/x-icon'
      },

      // Default Sizes
      {
        rel: 'icon',
        href: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        rel: 'icon',
        href: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        rel: 'icon',
        href: '/favicons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },

      // Apple Devies
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon.png',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png'
      },

      {
        rel: 'apple-touch-icon-precomposed',
        href: '/favicons/apple-icon-precomposed.png',
        type: 'image/png'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.findIndex%2CArray.from%2CArray.prototype.entries%2CObject.entries',
        body: true
      },
      {
        src: '//developers.kakao.com/sdk/js/kakao.min.js',
        body: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/css/reset.scss', lang: 'scss' },
    { src: '~assets/css/index.scss', lang: 'scss' },
    { src: '~assets/css/button.scss', lang: 'scss' },
    { src: '~assets/css/plugin/swiper.css', lang: 'css' } // VueAwesomeSwiper CSS
  ],
  /*
   ** Style-resources module configuration, 필요한 scss파일에 import해서 사용.
   */
  styleResources: {
    scss: []
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vue-fontawesome.js', ssr: true },
    { src: '~/plugins/vue-js-modal', ssr: false },
    { src: '~/plugins/vue-daum-postcode', ssr: false },
    { src: '~/plugins/google-oauth2', ssr: false },
    { src: '~/plugins/vue-core-video-player.js', ssr: false },
    { src: '~/plugins/axios', ssr: false },
    { src: '~/plugins/vue-full-page', ssr: false }
  ],
  /*
   ** Auth module configuration
   */
  router: {
    middleware: ['auth', 'route-info']
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'client/pages/mew.vue')
    //   })
    // }
  },
  auth: {
    redirect: {
      login: false,
      logout: false,
      home: false
    },
    strategies: {
      local: {
        tokenType: 'Bearer',
        endpoints: {
          login: {
            url: '/login/userlogin',
            // url: "/member/login",
            method: 'post',
            propertyName: 'result.logintoken'
          },
          logout: false,
          user: false
          // user: {
          //   url: '/mypage1/profile1',
          //   method: 'get',
          //   propertyName: 'result',
          // },
        }
      }
    }
  },

  /*
   ** Google-analytics module configuration
   */
  // googleAnalytics: {
  //   id: process.env.GA_ID || 'UA-135389324-1',
  //   debug: {
  //     enabled: false,
  //     trace: false,
  //     sendHitTask: true, // process.env.NODE_ENV === 'production',
  //   },
  // },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
    // '@nuxtjs/sentry',
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/style-resources',
    // '@nuxtjs/moment',
    // 'nuxt-mq',
    // "nuxt-purgecss"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || 'http://210.223.45.233:8030'
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    vendor: ['jspdf', 'jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
