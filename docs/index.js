const fs = require('fs')
const path = require('path')
const { readComments, componentWithComments } = require('./utils')

const docJSON = {
  "$schema": "http://json.schemastore.org/web-types",
  "framework": "vue",
  "version": "1.1.11",
  "name": "vex-page",
  "contributions": {
    "html": {
      "vue-components": []
    }
  }
}

// 读取packages/**/*.vue文件
const files = []
const readVueFiles = (dir) => {
  const dirs = fs.readdirSync(dir)
  dirs.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      readVueFiles(filePath)
    } else {
      if (file.endsWith('.vue')) {
        files.push(filePath)
      }
    }
  })
}

readVueFiles(path.resolve(__dirname, '../packages'))

const comments = files.map(path => readComments(path))
// 找出组件信息写入web-types.json
docJSON.contributions.html['vue-components'] = comments
  .map(item => componentWithComments(item))
  .filter(item => item.name)
fs.writeFileSync(path.resolve(__dirname, '../web-types.json'), JSON.stringify(docJSON, null, 2))

console.log('doc generate done')
