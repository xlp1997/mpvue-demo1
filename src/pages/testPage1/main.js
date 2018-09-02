import Vue from 'vue'
import App from './testPage1'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '列表',
    enablePullDownRefresh: true // 对应的子页面有下拉刷新功能
  }
}
