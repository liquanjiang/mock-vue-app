import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import { Message } from 'element-ui'

const Login = () => import('../views/login/index')
// 门店管理下的菜单
const equipment = () => import('@/views/shop/equipment/index')
const sale = () => import('@/views/shop/sale/index')
const employee = () => import('@/views/shop/employee/index')
const empty = () => import('@/views/empty')
const meta = { requireAuth: false } // 表示不需要权限可以直接访问的路由
const auth = { requireAuth: true } // 表示需要权限可以直接访问的路由

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: meta,
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: meta,
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    meta: auth,
    component: Home,
    children: [
      {
        path: 'shop/equipment',
        name: 'equipment',
        meta: auth,
        component: equipment,
      },
      {
        path: 'shop/sale',
        name: 'sale',
        meta: auth,
        component: sale,
      },
      {
        path: 'shop/employee',
        name: 'employee',
        meta: auth,
        component: employee,
      },
      {
        path: '404',
        name: '404',
        meta: auth,
        component: empty,
      },
      { // 未匹配到的页面
        path: '*',
        redirect: {
          name: '404',
        }
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    meta: auth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { // 未匹配到的页面
    path: '*',
    redirect: {
      name: '404',
    }
  },
]

const router = new VueRouter({
  routes
})

/**  * 路由拦截* 权限验证 */

router.beforeEach((to, from, next) => {
  if (to.path.includes('login')) {
    window.localStorage.clear()
  } else {
    // window.sessionStorage.setItem('isLogin', 'true')
  }
  // 验证当前路由所有的匹配中是否需要有登陆验证的
  if (to.matched.some(r => r.meta.requireAuth)) {
    // 这里暂时将sessionStorage里是否存有isLogin作为验证是否登陆的条件
    // 请根据自身业务需要修改
    const user = window.localStorage.getItem('userName')
    const psw = window.localStorage.getItem('password')
    if (user && psw) {
      next()
    } else {
      // 没有登录的时候跳转到登录界面
      // eslint-disable-next-line new-cap
      Message({
        message: '您还没有登录，请先登录',
        type: 'warning',
        duration: 5 * 1000
      })
      next({ name: 'Login' })
    }
  } else if (to.matched.length === 0) {
    next({ name: '404' })
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

// 路由跳转成功后需要执行的操作
router.afterEach(to => {
  console.log(to)
})

export default router
