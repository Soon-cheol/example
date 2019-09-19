import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'

import './assets/css/reset.css'
import './assets/css/element-ui.css'
import './assets/css/layout.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
