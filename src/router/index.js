import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/GH/Head'
import Login from '@/components/GH/Login'
import Register from '@/components/GH/Register'


Vue.use(Router);

export default new Router({

  mode: 'history',//去掉#号

  routes: [
    {
      path:'/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name:'Login',
      path:'/login',
      component:Login
    },

    {
      name:'Register',
      path:'/register',
      component:Register
    }
  ]
})
