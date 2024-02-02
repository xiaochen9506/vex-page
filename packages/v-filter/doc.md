# V-Filter

## 介绍

V-Filter 是一个基于 ElementUI 的筛选组件，支持多种类型的筛选条件。

## 使用

```vue
<template>
  <v-filter
    :filter="filter"
    :label-width="labelWidth"
    :btns="filterBtns"
    :col="col"
    @search="search"
    @reset="reset"
  />
</template>
```

## 参数

| 参数 | 说明 | 类型       | 默认值 | 必填 |
| --- | --- |----------| --- | -- |
| filter | 筛选条件 | filter[] | - | &#10004; |
| label-width | 筛选条件label宽度 | String   | - | - |
| btns | 按钮 | Array    | - | - |
| col | 每行显示几个筛选条件 | Number   | 4 | - |

### filter

| 参数       | 说明                        | 类型                                                                              | 默认值 | 必填       |
|----------|---------------------------|---------------------------------------------------------------------------------| --- |----------|
| label    | 筛选条件label                 | String                                                                          | - | &#10004; |
| prop     | 筛选条件字段                    | String                                                                          | - | &#10004; |
| scope    | 筛选条件类型                    | input \| select \| date \| daterange \| month \| year \| monthrange \| cascader | - | -        |
| options  | 筛选条件选项                    | Array                                                                           | - | -        | - |
| startKey | 当type为时间范围类型时, 指定开始时间的key | String                                                                          | - | -        | - |
| endKey   | 当type为时间范围类型时, 指定结束时间的key | String                                                                          | - | -        | - |
| format   | 格式化                       | String \| Function                                                              | - | -        | - |


## 事件

| 事件名 | 说明 | 参数     |
| --- | --- |--------|
| search | 点击搜索按钮 | Object |
| reset | 点击重置按钮 | -      |
