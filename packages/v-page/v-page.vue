<template>
  <div class="v-page" :class="{ pd: props.table && props.table.onAdd }">
    <VFilter
      v-if="filter"
      ref="filter"
      :filter="filter"
      :filter-config="filterConfig"
      :label-width="filterLabelWidth"
      :btns="filterBtns"
      :col="col"
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

    <div class="v-page-table">
      <VTable
        ref="tableRef"
        v-loading="loading"
        :data="list"
        :columns="columns"
        :selection="selection"
        :radio="radio"
        v-bind="{
          ...props.table,
        }"
        @btnClick="btnClick"
      />
    </div>
    <c-pagination
      v-if="showPagination"
      :page="pagination.pageNum"
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
    type: Function,
  },
  // 表格多选回调
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
  // 表格属性，透传下去
  table: {
    type: Object,
    default: () => ({})
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
  console.log(query)
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
  proxy.$emit('search', modal)
}

defineExpose({
  refreshList,
  clearSelection,
  clearRadio,
})

onMounted(() => {
  fetchList()
})
</script>

<style lang="scss">
.v-page {
  position: relative;
  &.pd {
    padding-bottom: 20px;
  }

  .v-page-operator {
    padding: 10px;
  }

  .v-page-table
  {
    padding: 0 10px;
  }
}
</style>
