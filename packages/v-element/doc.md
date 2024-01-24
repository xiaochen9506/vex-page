# V-ELement

## 介绍

用于 V-Table 表格内容渲染，根据配置的 scope 类型，渲染不同的组件。

## scope 类型介绍

scope 目前支持以下类型, 对应options要求有所不一样：
- img 图片
- number-col 数字
- input 输入框
- select 下拉框
  - options: 数组类型, `{ label, value }`
- tag 标签
  - options: 数组类型, `{ label, value }`
- table 表格
  - options: 表格columns配置 
- btn 按钮
  - options: 数组类型, `{ text, event }` event为点击事件名称
