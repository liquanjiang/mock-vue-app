import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Login = () => import('../views/login/index')
const meta = { requireAuth: false } // 表示不需要权限可以直接访问的路由
const auth = { requireAuth: true } // 表示需要权限可以直接访问的路由

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: meta,
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    meta: auth,
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: auth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
