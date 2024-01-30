<template>
  <div :class="{hidden}" class="pagination-container">
    <el-pagination
      :current-page="currentPage"
      :layout="layout"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, watch, getCurrentInstance } from 'vue'
import { scrollTo } from '../utils/scroll-to'
import { ElPagination } from 'element-plus'

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  autoScroll: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
})

const pageSize = ref(10)
const currentPage = ref(props.page || 1)
const { proxy } = getCurrentInstance()

watch(() => props.page, (v) => {
  console.log(v)
  currentPage.value = v
});

const handleSizeChange = (val) => {
  console.log('size change')
  if (currentPage.value * val > props.total) {
    currentPage.value = 1
  }
  pageSize.value = val
  proxy.$emit('pagination', { pageNum: currentPage.value, pageSize: val })
  if (props.autoScroll) {
    scrollTo(0, 800)
  }
}

const handleCurrentChange = (val) => {
  console.log('page change')
  currentPage.value = val
  proxy.$emit('pagination', { pageNum: val, pageSize: pageSize.value })
  if (props.autoScroll) {
    scrollTo(0, 800)
  }
}

</script>

<style scoped>
.pagination-container {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
.pagination-container.hidden {
  display: none;
}
</style>
