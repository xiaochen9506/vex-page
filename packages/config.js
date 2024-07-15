import { inject } from 'vue'

// 分页size key
export let PAGE_SIZE_KEY = 'pageSize'

// 分页num key
export let PAGE_NUM_KEY = 'pageNum'

// 获取列表
export let GET_LIST = (res) => res.data

// 获取总数
export let GET_TOTAL = res => res.total

// 保存配置
export function setConfig(config, app) {
  if (app) app.provide('vxe-page', config)
}


// 获取配置
export function useConfig() {
  return inject('vxe-page', {
    PAGE_SIZE_KEY,
    PAGE_NUM_KEY,
    GET_LIST,
    GET_TOTAL
  })
}
