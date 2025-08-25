<template>
  <div class="v-page" :class="{ pd: props.table && props.table.onAdd }">
    <VFilter
      v-if="showFilter"
      ref="filterRef"
      :filter="filter"
      :label-width="filterLabelWidth"
      :btns="filterBtns"
      :col="filterCol"
      @search="handleSearch"
      @reset="() => handleSearch({})"
    />

    <div class="v-page-operator">
      <el-button
        v-for="(item, i) in btns"
        :key="i"
        :type="item.type || 'primary'"

        @click="(e)=> item.click && item.click(e)"
      >
        {{ item.label }}
      </el-button>
      <slot name="btn" />
    </div>

    <div v-loading="loading" class="v-page-table">
      <VTable
        ref="tableRef"
        :data="list"
        :columns="columns"
        :selection="selection"
        :radio="radio"
        v-bind="{
          ...props.table,
        }"
        @btnClick="btnClick"
      >
        <template v-for="item in columns" #[item.prop]="data">
          <slot :name="item.prop" v-bind="data"></slot>
        </template>
      </VTable>
    </div>
    <c-pagination
      v-if="showPagination"
      :page="pagination.pageNum"
      :page-size="pagination.pageSize"
      :total="total"
      @pagination="handlePagination"
    />
  </div>
</template>

<script setup>
/**
 * @name v-page
 * @vue Component
 * @description v-page组件, 后台通用的列表页面组件
 */
import { defineProps, getCurrentInstance, ref, onMounted, defineExpose } from 'vue'

import { ElButton } from 'element-plus'

import VFilter from '../v-filter/v-filter.vue'
import cPagination from '../v-pagination/v-pagination.vue'
import VTable from '../v-table/v-table.vue'
import { useConfig } from '../config'

const { GET_LIST, GET_TOTAL, PAGE_NUM_KEY, PAGE_SIZE_KEY, PAGE_SIZE = 10 } = useConfig()

const emits = defineEmits(['search'])

const { proxy } = getCurrentInstance()

const props = defineProps({
  /**
   * @name showPagination
   * @vue Prop
   * @description 是否显示分页
   * @type ["Boolean"]
   * @default true
   */
  showPagination: {
    type: Boolean,
    default: true
  },
  /**
   * @name columns
   * @vue Prop
   * @description 表格列配置
   * @type ["Array"]
   * @default []
   */
  columns: {
    type: Array,
    default: () => ([])
  },
  /**
   * @name radio
   * @vue Prop
   * @description 表格单选
   * @type ["Function"]
   */
  radio: {
    type: Function,
  },
  /**
   * @name selection
   * @vue Prop
   * @description 表格多选
   * @type ["Function"]
   */
  selection: {
    type: Function
  },
  /**
   * @name onAdd
   * @vue Prop
   * @description 表格添加按钮方法
   * @type ["Function"]
   */
  onAdd: {
    type: Function
  },
  /**
   * @name filter
   * @vue Prop
   * @description 筛选配置
   * @type ["Array"]
   */
  filter: {
    type: Array,
  },
  /**
   * @name showFilter
   * @vue Prop
   * @description 是否显示筛选
   * @type ["Boolean"]
   * @default true
   */
  showFilter: {
    type: Boolean,
    default: true
  },
  /**
   * @name filterBtns
   * @vue Prop
   * @description 筛选按钮配置
   * @type ["Array"]
   * @default []
   */
  filterBtns: {
    type: Array,
    default: () => ([])
  },
  /**
   * @name filterLabelWidth
   * @vue Prop
   * @description 筛选项宽度设置
   * @type ["String"]
   */
  filterLabelWidth: {
    type: String
  },
  /**
   * @name filterCol
   * @vue Prop
   * @description 筛选列数
   * @type ["Number"]
   */
  filterCol: {
    type: Number,
    default: 4
  },
  /**
   * @name btns
   * @vue Prop
   * @description 按钮配置
   * @type ["Array"]
   * @default []
   */
  btns: {
    type: Array,
    default: () => ([])
  },
  /**
   * @name getList
   * @vue Prop
   * @description 表格获取数据源方法
   * @type ["Function"]
   */
  getList: {
    type: Function
  },
  /**
   * @name formatList
   * @vue Prop
   * @description 格式化数据
   * @type ["Function"]
   */
  formatList: {
    type: Function,
    default: null
  },
  /**
   * @name init
   * @vue Prop
   * @description 初始化请求列表
   * @type ["Boolean"]
   */
  init: {
    type: Boolean,
    default: true
  },
  // 表格属性，透传下去
  table: {
    type: Object,
    default: () => ({})
  },
})

const list = ref([])
const params = ref({})
const total = ref(0)
const pagination = ref({
  pageSize: PAGE_SIZE,
  pageNum: 1,
})
// filter相关
const filterModel = ref({})
const tableRef = ref(null)

const clearRadio = () => {
  tableRef.value?.clearRadio()
}

const clearSelection = () => {
  tableRef.value?.clearSelection()
}

const btnClick = ({ btn, row, index }) => {
  proxy.$emit(btn.event, row, index)
}

const loading = ref(false)

const fetchList = async (query = {}) => {
  if (!props.getList) return
  loading.value = true
  try {
    params.value = {
      [PAGE_NUM_KEY]: pagination.value.pageNum || 1,
      [PAGE_SIZE_KEY]: pagination.value.pageSize || PAGE_SIZE,
      ...query,
    }
    // 默认第一页
    const res = await props.getList(params.value)
    let data = GET_LIST(res)
    if (props.formatList) {
      data = props.formatList(data)
    }

    list.value = data.map((item, index) => ({
      ...item,
      index: index + 1 + (params.value[PAGE_NUM_KEY] - 1) * params.value[PAGE_SIZE_KEY]
    }))
    total.value = GET_TOTAL(res)
  } finally {
    loading.value = false
  }
}

const handlePagination = (p) => {
  pagination.value = p
  clearSelection()
  clearRadio()
  fetchList({
    ...p,
    ...filterModel.value
  })
}

const refreshList = async () => {
  clearSelection()
  clearRadio()
  await fetchList({
    ...pagination.value,
    ...filterModel.value
  })
}

const handleSearch = (modal) => {
  pagination.value.pageNum = 1
  filterModel.value = modal
  refreshList()
  emits('search', modal)
}

const search = () => {
  filterRef.value.search()
}

const filterRef = ref()

const getCurrentFilter = () => {
  return filterRef.value.getCurrentFilter()
}

onMounted(() => {
  if (props.init) {
    if (props.showFilter) {
      filterRef.value.search()
    } else {
      fetchList()
    }
  }
})

defineExpose({
  refreshList,
  clearSelection,
  clearRadio,
  search,
  getCurrentFilter,
  filterRef,
})
</script>

<style lang="scss">
@import "style";
</style>
