<template>
  <div class="c-page" :class="{ pd: onAdd }">
    <VFilter
      v-if="filter.length> 0"
      ref="filter"
      :filter="filter"
      :filter-config="filterConfig"
      :label-width="filterLabelWidth"
      :btns="filterBtns"
      :col="col"
      @search="handleSearch"
    />

    <div class="operator">
      <el-button
        v-for="(item, i) in btns"
        :key="i"
        :type="item.type || 'primary'"

        @click="(e)=> item.click && item.click(e)"
      >
        {{ item.text }}
      </el-button>
      <slot name="btn" />
    </div>

    <div class="table-container">
      <VTable
        ref="tableRef"
        v-loading="loading"
        sortable
        :data="list"
        :columns="columns"
        :selection="selection"
        :on-add="onAdd"
        :radio="radio"
        :on-size="!tableHeight"
        :max-height="tableHeight"
        @btnClick="btnClick"
        @radioInput="radioInput"
      />
    </div>
    <c-pagination
      v-if="showPagination"
      :page="pagination.page"
      :total="total"
      @pagination="handlePagination"
    />
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, ref, onMounted, defineExpose } from 'vue'

import VFilter from '../v-filter/v-filter.vue'
import cPagination from '../v-pagination/v-pagination.vue'
import VTable from '../v-table/v-table.vue'
import { GET_LIST, GET_TOTAL, PAGE_NUM_KEY, PAGE_SIZE_KEY } from '../config'

const { proxy } = getCurrentInstance()

const props = defineProps({
  showPagination: {
    type: Boolean,
    default: true
  },
  // 表格列配置
  columns: {
    type: Array,
    default: () => ([])
  },
  // 表格单选
  radio: {
    type: Boolean,
    default: false
  },
  // 表格选择回调
  selection: {
    type: Function
  },
  // 表格添加按钮方法
  onAdd: {
    type: Function
  },
  // 筛选配置
  filter: {
    type: Array,
    default: () => ([])
  },
  filterBtns: {
    type: Array,
    default: () => ([])
  },
  // 筛选有些配置是通过接口获取，需要
  filterConfig: {
    type: Object,
    default: () => ({})
  },
  // 筛选项宽度设置
  filterLabelWidth: {
    type: String
  },
  onSearch: {
    type: Function
  },
  // 按钮配置
  btns: {
    type: Array,
    default: () => ([])
  },
  // 表格获取数据源方法
  getList: {
    type: Function
  },
  // 格式化数据
  formatList: {
    type: Function,
    default: null
  },
  // 拖拽表头
  sortable: {
    type: Boolean,
    default: true
  },
  // 表格高度
  tableHeight: {
    type: [String, Number],
    default: null
  },
})

const list = ref([])
const loading = ref(false)
const params = ref({})
const total = ref(0)
const pagination = ref({})
// filter相关
const filterModel = ref({})
const col = ref(4)
const tableRef = ref(null)

const radioInput = (e) => {
  proxy.$emit('radioInput', e)
}

const clearRadio = () => {
  tableRef.value.clearRadio()
}

const clearSelection = () => {
  tableRef.value.clearSelection()
}

const btnClick = ({ btn, row, index }) => {
  proxy.$emit(btn.event, row, index)
}

const fetchList = async (query) => {
  if (!props.getList) return
  loading.value = true
  params.value = {
    [PAGE_NUM_KEY]: pagination.value.pageNum || 1,
    [PAGE_SIZE_KEY]: pagination.value.pageSize || 10,
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
  loading.value = false
}

const handlePagination = (pagination) => {
  console.log(pagination)
  clearSelection()
  clearRadio()
  pagination.value = pagination
  fetchList({
    ...pagination,
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
  console.log(modal)
  pagination.value.page = 1
  filterModel.value = modal
  refreshList()
  props.onSearch && props.onSearch(modal)
}

defineExpose({
  refreshList
})

onMounted(() => {
  fetchList()
})
</script>

<style lang="scss" scoped>
.c-page {
  position: relative;
  &.pd {
    padding-bottom: 20px;
  }

  .operator {
    padding: 10px;
  }

  .table-container
  {
    padding: 0 10px;
  }
}
</style>
