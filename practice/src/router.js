import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Registeration from './views/Registeration.vue'
import Login from './views/Login.vue'
import Computed from './views/Computed.vue'
import toaster from './views/toaster.vue'
import styleCheck from './views/styleCheck.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/registeration',
      name:'registeration',
      component:Registeration
    },
    {
      path:'/computed',
      name:'computed',
      component:Computed
    },
    {
      path:'/toaster',
      name:'toaster',
      component:toaster
    },
    {
      path:'/styleCheck',
      name:'styleCheck',
      component:styleCheck
    },
    {
      path: '/about',
      name: 'about',
      component:About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
