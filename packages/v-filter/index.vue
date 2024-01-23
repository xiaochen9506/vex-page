<template>
  <el-form
    ref="filterForm"
    inline

    :model="form"
    :label-width="labelWidth"
    class="c-filter"
  >
    <el-form-item
      v-for="(item) in list"
      :key="item.prop"
      :label="item.label"
      :style="getStyle()"
      :label-width="item.labelWidth || labelWidth"
    >
      <el-input v-if="item.type === 'input'" v-model.trim="form[item.prop]" :placeholder="item.placeholder || '请输入'" />
      <el-select
        v-if="item.type === 'select'"
        v-model="form[item.prop]"
        :placeholder="item.placeholder || '请选择'"
        clearable
        :remote="item.remote"
        :filter-method="(query) => item.remoteMethod(query, item)"
        :filterable="item.filterable"
        :default-first-option="item.defaultFirstOption"

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
        v-if="datepicker.includes(item.type)"
        v-model="form[item.prop]"
        :value-format="item.format || 'YYYY-MM-DD HH:mm:ss'"
        :type="item.type"
        :placeholder="item.placeholder || '请选择'"
        start-placeholder="开始"
        end-placeholder="结束"

        clearable
        @change="(e) => dateChange(e, item)"
      />
      <el-row v-if="item.type === 'range'" type="flex" align="middle">
        <el-col :span="11">
          <el-input v-model="form[item.startKey]" :placeholder="item.placeholder || '请输入'" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-input v-model="form[item.endKey]" :placeholder="item.placeholder || '请输入'" style="width: 100%;" />
        </el-col>
      </el-row>
      <el-cascader
        v-if="item.type === 'cascader'"
        v-model="form[item.prop]"
        :options="item.options"
        :props="item.cascaderProps || { checkStrictly: true, emitPath: false }"
        :collapse-tags="item.collapseTags"
        clearable

      />
    </el-form-item>
    <el-form-item label=" ">
      <el-button type="primary" :icon="Search" @click="doSearch">搜索</el-button>
      <el-button :icon="Refresh" @click="reset">重置</el-button>
      <el-button v-for="item in btns" :key="item.label" @click="item.click">{{ item.label }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { defineProps, ref, watch, onMounted } from 'vue'
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElDatePicker, ElRow, ElCol, ElCascader, ElButton } from 'element-plus'
import {
  Search,
  Refresh,
} from '@element-plus/icons-vue'

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
  search: {
    type: Function,
    default: () => {}
  },
  labelWidth: {
    type: String,
    default: '110px'
  },
  col: {
    type: Number,
    default: 4,
  }
})

const form = ref({})
const list = ref([])
const datepicker = ref(['date', 'daterange', 'month', 'year', 'monthrange'])

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

const getStyle = () => {
  return `width: calc(100% / ${props.col})`
}

const dateChange = (e, item) => {
  if (datepicker.value.includes(item.type)) {
    if (item.startKey) {
      form.value[item.startKey] = e && e.length > 1 ? e[0] : ''
    }
    if (item.endKey) {
      form.value[item.endKey] = e && e.length > 1 ? e[1] : ''
    }
  }
}

const doSearch = () => {
  const params = {}
  list.value.forEach(item => {
    const key = item.filterProp || item.prop
    if (item.startKey) {
      params[item.startKey] = form.value[item.startKey]
      params[item.endKey] = form.value[item.endKey]
    } else {
      params[key] = form.value[item.prop]
    }

    if (item.formatValue) {
      params[key] = item.formatValue(form.value[item.prop])
    }
  })
  props.search(params)
}

const reset = () => {
  clear()
  props.search({})
}

onMounted(() => {
  initFilter(props.filter)
})
</script>

<style lang="scss" scoped>
.c-filter {
  background: #fff;
  border-bottom: 5px solid #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  ::v-deep .el-form-item {
    display: flex;
    align-items: center;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 5px;
  }

  ::v-deep .el-form-item__content {
    flex: 1;

    .el-select {
      width: 100%;
    }
  }

  .el-date-editor {
    width: 100%;
  }

  .el-date-editor--daterange.el-input,
  .el-date-editor--daterange.el-input__inner,
  .el-date-editor--timerange.el-input,
  .el-date-editor--timerange.el-input__inner {
    width: 100%;
  }
  .line {
    text-align: center;
  }
}
</style>
