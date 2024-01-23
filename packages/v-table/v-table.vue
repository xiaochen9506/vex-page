<template>
  <div class="c-table" :class="{ pd: onAdd }">
    <el-table
      ref="tableRef"
      border
      :data="data"
    >
      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :width="item.width"
        :label="item.label"
        :fixed="item.fixed"
      >
        <template #default="{ row }">
          <VElement v-if="item.scope !== 'btn'" :row="row" :col="item" />

          <div
            v-else
            class="operator-btn"
            >
            <el-button
              v-for="btn in item.options || []"
              :key="btn.event"
              :type="btn.type || 'primary'"
              text
              @click="btnClick(btn, row)"
            >
              {{ btn.text }}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="onAdd" class="add-btn" @click="onAdd" />
  </div>
</template>

<script setup>
import { ElTable, ElTableColumn, ElButton } from 'element-plus'
import { defineProps, ref, onMounted, nextTick, onUnmounted, defineExpose, defineEmits, getCurrentInstance } from 'vue'
import VElement from '../v-page/v-element.vue'
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
  onAdd: {
    type: Function
  },
  showFilter: {
    type: Boolean,
    default: true
  },
  showOverflow: {
    type: [Boolean, String],
    default: 'ellipsis'
  },
  width: {
    type: String,
    default: ''
  },
  radio: {
    type: Boolean,
    default: false
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
  footerMethod: {
    type: Function,
    default: null
  },
  mergeCells: {
    type: Array,
    default: () => ([]),
  },
  // 根据内容自动设置列宽
  resetColumnWidth: {
    type: Boolean,
    default: false
  },
  // 设置最小宽度
  setMinWidth: {
    type: Boolean,
    default: true
  },
  columnMinWidth: {
    type: [Number, String],
  }
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

const btnClick = (btn, row) => {
  proxy.$emit(btn.event, row)
  proxy.$emit('btnClick', {
    btn,
    row,
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
.c-table {
  position: relative;
  &.pd {
    padding-bottom: 20px;
  }

  :deep(.vxe-body--column) {
    &:hover {
      .copy-box {
        display: flex;
      }
    }
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

  :deep(.el-date-editor.el-input) {
    width: 100%;
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

  .operator-btn {
    position: relative;

    &.popover-btn {
      margin-right: 10px;
    }

    input {
      position: absolute;
      cursor: pointer;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0;
    }
  }
}
</style>
