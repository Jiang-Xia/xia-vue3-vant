import router from './router'
import { getToken } from './utils/cookie' // get token from cookie
const whiteList = ['/login', '/register']
router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  // console.log(hasToken)
  if (hasToken) {
    next()
  } else {
  //  没有token时
    if (whiteList.indexOf(to.path) !== -1) {
      // 从timeOut路由跳转到login页面
      next()
    } else {
      // 没有token时输入其他路由 拦截并重定向到登录页面
      // next(`/login?redirect=${to.path}`)
      next('/login')
    }
  }
})
