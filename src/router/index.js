import Layout from './modules/Layout'
const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Rogin',
    component: () => import('./views/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/register')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('./views/my/setting')
  },
  Layout
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
