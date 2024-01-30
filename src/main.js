import { createApp } from 'vue'
import App from './App.vue'
import VexPage, { setConfig } from '../packages/index' //导入
import router from './router'


// 设置
setConfig({
  pageSizeKey: 'pageSize',
  pageNumKey: 'pageNum',
  getList: res => res.data,
})

const app = createApp(App)
app.use(VexPage) //注册
app.use(router)
app.mount('#app')
