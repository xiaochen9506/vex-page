const path = require('path')
const fs = require('fs')
const { parse } = require('@vue/compiler-sfc') // 解析 Vue 单文件组件
const parser = require('@babel/parser')
const traverse = require('@babel/traverse')
const _ = require('lodash')

const readComments = (filePath) => {
  // 读取 Vue 文件
  const vueCode = fs.readFileSync(filePath, 'utf-8')

// 解析 Vue 单文件组件
  const { descriptor } = parse(vueCode)

  const script = descriptor.script || descriptor.scriptSetup

// 提取 <script> 部分的代码
  const scriptContent = script.content

// 使用 @babel/parser 解析 JavaScript 代码
  const ast = parser.parse(scriptContent, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
    // 启用注释保存
    ranges: true,
    comments: true,
  })

  const comments = []
  traverse.default(ast, {
    enter(path) {
      const node = path.node
      if (node.leadingComments) {
        node.leadingComments.forEach(comment => {
          const lines = comment.value.split('\n')
          const obj = {}
          lines.forEach(line => {
            const str = line.replace(/^[\s*]+|[\s*]+$/g, '')
            // 定义正则表达式匹配字符串中的内容
            const regex = /^@(\w+)\s+(.*)/
            // 匹配字符串并提取信息
            const match = str.match(regex)
            if (match) {
              obj[match[1]] = match[2]
            }
          })

          if (Object.keys(obj).length) {
            comments.push(obj)
          }

        })
      }
    },
  })
  return comments
}

exports.readComments = readComments

exports.componentWithComments = (comments) => {
  let obj = {
    props: [],
    js: {
      events: []
    }
  }
  comments.forEach(comment => {
    const type = comment.vue
    const o = _.omit(comment, 'vue')
    if (type === 'Component') {
      const symbol = comment.name.replace(/([a-z])-([a-z])/g, (match, p1, p2) => {
        return `${ p1.toUpperCase() }${ p2.toUpperCase() }`
      })
      obj = {
        ...o,
        ...obj,
        source: {
          symbol
        }
      }
    } else {
      if (type === 'Prop') {
        obj.props.push({
          ...o,
          type: JSON.parse(o.type)
        })
      }

      if (type === 'Event') {
        obj.js.events.push(o)
      }
    }
  })
  return obj
}

// const filePath = path.resolve(__dirname, '../packages/v-page/v-page.vue')
//
// // 打印注释信息
// console.log(readComments(filePath))
