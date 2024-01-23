import { setConfig } from './config'
import 'element-plus/dist/index.css'

import VPage from './v-page/index.vue'
import VFilter from './v-filter/index.vue'
import VTable from './v-table/v-table.vue'

export {
  VTable,
  VFilter,
  setConfig,
}

export default {
  install(app) {
    app.component('VPage', VPage)
    app.component('VFilter', VFilter)
    app.component('VTable', VTable)
  }
}
