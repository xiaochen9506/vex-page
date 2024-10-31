<template>
  <v-page
    ref="pageRef"
    :columns="columns"
    :btns="btns"
    :filter="filters"
    :get-list="getList"
    :radio="selection"
    :table="{
      onAdd: () => {},
      stripe: true,
    }"
    @test="test"
  />
</template>

<script setup>
import { ref } from 'vue'
import avatar from './avatar.js'

// 获取列表
const getList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            avatar,
            name: '张三',
            age: 18,
            gender: 0,
            radio: 0,
            select: 0,
            number: 5000,
            switch:true,
            table: [
              {
                id: 1,
                name: '张三',
                age: 18,
                gender: 0,
                select: 0,
                number: 5000,
                switch:true,
              }
            ],
            btn: true
          },
          {
            id: 2,
            avatar,
            name: '李四',
            age: 19,
            gender: 1,
            radio: 1,
            select: 0,
            number: 25000,
            switch:false,
            table: [
              {
                id: 2,
                name: '李四',
                age: 19,
                gender: 1,
                select: 0,
                number: 25000,
                switch:false,
              }
            ],
            btn: false
          },
        ],
        total: 30,
      })
    }, 1000)
  })
}

const pageRef = ref(null)

const gender = [
  { label: '男', value: 0, type: 'info' },
  { label: '女', value: 1, type: 'success' },
  { label: 'LGBT', value: 2, type: 'success' },
]

const select = [
  { label: '0', value: 0, type: 'info' },
  { label: '1', value: 1, type: 'success' },
]

const change = (row, value) => {
  console.log(row, value)
}

const selection = (e) => {
  console.log(e)
}

// 表格配置
const columns = [
  { label: '姓名', prop: 'name', },
  { label: '头像', prop: 'avatar', scope: 'img', width: 100 },
  { label: 'number', prop: 'number', scope: 'number-col' },
  { label: 'input', prop: 'age', scope: 'input', change },
  { label: 'select', prop: 'select', scope: 'select', options: select },
  { label: '性别', prop: 'gender', scope: 'tag', options: gender },
  { label: 'radio', prop: 'radio', scope: 'radio', options: gender },
  { label: 'switch', prop: 'switch', scope: 'switch' },

  // { label: '嵌套', prop: 'table', scope: 'table',
  //   options: [
  //     { label: '姓名', prop: 'name', },
  //     { label: 'number', prop: 'number', scope: 'number-col' },
  //     { label: 'input', prop: 'age', scope: 'input', change },
  //     { label: 'select', prop: 'select', scope: 'select', options: select },
  //     { label: '性别', prop: 'gender', scope: 'tag', options: gender },
  //   ]
  // },

  // 操作列
  {
    label: '操作',
    fixed: 'right',
    width: 200,
    scope: 'btn',
    options: [
      { label: 'test', event: 'test', if: row => row.btn }
    ]
  },
]

const test = (row, index) => {
  console.log(row, index)
}

const filters = [
  { label: '姓名', prop: 'name', scope: 'input' },
  { label: '性别', prop: 'gender', scope: 'select', options: gender, multiple: true },
]

// 按钮
const btns = [
  {
    label: '测试',
    click: test
  },
]
</script>
