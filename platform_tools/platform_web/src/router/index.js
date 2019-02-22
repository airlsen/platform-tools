/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Full',
    //   component: Full
    // },

    {
      path: '/',
      redirect: '/home',
      name: '首页',
      component: Full,
      hidden: false,
      children: [
        {path: '/home', name: '首页', icon: 'thumbsup', component: _import('home/home')}
      ]
    }

  ]
})
