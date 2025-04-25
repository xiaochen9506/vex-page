import { createApp } from 'vue'
import App from './App.vue'
import VexPage from '../packages/index' //导入
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(VexPage, {
  config: {
    GET_LIST: data => data.data,
    GET_TOTAL: data => data.total,
    PAGE_NUM_KEY: 'pageNum',
    PAGE_SIZE_KEY: 'pageSize',
    PAGE_SIZE: 30,
  }
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')
