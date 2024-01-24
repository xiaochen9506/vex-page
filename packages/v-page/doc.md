# V-Page

## 介绍

通过配置，快速生成页面，支持分页、筛选、自定义列、自定义操作等功能。

## 使用方法

```vue
<template>
  <v-page
    :columns="columns"
    :btns="btns"
    :filter="filters"
    :get-list="getList"
  />
</template>

<script setup>
const columns = [
  { label: 'v-page', prop: 'index' }
]

const btns = [
  { text: '新增', click: () => console.log('新增') }
]
 
const filters = [
  { label: '姓名', prop: 'name', type: 'input' }
]

const getList = (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list: [
          { name: '张三', index: 1 },
          { name: '李四', index: 2 },
          { name: '王五', index: 3 },
        ],
        total: 3
      })
    }, 1000)
  })
}  
</script>
```

## 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列配置 | _Column[]_ | `[]` |
| btns | 按钮配置 | _Btn[]_ | `[]` |
| filter | 筛选配置 | _Filter[]_ | `[]` |
| get-list | 获取列表方法 | _Function_ | - |


### Column

| 参数      | 说明                  | 类型                                             | 默认值 | 必填       |
|---------|---------------------|------------------------------------------------|----|----------|
| label   | 列名                  | _string_                                       | -  | &#10004; |
| prop    | 列属性                 | _string_                                       | -  | &#10004; |
| scope   | 渲染表格类型              | input \| select \| img \| tag \| render \| btn | -   | -        | - |
| options | scope对应类型的数据        | Array \| Function                              | -  | -        | - |
| 其他      | 按照element plus 配置即可 | -                                              | -  | -        | - |


### Btn

| 参数   | 说明   | 类型      | 默认值 | 必填       |
|------|------|---------|----|----------|
| text | 按钮文字 | _string_ | -  | &#10004; |
| click | 点击事件 | _Function_ | -  | &#10004; |

### Filter

| 参数      | 说明                  | 类型                                                                      | 默认值 | 必填       |
|---------|---------------------|-------------------------------------------------------------------------|----|----------|
| label   | 列名                  | _string_                                                                | -  | &#10004; |
| prop    | 列属性                 | _string_                                                                | -  | &#10004; |
| type   | 渲染表格类型              | input \| select \| date \| daterange \| month \| year \| monthrange \| cascader | -   | -        | - |
| options | scope对应类型的数据        | Array \| Function                                                       | -  | -        | - |

## 事件

如果 columns 配置 scope 为 btn，且配置如下:

    ```js
    const columns = [
      { label: '操作', prop: 'operate', scope: 'btn',
        options: [
          { text: 'test', event: 'test' }
        ]
    ]
    ```

那么在表格上点击test按钮，会触发test事件，事件参数为当前行数据。在`v-page`上监听test事件即可。

## 内部实现

简单说明

```vue
<template>
  <v-filter />
  <v-talbe />
  <v-pagination />
</template>

```
