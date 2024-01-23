# vex-page

vue3 管理后台通用列表页面。Vue3 + Element Plus

## 安装

```bash
npm install vex-page
```

## 使用

```js
import VexPage, { setConfig } from 'vex-page' //导入
import 'vex-page/lib/style.css' //导入样式

// 设置配置文件
setConfig({
  pageSizeKey: 'pageSize',
  pageNumKey: 'pageNum',
  getList: res => res.data,
})
app.use(VexPage)
```

```vue

<template>
  <v-page
    :columns="columns"
    :btns="btns"
    :filter="filters"
    :get-list="getList"
    @test="test"
  />
</template>

<script setup>
  // 获取列表
  const getList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              name: '张三',
              age: 18,
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              id: 2,
              name: '李四',
              age: 19,
              address: '上海市普陀区金沙江路 1517 弄',
            },
            {
              id: 3,
              name: '王五',
              age: 20,
              address: '上海市普陀区金沙江路 1519 弄',
            },
          ],
          total: 3,
        })
      }, 1000)
    })
  }

  // 表格配置
  const columns = [
    { label: '姓名', prop: 'name', },
    { label: '年龄', prop: 'age', },
    { label: '地址', prop: 'address', },
    // 操作列
    {
      label: '操作',
      fixed: 'right',
      width: 200,
      scope: 'btn',
      options: [
        { text: 'test', event: 'test' }
      ]
    },
  ]

  const test = (row) => {
    console.log(row)
  }

  const showAdd = () => {
  }

  const filters = [
    { label: '姓名', prop: 'name', type: 'input' },
    { label: '性别', prop: 'sex', type: 'select', options: [{ label: 1, value: 1 }] },
  ]

  // 按钮
  const btns = [
    {
      text: '新增',
      click: showAdd
    },
  ]
</script>
```

## 效果

![image](./public/img.png)


