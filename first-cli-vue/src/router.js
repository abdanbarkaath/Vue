import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Child1 from './views/Child1.vue'
import Child2 from './views/Child2.vue'
import Child3 from './views/Child3.vue'
import EmitParent from './views/Emitparent.vue'


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
      path:'/child1',
      name:'child1',
      component:Child1
    },
    {
      path:'/child2',
      name:'child2',
      component:Child2
    },
    {
      path:'/child3',
      name:'child3',
      component:Child3
    },
    {
      path:'/emit',
      name:'EmitParent',
      component:EmitParent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
