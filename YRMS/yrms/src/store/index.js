import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './user';
import rental from './rental';
import rentalDetail from './rentalDetail';
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    rental,
    rentalDetail
  }
})
//state:仓库存储数据的地方
//mutations:修改state的唯一手段
//action:处理action，可以书写自己的业务逻辑，也可以处理异步
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便