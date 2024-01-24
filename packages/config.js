// 分页size key
export let PAGE_SIZE_KEY = 'pageSize'

// 分页num key
export let PAGE_NUM_KEY = 'pageNum'

// 获取列表
export let GET_LIST = (res) => res.data

// 获取总数
export let GET_TOTAL = res => res.total

export const setConfig = (params = {}) => {
  PAGE_SIZE_KEY = params.pageSizeKey || PAGE_SIZE_KEY
  PAGE_NUM_KEY = params.pageNumKey || PAGE_NUM_KEY
  GET_LIST = params.getList || GET_LIST
  GET_TOTAL = params.getTotal || GET_TOTAL
}
