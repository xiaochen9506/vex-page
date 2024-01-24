import { setConfig } from './config'
import 'element-plus/dist/index.css'

import VPage from './v-page/v-page.vue'
import VFilter from './v-filter/v-filter.vue'
import VTable from './v-table/v-table.vue'
import VElement from './v-element/v-element.vue'
import VPagination from './v-pagination/v-pagination.vue'

export {
  VTable,
  VFilter,
  VElement,
  VPagination,
  setConfig,
}

export default {
  install(app) {
    app.component('VPage', VPage)
    app.component('VFilter', VFilter)
    app.component('VTable', VTable)
    app.component('VElement', VElement)
    app.component('VPagination', VPagination)
  }
}
