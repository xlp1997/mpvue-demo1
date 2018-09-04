import Vue from 'vue'
import App from './App'
import fly from './utils/request'
import WXrequest from './utils/wx-request'
Vue.prototype.$fly = fly
Vue.prototype.$httpWX = WXrequest

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
