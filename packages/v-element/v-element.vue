<template>
  <div v-if="!col.scope">{{ row[col.prop] }}</div>

  <div v-if="col.scope === 'number-col'">
    {{ row[col.prop] ? Number(row[col.prop]).toLocaleString() : '' }}
  </div>

  <div v-if="col.scope === 'render' && col.render">{{ col.render(row, col.prop) }}</div>

  <el-input
    v-if="['textarea', 'input'].includes(col.scope)"
    :type="col.scope || 'text'"
    v-bind="{
      ..._.omit(col, ['label'])
    }"
    v-model="value"
    @change="change"
  />

  <el-input-number
    v-if="col.scope === 'input-number'"
    v-bind="{
      ..._.omit(col, ['label'])
    }"
    v-model="value"
    @change="change"
  />

  <el-select
    v-if="col.scope === 'select'"
    v-bind="{
      ...col
    }"
    v-model="value"
    @change="change"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-tag
    v-if="col.scope === 'tag' && getTagLabel(row[col.prop], options)"
    :type="getTag(row[col.prop], options).type"
  >
    {{ getTagLabel(row[col.prop], options) }}
  </el-tag>

  <el-image
    v-if="col.scope === 'img'"
    :src="value"
    :fit="col.fit || 'cover'"
  />

  <el-date-picker
    v-if="['year', 'month', 'date', 'dates', 'datetime', 'week', 'datetimerange', 'daterange', 'monthrange'].includes(col.scope)"
    v-bind="{
      ...col
    }"
    :type="col.scope"
    v-model="value"
    @change="change"
  />

  <el-switch
    v-if="col.scope === 'switch'" v-model="value" @change="change"
    v-bind="{
      ...col
    }">
  </el-switch>

  <el-radio-group v-if="col.scope === 'radio'" v-model="value" @change="change">
    <el-radio v-for="item in options" :label="item.value" :key="item.label">{{ item.label }}</el-radio>
  </el-radio-group>
</template>

<script setup>
/**
 * @name v-element
 * @vue Component
 * @description 基于element-plus, 通过scope显示具体组件，用于v-table和v-form等
 */
import {
  ElInput,
  ElInputNumber,
  ElSelect,
  ElOption,
  ElTag,
  ElDatePicker,
  ElRadioGroup,
  ElRadio,
  ElImage,
  ElSwitch
} from 'element-plus'
import { defineProps, ref, watch, computed } from 'vue'
import * as _ from 'lodash-es'

const props = defineProps({
  /**
   * @name row
   * @vue Prop
   * @description 数据源
   * @type ["Object"]
   * @default {}
   */
  row: {
    type: Object,
    default: () => ({})
  },
  /**
   * @name col
   * @vue Prop
   * @description 配置项
   * @type ["Object"]
   * @default {}
   */
  col: {
    type: Object,
    default: () => ({})
  },
})

const options = computed(() => {
  return col.options || []
})

const emits = defineEmits([
  /**
   * @name update:row
   * @vue Event
   * @description 更新数据源
   */
  'update:row'
])

const value = ref(_.get(props.row, props.col.prop))

watch(() => _.get(props.row, props.col.prop), (val) => {
  value.value = val
})

const change = () => {
  // 支持row['obj.x']形式
  _.set(props.row, props.col.prop, value.value)

  if (props.col.change) {
    props.col.change(props.row, value.value)
  }

  emits('update:row', props.row)
}


const getTag = (value, list) => {
  const item = list.find(i => i.value === value) || {}
  return item
}

const getTagLabel = (value, list) => {
  const item = getTag(value, list)
  return item?.label || value
}
</script>
