import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import path from 'path'

const excludeNodeModulesCSS = () => {
  return {
    name: 'exclude-node-modules-css', // 插件名称
    resolveId(importee) {
      // 判断是否为 CSS 文件且来自 node_modules
      if (importee.endsWith('.css') && importee.includes('/node_modules/')) {
        // 返回一个虚拟标识符确保 Rollup 不会处理它
        return { id: importee, external: true }
      }

      // 对于其他情况不干预
      return null
    },
    load(id) {
      // 过滤掉 node_modules 下的 CSS，防止它们被打包
      if (id.includes('/node_modules/') && id.endsWith('.css')) {
        // 可以选择直接返回空的 CSS，或者不做处理
        return '/* Excluded CSS file */'
      }
      return null
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    VueSetupExtend(),
  ],

  build: {
    outDir: 'lib', //输出文件名称
    lib: {
      name: 'vex-page',
      entry: path.resolve(__dirname, './packages/index.js'), //指定组件编译入口文件
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        'element-plus',
      ],
      plugins: [excludeNodeModulesCSS()],
      input: ['packages/index.js'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: false,
          //配置打包根目录
          dir: 'es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: false,
          //配置打包根目录
          dir: 'lib',
        },
      ],
    }, // rollup打包配置
  },
})
