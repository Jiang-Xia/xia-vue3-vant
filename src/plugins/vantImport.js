import Vue from 'vue'

// 按需引入
import {
  Toast,
  ImagePreview,
  NavBar,
  Tab,
  Tabs,
  PullRefresh,
  Uploader, Tabbar,
  TabbarItem,
  Icon,
  Image,
  Button,
  Form,
  field
} from 'vant'
Vue.prototype.$Toast = Toast
Vue.use(ImagePreview)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(PullRefresh)
Vue.use(Uploader)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Button)
Vue.use(Form)
Vue.use(field)

