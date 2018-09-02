import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({// 创建Vuex实例
  state: {// 状态值
    count: 1
  },
  mutations: {// 对值执行的操作
    jiaCount: (state) => {
      state.count += 1
      console.log(state.count)
    },
    jianCount: (state) => {
      state.count -= 1
    }
  }
})
