<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :close-on-click-modal="false"
    :before-close="beforeClose"
    v-bind="dialogProps"
  >

    <el-descriptions v-bind="descProps">
      <el-descriptions-item v-for="item in columns" :label="item.label" :span="item.span" :key="item.prop">
        <VElement
          :row="data"
          :col="item"
        />
        <slot :name="item.prop"></slot>
      </el-descriptions-item>
    </el-descriptions>

    <slot />

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
/**
 * @name v-detail
 * @vue Component
 * @description 基于el-dialog + el-descritions + v-element组件
 */
import dialog from '../hooks/dialog'
import { defineProps, watch, nextTick } from 'vue'
import { ElDialog, ElButton, ElDescriptions, ElDescriptionsItem } from 'element-plus'
import VElement from '../v-element/v-element.vue'


const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * @name data
   * @vue Prop
   * @description 详情数据
   * @type ["Object"]
   * @default {}
   */
  data: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @name columns
   * @vue Prop
   * @description 配置
   * @type ["Array"]
   * @default []
   */
  columns: {
    type: Array,
    default: () => ([]),
  },
  /**
   * @name title
   * @vue Prop
   * @description 标题
   * @type ["String"]
   * @default '详情'
   */
  title: {
    type: String,
    default: '详情'
  },
  /**
   * @name dialogProps
   * @vue Prop
   * @description dialog属性
   * @type ["Object"]
   * @default {}
   */
  dialogProps: {
    type: Object,
    default: () => ({
      width: '1000'
    })
  },
  /**
   * @name descProps
   * @vue Prop
   * @description el-descriptions属性
   * @type ["Object"]
   * @default {}
   */
  descProps: {
    type: Object,
    default: () => ({
      border: true,
    })
  },
})


const { dialogVisible, closeDialog, beforeClose } = dialog(props)
</script>
