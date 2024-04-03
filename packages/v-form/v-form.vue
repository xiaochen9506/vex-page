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
import { watch, ref, defineProps } from 'vue'
import VElement from '../v-element/v-element.vue'
import { ElFormItem, ElForm, ElCol, ElRow } from 'element-plus'

const props = defineProps({
  list: {
    type: Array,
    default: () => ([]),
  },
  value: {
    type: Object,
    default: () => ({}),
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
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
