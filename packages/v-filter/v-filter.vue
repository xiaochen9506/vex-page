<template>
  <el-form
    ref="filterForm"
    :model="form"
    :label-width="labelWidth"
    class="v-filter"
  >
    <el-row :gutter="20">
      <el-col
        :span="span"
        v-for="(item) in list"
        :key="item.prop"
      >
        <el-form-item
          :label="item.label"
          :label-width="item.labelWidth || labelWidth"
        >

          <el-input v-if="item.scope === 'input'" v-model.trim="form[item.prop]"
                    :placeholder="item.placeholder || '请输入'" />
          <el-select
            v-if="item.scope === 'select'"
            v-model="form[item.prop]"
            :placeholder="item.placeholder || '请选择'"
            clearable
            filterable
            v-bind="{
            ...item
          }"
            @change="function (val) {
            if(item.onchange) {
              item.onchange(val)
            }
          }"
          >
            <el-option
              v-for="option in (item.options || [])"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
          <el-date-picker
            v-if="datepicker.includes(item.scope)"
            v-model="form[item.prop]"
            :value-format="item.format || 'YYYY-MM-DD HH:mm:ss'"
            :type="item.scope"
            :placeholder="item.placeholder || '请选择'"
            start-placeholder="开始"
            end-placeholder="结束"

            clearable
            @change="(e) => dateChange(e, item)"
          />
          <el-row v-if="item.scope === 'range'" type="flex" align="middle">
            <el-col :span="11">
              <el-input v-model="form[item.startKey]" :placeholder="item.placeholder || '请输入'"
                        style="width: 100%;" />
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-input v-model="form[item.endKey]" :placeholder="item.placeholder || '请输入'" style="width: 100%;" />
            </el-col>
          </el-row>
          <el-cascader
            v-if="item.scope === 'cascader'"
            v-model="form[item.prop]"
            :options="item.options"
            :props="item.cascaderProps || { checkStrictly: true, emitPath: false }"
            :collapse-tags="item.collapseTags"
            clearable

          />
        </el-form-item>
      </el-col>

      <el-col :span="span">
        <el-form-item label=" ">
          <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
          <el-button :icon="Refresh" @click="reset">重置</el-button>
          <el-button v-for="item in btns" :key="item.text" @click="item.click">{{ item.text }}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { defineProps, ref, watch, onMounted, getCurrentInstance, computed } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElRow,
  ElCol,
  ElCascader,
  ElButton
} from 'element-plus'
import {
  Search,
  Refresh
} from '@element-plus/icons-vue'

const { proxy } = getCurrentInstance()

const props = defineProps({
  filter: {
    type: Array,
    default: () => ([])
  },
  btns: {
    type: Array,
    default: () => ([])
  },
  // 筛选有些配置是通过接口获取，需要
  filterConfig: {
    type: Object,
    default: () => ({})
  },
  labelWidth: {
    type: String,
    default: '110px'
  },
  col: {
    type: Number,
    default: 4
  }
})

const form = ref({})
const list = ref([])
const datepicker = ref(['date', 'daterange', 'month', 'year', 'monthrange'])

const span = computed(() => {
  return 24 / props.col
})

watch(() => props.filter, (val) => {
  initFilter(val)
}, { deep: true })

watch(() => props.filterConfig, () => {
  initFilter(props.filter)
}, { deep: true })

const initFilter = (val = []) => {
  list.value = val.map(item => ({
    ...item,
    ...(props.filterConfig[item.prop] || {})
  }))
}

const clear = () => {
  form.value = {}
}

const dateChange = (e, item) => {
  if (datepicker.value.includes(item.scope)) {
    if (item.startKey) {
      form.value[item.startKey] = e && e.length > 1 ? e[0] : ''
    }
    if (item.endKey) {
      form.value[item.endKey] = e && e.length > 1 ? e[1] : ''
    }
  }
}

const search = () => {
  const params = {}
  list.value.forEach(item => {
    const key = item.filterProp || item.prop
    if (item.startKey) {
      params[item.startKey] = form.value[item.startKey]
      params[item.endKey] = form.value[item.endKey]
    } else {
      params[key] = form.value[item.prop]
    }

    if (item.format && typeof item.format === 'function') {
      params[key] = item.format(form.value[item.prop])
    }
  })
  proxy.$emit('search', params)
}

const reset = () => {
  clear()
  proxy.$emit('reset')
}

onMounted(() => {
  initFilter(props.filter)
})
</script>

<style lang="scss">
.v-filter {
  background: #fff;
  border-bottom: 5px solid #f2f2f2;
  padding: 10px;

  .line {
    text-align: center;
  }
}
</style>
