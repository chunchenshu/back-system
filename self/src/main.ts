import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'//导入路由
import ElementPlus from 'element-plus'//导入elelment-plus
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'//引入国际化
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)//创建实例
app.use(router)//挂载路由
app.use(createPinia())
// 引入ui库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(ElementPlus)

app.mount('#app')
