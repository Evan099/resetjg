import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import admin from '../pages/Admin/Admin'
Vue.use(Router)

export default new Router({
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
