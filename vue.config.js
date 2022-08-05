const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(options => {
          // modify the options...
          return options
        }),
        config.resolve.alias
        .set('@',resolve('src'))
      },

  lintOnSave: false
})
