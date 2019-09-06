import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import moment from 'moment';
import VueLodash from 'vue-lodash';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
// import VueCookies from 'vue-cookies';
import tinymce from 'vue-tinymce-editor';

Vue.component('tinymce', tinymce);
Vue.use(Chartkick.use(Chart));
Vue.use(VueLodash);

Vue.use(ElementUI, { locale });
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})