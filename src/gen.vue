<template>
  <div>
    <el-form>
      <el-form-item label="文件路径">
        <el-input v-model="form.filePath" />
      </el-form-item>
      <el-form-item label="表格内容">
        <v-table :columns="columns" :data="data" :on-add="pushItem" />
      </el-form-item>
    </el-form>

    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const columns = [
  { label: 'label', prop: 'label', scope: 'input' },
  { label: 'prop', prop: 'prop', scope: 'input' },
  { label: 'scope', prop: 'scope', scope: 'select',
    options: [
      { label: 'input', value: 'input' },
      { label: 'select', value: 'select' },
      { label: 'number-col', value: 'number-col' },
      { label: 'render', value: 'render' },
      { label: 'tag', value: 'tag' },
      { label: 'img', value: 'img' },
      { label: 'table', value: 'table' },
      { label: 'btn', value: 'btn' },
    ]
  },
]

const initItem = () => ({
  label: '',
  prop: '',
  scope: '',
})

const data = ref([initItem()])

const pushItem = () => {
  data.value.push(initItem())
}

const form = ref({
  filePath: ''
})

const submit = async () => {
  // fetch localhost:3000
  const res = await fetch('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify({
      ...form.value,
      columns: data.value,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log(res)
}
</script>
