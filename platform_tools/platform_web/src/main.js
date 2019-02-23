/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;


Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(iView);
/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
