<template>
  <div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="文件夹路径">
            <el-input v-model="form.dirName" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="文件名">
            <el-input v-model="form.fileName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="表格内容">
        <v-table :columns="columns" :data="data" :on-add="pushItem" />
      </el-form-item>
    </el-form>

    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
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
  dirName: '/Users/zhangxiaochen/webstormProjects/tong-ying/game-admin/src',
  fileName: 'index.vue'
})

const filterEmptyKey = (obj) => {
  const res = {}
  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      res[key] = obj[key]
    }
  })
  return res
}

const submit = async () => {
  // fetch localhost:3000
  const res = await fetch('http://localhost:3000/generate', {
    method: 'POST',
    body: JSON.stringify({
      ...form.value,
      params: {
        columns: data.value.map(item => filterEmptyKey(item)),
        getList: 'testApi',
        module: 'test',
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())

  console.log(res)

  if (res.code === 200) {
    ElMessage.success('创建成功')
    data.value = [initItem()]
    form.value = {
      dirName: '',
      fileName: 'index.vue'
    }
  } else {
    ElMessage.error(res.msg)
  }
}
</script>
