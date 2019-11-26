import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shoes from '../components/Data/Shoes/shoes'
import Tshirts from '../components/Data/Tshirts/tshirts'
import Shirt from '../components/SinglePage/shirt'
import Shoe from '../components/SinglePage/shoe'
import Cart from '../components/ShoppingCart/cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: Shoes
  },
  {
    path: '/shoe/:id',
    name: 'shoe',
    component: Shoe
  },
  {
    path: '/tshirts',
    name: 'tshirts',
    component: Tshirts,
  },
  {
    path: '/tshirt/:id',
    name: 'shirt',
    component: Shirt,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
]

const router = new VueRouter({
  routes
})

export default router
