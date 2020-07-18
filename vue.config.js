const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

const baseUrlObject = {
  development: '',
}

const env = process.env.NODE_ENV || 'production'

// 基础路径 注意发布到生产环境之前要先修改这里
const baseUrl = baseUrlObject[env] || process.env.VUE_APP_BASE_URL
const IS_DEV = process.env.VUE_APP_NODE_ENV === 'development'

console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_BASE_URL)
console.log(baseUrl)

// 用于开发环境下，缓存第一次编译的文件，提高二次构建速度
const devPlugins = []

const configPlugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'windows.jQuery': 'jquery'
  }),
  // new BundleAnalyzerPlugin()
]

module.exports = {
  publicPath: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: true,
  configureWebpack: { // 引入jquery
    externals: { // 引入百度地圖
      // 'BMap': 'BMap'
      echarts: 'echarts'
    },
    plugins: IS_DEV ? configPlugins.concat(devPlugins) : configPlugins
  },
  devServer: {
    https: false,
    port: 9999,
    publicPath: baseUrl, // 和 baseUrl 保持一致
  },
  // webpack 设置
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'd2-[name]'
      })
      .end()
    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
    // 重新设置 alias
    config.resolve.alias
      .set('@', resolve('src'))
    // babel-polyfill 加入 entry
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
  }
}
