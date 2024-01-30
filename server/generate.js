const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const pathResolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))

const { vueTemplate } = require('./template.js') // 引入模板文件
// 创建文件
function generateFile(path, data) {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
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

const generate = async (dirName, fileName = 'index.vue') => {
  /**   * 文件目录路径   */
  const projectDirectory = pathResolve('../src', dirName) // 生成目录放在src下
  const hasprojectDirectory = fs.existsSync(projectDirectory)
  const filePath = pathResolve(projectDirectory, fileName)

  if (!hasprojectDirectory) {
    log(`正在生成 文件目录 ${projectDirectory}`)
    dotExistDirectoryCreate(pathResolve(projectDirectory)) // 创建文件夹

  }
  await generateFile(filePath, vueTemplate) // 创建文件
  successLog('文件生成成功')
}

// generate('test/aaa', 'bbb.vue')

export default generate
