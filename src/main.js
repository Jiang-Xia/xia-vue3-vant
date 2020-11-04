import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import vant from 'vant'
// import './styles/base.scss'
import router from './router/index'
import store from './store/index'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(vant)
app.mount('#app')
