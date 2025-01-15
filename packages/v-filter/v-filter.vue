<template>
  <div class="v-filter">
    <el-card>
      <el-form
        ref="filterFormRef"
        :model="form"
        :label-width="labelWidth"
        :rules="rules"
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
              :prop="item.prop"
            >

              <el-input v-if="item.scope === 'input'" v-model.trim="form[item.prop]"
                        :placeholder="item.placeholder || $t('input')" />
              <el-select
                v-if="item.scope === 'select'"
                v-model="form[item.prop]"
                :placeholder="item.placeholder || $t('select')"
                clearable
                filterable
                v-bind="{
            ...item
          }"
                :filter-method="(query) => item.remoteMethod?.(query, item)"
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
                :placeholder="item.placeholder || $t('select')"
                :start-placeholder="$t('start')"
                :end-placeholder="$t('end')"

                clearable
                @change="(e) => dateChange(e, item)"
              />
              <el-row v-if="item.scope === 'range'" type="flex" align="middle">
                <el-col :span="11">
                  <el-input v-model="form[item.startKey]" :placeholder="item.placeholder || $t('input')"
                            style="width: 100%;" />
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form[item.endKey]" :placeholder="item.placeholder || $t('input')" style="width: 100%;" />
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
              <el-button type="primary" :icon="Search" @click="search">{{ $t('search') }}</el-button>
              <el-button :icon="Refresh" @click="reset">{{ $t('reset') }}</el-button>
              <el-button v-for="item in btns" :key="item.text" @click="item.click">{{ item.text }}</el-button>

          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
/**
 * @name v-filter
 * @vue Component
 * @description v-page的筛选组件
 */
import { defineProps, ref, watch, onMounted, getCurrentInstance, computed, defineExpose } from 'vue'
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
  ElButton,
  ElCard,
} from 'element-plus'
import {
  Search,
  Refresh
} from '@element-plus/icons-vue'

const { proxy } = getCurrentInstance()

const props = defineProps({
  /**
   * @name filter
   * @vue Prop
   * @description 筛选项配置
   * @type ["Array"]
   * @default []
   */
  filter: {
    type: Array,
    default: () => ([])
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
   * @name labelWidth
   * @vue Prop
   * @description label宽度
   * @type ["String", "Number"]
   * @default 110px
   */
  labelWidth: {
    type: [String, Number],
    default: '110px'
  },
  /**
   * @name col
   * @vue Prop
   * @description 一行几列
   * @type ["Number"]
   * @default 4
   */
  col: {
    type: Number,
    default: 4
  },
})

const rules = computed(() => {
  const required = props.filter.filter(item => item.required)
  const obj = {}
  required.forEach(item => {
    obj[item.prop] = [
      { required: true, message: item.message || `${item.label}不能为空` }
    ]
  })

  return obj
})

const filterFormRef = ref()

const form = ref({})
const list = ref([])
const datepicker = ref(['date', 'daterange', 'month', 'year', 'monthrange'])

const span = computed(() => {
  return 24 / props.col
})

watch(() => props.filter, (val) => {
  initFilter(val)
}, { deep: true })

const initFilter = (val = []) => {
  list.value = val.map(item => {
    if (item.initValue || item.initValue === 0) {
      form.value[item.prop] = item.initValue
    }

    return {
      ...item,
    }
  })
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
  return new Promise((resolve, reject) => {
    filterFormRef.value.validate(valid => {
      if (valid) {
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
        resolve()
      } else {
        reject()
      }
    })
  })
}

const reset = () => {
  clear()
  proxy.$emit('reset')
}

const getCurrentFilter = () => {
  return form.value
}

const setCurrentFilter = (obj, action = true) => {
  form.value = {
    ...obj
  }

  if (action) {
    search()
  }
}

defineExpose({
  search,
  getCurrentFilter,
  setCurrentFilter,
})

onMounted(() => {
  initFilter(props.filter)
})
</script>

<style lang="scss">
@import "style";
</style>
