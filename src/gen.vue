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


      <el-col :span="24">
        <el-form-item label="接口返回值">
          <el-input v-model="textarea" type="textarea" :rows="10"></el-input>
          <el-button @click="parse">解析</el-button>
        </el-form-item>
      </el-col>

      <el-form-item label="表格内容">
        <v-table :columns="columns" :data="data" :on-add="pushItem" @delete="remove" />
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
  {
    label: '是否是filter', prop: 'filter', scope: 'radio',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ]
  },
  {
    label: '操作',
    prop: 'operate',
    scope: 'btn',
    options: [
      { text: '删除', event: 'delete' }
    ]
  }
]

const initItem = (label, prop) => ({
  label,
  prop,
  scope: '',
  filter: false,
})

const data = ref([])
const pushItem = () => {
  data.value.push(initItem())
}

const remove = (index) => {
  data.value.splice(index, 1)
}

const textarea = ref()
const parse = () => {
  try {
    const obj = JSON.parse(textarea.value)
    Object.keys(obj).forEach(key => {
      const index = data.value.findIndex(item => item.prop === key)
      if (index === -1) {
        data.value.push(initItem(key, key))
      }
    })
  } catch (e) {
    ElMessage.error('解析失败: ' + e)
  }
}

const form = ref({
  dirName: '/Users/zhangxiaochen/webstormProjects/tong-ying/game-admin/src',
  fileName: 'index.vue'
})

const getColumns = () => {
  return data.value.map(item => {
    // undefined 在模版生成前会被JSON.stringify去掉
    const obj = {
      label: item.label,
      prop: item.prop,
      scope: item.scope || undefined
    }

    if (['btn', 'table', 'tag', 'select'].includes(item.scope)) {
      obj.options = item.options || []
    }

    return obj
  })
}

const getFilter = () => {
  return data.value.filter(item => item.filter)
    .map(item => {
      return {
        label: item.label,
        prop: item.prop,
        scope: item.scope === 'tag' ? 'select' : item.scope,
      }
    })
}

const submit = async () => {

  const params = {
    columns: getColumns(),
    filter: getFilter(),
    getList: 'testApi',
    module: 'test',
  }

  // fetch localhost:3000
  const res = await fetch('http://localhost:3000/generate', {
    method: 'POST',
    body: JSON.stringify({
      ...form.value,
      params
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())

  console.log(res)

  if (res.code === 200) {
    ElMessage.success('创建成功')
    data.value = []
    form.value = {
      dirName: '',
      fileName: 'index.vue'
    }
  } else {
    ElMessage.error(res.msg)
  }
}
</script>
