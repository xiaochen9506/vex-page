<template>
  <el-form
    class="c-form"
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="130px"
    v-bind="$attrs"
  >
    <el-row :gutter="20">
      <el-col :span="24 / col" v-for="item in list" :key="item.prop">
        <el-form-item
          :label="item.label"
          :prop="item.prop"
        >
          <v-element
            :row="form"
            :col="item"
            @update:row="update"
          />
          <slot :name="item.prop"></slot>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
/**
 * @name v-form
 * @vue Component
 * @description 基于el-form + el-col + v-element组件
 */
import { watch, ref, defineProps } from 'vue'
import VElement from '../v-element/v-element.vue'
import { ElFormItem, ElForm, ElCol, ElRow } from 'element-plus'

const props = defineProps({
  /**
   * @name list
   * @vue Prop
   * @description 配置
   * @type ["Array"]
   * @default []
   */
  list: {
    type: Array,
    default: () => ([]),
  },
  /**
   * @name value
   * @vue Prop
   * @description 表单数据
   * @type ["Object"]
   * @default {}
   */
  value: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @name rules
   * @vue Prop
   * @description 表单验证规则
   * @type ["Object"]
   * @default {}
   */
  rules: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @name col
   * @vue Prop
   * @description 列数
   * @type ["Number"]
   * @default 2
   */
  col: {
    type: Number,
    default: 2,
  },
})

const emits = defineEmits(['update:value'])

const form = ref({ ...props.value })
const formRef = ref()

watch(() => props.value, () => {
  reset()
}, { deep: true })

const reset = () => {
  form.value = {
    ...props.value,
  }
}

const update = (data) => {
  emits('update:value', data)
}

const validate = () => {
  return new Promise((resolve, reject) => {
    formRef.value.validate(valid => {
      if (valid) {
        resolve(form.value)
      } else {
        reject()
      }
    })
  })
}

defineExpose({
  validate,
  reset,
  form,
})
</script>
