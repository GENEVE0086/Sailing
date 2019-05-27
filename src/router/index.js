import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/GH/Login'
import Register from '@/components/GH/Register'
import total from '@/components/li/total'
import search from '@/components/li/search'

Vue.use(Router)

export default new Router({

  mode: 'history', // 去掉#号

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },

    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'total',
      path: '/total',
      component: total
    },
    {
      name:'search',
      path: '/search',
      component:search
    }
  ]

})
