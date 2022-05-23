import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入iconfont
import './assets/styles/iconfont.css'
Vue.config.productionTip = false
//测试apifox
// import {reqGetCode} from '@/api';
// reqGetCode('15138833006');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
