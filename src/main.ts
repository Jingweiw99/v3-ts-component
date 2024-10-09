import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'

const app = createApp(App)
// 全局注册图标，会牺牲一点性能
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // console.log(`el-icon-${toLine(key)}`, component)

  app.component(`el-icon-${toLine(key)}`, component)
}
app.use(router).use(ElementPlus)
app.mount('#app')
