import { setConfig } from './config'

import VPage from './v-page/v-page.vue'
import VFilter from './v-filter/v-filter.vue'
import VTable from './v-table/v-table.vue'
import VElement from './v-element/v-element.vue'
import VPagination from './v-pagination/v-pagination.vue'
import VForm from './v-form/v-form.vue'
import VDetail from './v-detail/index.vue'

export {
  VTable,
  VFilter,
  VElement,
  VPagination,
  VForm,
  VDetail,
  setConfig
}

export default {
  install(app, options = {}) {
    const { config } = options
    if (config) setConfig(config, app)

    app.component('VPage', VPage)
    app.component('VFilter', VFilter)
    app.component('VTable', VTable)
    app.component('VElement', VElement)
    app.component('VPagination', VPagination)
    app.component('VForm', VForm)
    app.component('VDetail', VDetail)
  }
}
