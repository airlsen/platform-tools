import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Home from '@/views/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: '首页',
      component: Full,
      hidden:false,
      children: [
        {path: '/home',name: '首页',component: _import('home/Home')},
      ]
    },
  ]
})
