import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Weather from '../views/Weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:Dashboard
  },
  {
    path: '/weather',
    name: 'weather',
    component:Weather
  }
]

const router = new VueRouter({
  routes
})

export default router
