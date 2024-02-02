const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const pathResolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))

const template = require('art-template')

// 创建文件
function generateFile(path, data) {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return Promise.reject(`${path}文件已存在`)
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        successLog('文件生成成功')
        resolve(true)
      }
    })
  })
}

// 创建文件夹
function dotExistDirectoryCreate(directory) {
  return new Promise(resolve => {
    mkdirs(directory, function() {
      resolve()
    })
  })
}

// 递归创建目录
function mkdirs(directory, callback) {
  const exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), () => {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

const generate = async (dirName, params, fileName = 'index.vue') => {
  /**   * 文件目录路径   */
  const projectDirectory = pathResolve('../src', dirName) // 生成目录放在src下
  const hasprojectDirectory = fs.existsSync(projectDirectory)
  const filePath = pathResolve(projectDirectory, fileName)

  if (!hasprojectDirectory) {
    log(`正在生成 文件目录 ${projectDirectory}`)
    dotExistDirectoryCreate(pathResolve(projectDirectory)) // 创建文件夹
  }


  // object -> string
  const obj = {}
  Object.keys(params).forEach(key => {
    if (typeof params[key] === 'object') {
      obj[key] = JSON.stringify(params[key], null, 2)
    } else {
      obj[key] = params[key]
    }
  })

  const html = template(__dirname + '/template.art', obj);

  return generateFile(filePath, html)
}

// 对象要stringify 且 模版里要使用{{@ variable}} 语法
// generate('server/views', {
//   getList: 'testApi',
//   module: 'test',
//   columns: JSON.stringify([
//     { label: '1', prop: '1' },
//     { label: '1', prop: '1' },
//     { label: '1', prop: '1' },
//     { label: '1', prop: '1' },
//     { label: '1', prop: '1' },
//   ], null, 2)
// })

module.exports = generate
