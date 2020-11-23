import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../node_modules/amfe-flexible/index.js'
import './styles/base.scss'
import 'vant/lib/index.css' // 引入less就不用引入css了
import { openLoading, closeLoading } from './utils/loading'
import localforage from 'localforage'
import echarts from 'echarts'
// import * as d3 from "d3"
// Vue.prototype.$d3 = d3
import Vconsole from 'vconsole'
new Vconsole()
if (process.env.NODE_ENV !== 'production') {
  new Vconsole()
}
import $axios from './utils/request.js'
import './permission'
const julyDb = localforage.createInstance({
  name: 'julyDb',
  storeName: `julyDbStore`
})


import './styles/base.scss'
import router from './router/index'
import store from './store/index'
const app = createApp(App)
const GProp = app.config.globalProperties
GProp.$echarts = echarts
GProp.$axios = $axios
GProp.$julyDb = julyDb
GProp.localforage = localforage
GProp.$openLoading = openLoading
GProp.$closeLoading = closeLoading
GProp.$getCode = getCode
GProp.$getOpenType = getOpenType
GProp.devtools = false    
GProp.$getToken = getToken
GProp.$axios = axios
app.use(router)
app.use(store)
app.use(vant)
app.mount('#app')
