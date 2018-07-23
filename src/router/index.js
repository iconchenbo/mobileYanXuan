/*
* 路由器
* */

import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Category from '../pages/Category/Category.vue'
import Shopcart from '../pages/Shopcart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'
import Startpage from '../pages/StartPage/StartPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/startpage',
      component:Startpage
    }
    ,
    {
      path: '/msite',
      component:Msite
    },
    {
      path: '/shiwu',
      component:Shiwu
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/shopcart',
      component:Shopcart
    },
    {
      path: '/personal',
      component:Personal
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/',
      redirect:'/startpage'
    }
  ]
})
