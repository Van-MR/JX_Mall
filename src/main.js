// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.config.productionTip = false
//导入路由配置模块index.js
import router from './router'
// 导入resource模块
import resource from 'vue-resource'

import swiper from "../static/javascript/swiper.min"

Vue.use(resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})