import { createApp } from 'vue'
import App from './App.vue'
import VexPage, { setConfig } from '../lib/index' //导入
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../lib/style.css'



// 设置
setConfig({
  pageSizeKey: 'pageSize',
  pageNumKey: 'pageNum',
  getList: res => res.data,
})

const app = createApp(App)
app.use(VexPage) //注册
app.use(ElementPlus)
app.use(router)
app.mount('#app')
