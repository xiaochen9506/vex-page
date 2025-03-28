<template>
  <div class="v-table" :class="{ pd: onAdd }">
    <el-table
      ref="tableRef"
      border
      v-bind="tableProps"
      :data="data"
      :key="tableKey"
      :highlight-current-row="!!radio"
      @current-change="radioChange"
      @selection-change="selection"
    >
      <el-table-column v-if="selection" type="selection" width="40" />

      <el-table-column v-if="radio" fixed="left" width="60">
        <template #header>
          <div class="radio-header" @click="clearRadio">取消</div>
        </template>
        <template #default="{ row }">
          <el-radio v-model="radioValue" :label="row.id" />
        </template>
      </el-table-column>


      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :width="item.width"
        v-bind="item"
      >
        <template #default="{ row, $index }">
          <VElement
            v-if="!['btn', 'table'].includes(item.scope)"
            :row="row"
            :col="item"
            :options="item.options || []"
          />

          <v-table
            v-if="item.scope === 'table'"
            :data="row[item.prop]"
            :columns="item.options"
          />

          <template
            v-if="item.scope === 'btn'"
            >
            <template v-for="btn in item.options || []" :key="btn.event">
              <el-button
                v-if="showBtn(btn, row, $index)"
                link
                class="v-table-btn"
                :type="btn.type || 'primary'"
                @click="btnClick(btn, row, $index)"
                v-bind="{
                  ...btn
                }"
              >
                {{ btn.label || (btn.render ? btn.render(row, $index) : '') }}
              </el-button>
            </template>

          </template>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="onAdd" class="add-btn" @click="onAdd" />
  </div>
</template>

<script setup>
/**
 * @name v-table
 * @vue Component
 * @description 基于el-table + v-element的表格组件
 */
import { ElTable, ElTableColumn, ElButton, ElRadio } from 'element-plus'
import { defineProps, ref, onMounted, nextTick, onUnmounted, defineExpose, getCurrentInstance, computed, watch } from 'vue'
import VElement from '../v-element/v-element.vue'
import { randomStr } from '../utils'

const props = defineProps({
  /**
   * @name data
   * @vue Prop
   * @description 数据源
   * @type ["Array"]
   * @default []
   */
  data: {
    type: Array,
    default: () => ([]),
  },
  /**
   * @name columns
   * @vue Prop
   * @description 列配置
   * @type ["Array"]
   */
  columns: {
    type: Array,
  },
  /**
   * @name selection
   * @vue Prop
   * @description 多选
   * @type ["Function"]
   */
  selection: {
    type: Function
  },
  /**
   * @name radio
   * @vue Prop
   * @description 单选
   * @type ["Function"]
   */
  radio: {
    type: Function,
  },
  /**
   * @name onAdd
   * @vue Prop
   * @description 添加按钮
   * @type ["Function"]
   */
  onAdd: {
    type: Function
  },
  /**
   * @name onSize
   * @vue Prop
   * @description 是否监听窗口变化
   * @type ["Boolean"]
   * @default false
   */
  onSize: {
    type: Boolean,
    default: false
  },
  /**
   * @name height
   * @vue Prop
   * @description 表格高度
   * @type ["String", "Number"]
   */
  height: [String, Number],
  /**
   * @name tableProps
   * @vue Prop
   * @description el-table属性
   * @type ["Object"]
   * @default {}
   */
  tableProps: {
    type: Object,
    default: () => ({}),
  },
})

const { proxy } = getCurrentInstance()

const radioValue = ref(null)
const autoMaxHeight = ref(null)
const tableRef = ref(null)
const tableKey = ref(randomStr())

watch(() => props.columns, (v) => {
  tableKey.value = randomStr()
}, { deep: true, immediate: true })

const setTableHeight = () => {
  const table = document.querySelector('.table-container .c-table')
  if (table) {
    const { top } = table.getBoundingClientRect()
    autoMaxHeight.value = window.innerHeight - top - 50
  }
}

const clearSelection = () => {
  tableRef.value.clearSelection()
}

const clearRadio = () => {
  tableRef.value.setCurrentRow()
}

const radioChange = (e) => {
  radioValue.value = e ? e.id : null
  if (props.radio) {
    props.radio(e)
  }
}

const btnClick = (btn, row, index) => {
  proxy.$emit(btn.event, row, index)
  proxy.$emit('btnClick', {
    btn,
    row,
    index,
  })
}

const showBtn = (btn, row, index) => {
  if ('if' in btn) {
    if (typeof btn.if === 'function') {
      return btn.if(row, index)
    }
    return row[btn.if]
  }

  if (btn.render) {
    return !!btn.render(row, index)
  }

  return !!btn.label
}

defineExpose({
  clearSelection,
  clearRadio,
})

onMounted(() => {
  if (props.onSize) {
    window.addEventListener('resize', setTableHeight)
    nextTick(() => {
      setTableHeight()
    })
  }
})

onUnmounted(() => {
  if (props.onSize) {
    window.removeEventListener('resize', setTableHeight)
  }
})
</script>

<style lang="scss">
@import "style";
</style>
