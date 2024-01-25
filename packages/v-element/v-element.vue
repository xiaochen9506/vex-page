<template>
  <div v-if="!col.scope">{{ row[col.prop] }}</div>

  <div v-if="col.scope === 'number-col'">
    {{ row[col.prop] ? Number(row[col.prop]).toLocaleString() : '' }}
  </div>

  <div v-if="col.scope === 'render' && col.render">{{ col.render(row) }}</div>

  <el-input
    v-if="col.scope === 'input'"
    v-bind="{
      ...col
    }"
    v-model="value"
    @change="change"
  />

  <el-input-number
    v-if="col.scope === 'input-number'"
    v-bind="{
      ...col
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
      v-for="item in col.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-tag
    v-if="col.scope === 'tag'"
    :type="getTag(row[col.prop], col.options).type"
  >
    {{ getTag(row[col.prop], col.options).label }}
  </el-tag>

  <el-image
    v-if="col.scope === 'img'"
    :src="value"
    :fit="col.fit || 'cover'"
  />

</template>

<script setup>
import { ElInput, ElSelect, ElOption, ElTag } from 'element-plus'
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  row: {
    type: Object,
    default: () => ({})
  },
  col: {
    type: Object,
    default: () => ({})
  },
})

const value = ref(props.row[props.col.prop])

watch(() => props.row[props.col.prop], (val) => {
  value.value = val
})

const change = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.row[props.col.prop] = value.value

  if (props.col.change) {
    props.col.change(props.row, value.value)
  }
}


const getTag = (value, list) => {
  const item = list.find(i => i.value === value) || {}
  return item
}
</script>

<style scoped></style>
