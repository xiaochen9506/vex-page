# V-Page

## 介绍

基于Element Plus的Table组件，通过配置，快速生成表格。

## 使用方法

```vue
<template>
  <v-table
    :columns="columns"
    :data="data"
  />
</template>

<script setup>
const columns = [
  { label: 'v-page', prop: 'index' }
]

const data = [
  { name: '张三', index: 1 },
  { name: '李四', index: 2 },
  { name: '王五', index: 3 },
]
</script>
```

## 参数

| 参数      | 说明            | 类型         | 默认值 | 必填      |
|---------|---------------|------------|-----|---------|
| columns | 表格列配置         | _Column[]_ | `[]` | &#10004; |
| data    | 数据源           | _Object[]_ | `[]` | &#10004; |
| selection | 多选回调, 配置后显示多选 | _Function_ | -   | -       |
| radio   | 单选回调, 配置后显示单选 | _Function_ | -   | -       |
| $attrs  | 透传属性          | -          | -   | -       |



### Column

| 参数      | 说明                  | 类型                                                             | 默认值 | 必填       |
|---------|---------------------|----------------------------------------------------------------|-----|----------|
| label   | 列名                  | _string_                                                       | -   | &#10004; |
| prop    | 列属性                 | _string_                                                       | -   | &#10004; |
| scope   | 渲染表格类型              | input \| input-number \| select \| img \| tag \| render \| btn | -   | -        | - |
| options | scope对应类型的数据        | Array \| Function                                              | -   | -        | - |
| 其他      | 按照element plus 配置即可 | -                                                              | -   | -        | - |

### Btn

当scope为btn时，options配置如下：

| 参数     | 说明          | 类型         | 默认值 | 必填 |
|--------|-------------|------------|-----|----|
| label  | 按钮文案        | _string_   | -   | -  |
| click  | 点击事件        | _Function_ | -   | -  |
| if     | 控制按钮显示的prop | _string_   | -   | -  |
| render | 自定义渲染 | _Function_   | -   | -  |


## 事件

如果 columns 配置 scope 为 btn，且配置如下:

    ```js
    const columns = [
      { label: '操作', prop: 'operate', scope: 'btn',
        options: [
          { label: 'test', event: 'test' }
        ]
    ]
    ```

那么在表格上点击test按钮，会触发test事件，事件参数为当前行数据。在`v-table`上监听test事件即可。
