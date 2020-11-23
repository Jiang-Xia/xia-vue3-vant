import axios from 'axios'
import router from './router/index.js'
import { closeLoading, openLoading } from './utils/loading'
import { getToken, removeToken } from './utils/cookie'
import { baseUrl } from './api/config'
// import Vue from 'vue'
// import { Message } from 'element-ui'
import { Toast } from 'vant'
const $axios = axios.create({
  timeout: 4290000
})
$axios.interceptors.request.use(
  config => {
    openLoading()
    config.baseURL = baseUrl
    const token = getToken()
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    // 请求头部添加token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 响应拦截器
 * 用于处理loading状态关闭、请求成功回调、响应错误处理
 */
$axios.interceptors.response.use(
  response => {
    closeLoading()
    // console.log(response.data)
    const status = response.status
    const code = response.data.code
    if ((status >= 200 && status < 300) || status === 304) {
      // const pollingStatus = response.data.data.status
      // console.log(response.data)
      if (code === '00000') {
        return Promise.resolve(response.data)
      } else {
        Toast.fail(response.data.msg)
        return Promise.reject(new Error(response.data || 'Error'))
      }
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    closeLoading()
    const { data } = error.response || {}
    // console.log(data)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (/401$/.test(data.code) || /401$/.test(data.code)) { // 授权无效或者授权超时
            Toast.fail(data.msg)
            // console.log('====================================')
            // console.log(router.currentRoute.fullPath)
            // console.log('====================================')
            router.replace({
              name: 'login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
            removeToken()
          } else {
            Toast.fail(data.msg)
          }
          break
        case 404:
          Toast.fail('网络请求不存在')
          break
        default:
          Toast.fail(error.response.data.msg)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        Toast.fail('请求超时！请检查网络是否正常')
      } else {
        Toast.fail('请求失败，请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

export default $axios
