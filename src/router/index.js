import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home'
// 固定路由
export const constantRoutes = [
//   {
//     path: '/login',
//     name: 'login',
//     hidden: true,
//     component: () => import('@/views/login/index-transfer'),
//     meta: {
//       title: '登录'
//     }
//   },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/home',
    component:Home,
    hidden: true
  },
  {
    path: '/404',
    name:'404',
    // component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    name:'401',
    // component: () => import('@/views/error-page/401'),
    hidden: true
  }
]
// 异步路由根据权限配置
export const asyncRoutes = [
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]
export function resetRouter() {
  // const newRouter = createRouter()
  // router.matcher = newRouter.matcher
}
const router = createRouter({
  history: createWebHashHistory(),
  routes:constantRoutes
})

export default router
