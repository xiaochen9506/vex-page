<template>
  <div class="v-table" :class="{ pd: onAdd }">
    <el-table
      ref="tableRef"
      border
      v-bind="$attrs"
      :data="data"
      @selection-change="selection"
      :highlight-current-row="!!radio"
      @current-change="radioChange"
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
        v-bind="{
          ...item
        }"
      >
        <template #default="{ row, $index }">
          <VElement v-if="!['btn', 'table'].includes(item.scope)" :row="row" :col="item" />

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
                v-if="!btn.if || row[btn.if]"
                :type="btn.type || 'primary'"
                text
                @click="btnClick(btn, row, $index)"
                v-bind="{
                  ...btn
                }"
              >
                {{ btn.text || (btn.render ? btn.render(row, $index) : '') }}
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
import { ElTable, ElTableColumn, ElButton, ElRadio } from 'element-plus'
import { defineProps, ref, onMounted, nextTick, onUnmounted, defineExpose, getCurrentInstance } from 'vue'
import VElement from '../v-element/v-element.vue'
import { copy } from '../utils/index'

const props = defineProps({
  data: {
    type: Array,
    default: () => ([]),
  },
  columns: {
    type: Array,
  },
  selection: {
    type: Function
  },
  radio: {
    type: Function,
  },
  onAdd: {
    type: Function
  },

  onSize: {
    type: Boolean,
    default: false
  },
  height: [String, Number],
  maxHeight: [String, Number],
  sortable: {
    type: Boolean,
    default: false
  },
})

const { proxy } = getCurrentInstance()

const radioValue = ref(null)
const autoMaxHeight = ref(null)
const tableRef = ref(null)


const copyTxt = (row, column) => {
  const { scope, prop, render } = column
  let text
  if (scope === 'render') {
    text = render(row)
  } else if (scope === 'tag') {
    text = this.getTagName(row, column)
  } else {
    text = row[prop]
  }
  copy(text)
}

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

<style lang="scss" scoped>
.v-table {
  position: relative;
  width: 100%;

  &.pd {
    padding-bottom: 20px;
  }

  .copy-box {
    display: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: #1ab394;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    .el-icon-copy-document {
      color: #fff;
    }
  }

  .add-btn {
    position: absolute;
    width: 60px;
    height: 20px;
    background: #3EB3F1;
    border-radius: 0px 0px 10px 10px;
    bottom: 0;
    left: 50%;
    margin-left: -30px;
    cursor: pointer;

    &:after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 2px;
      background: #fff;
    }

    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      width: 10px;
      height: 2px;
      background: #fff;
    }
  }

  .radio-header {
    cursor: pointer;
  }

  :deep(.el-radio__label) {
    display: none;
  }

  :deep(.el-input-number) {
    width: 100%;
  }
}
</style>
