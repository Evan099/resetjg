import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import admin from '../pages/Admin/Admin'
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉#号，后端要更改相应配置，否则会报404错误
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
