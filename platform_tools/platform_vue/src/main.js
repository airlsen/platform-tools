import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//公共方法
import {post,get,patch,put} from './api/http'
import {syntaxHighlight} from './api/apiUtil'


//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$syntaxHighlight=syntaxHighlight;


import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


