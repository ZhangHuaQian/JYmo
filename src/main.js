import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
Vue.prototype.axios = axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
Vue.use(ElementUI, { locale })

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css
import 'babel-polyfill'

// import '@/styles/iconfont.css'
// import '@/styles/iconfont.eot'
// import '@/styles/iconfont.js'
// import '@/styles/iconfont.ttf'
// import '@/styles/iconfont.woff'
// import '@/styles/iconfont.woff2'
// import '@/styles/iconfont.svg'
import '@/assets/font_isw982vo4qg/iconfont.css'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
