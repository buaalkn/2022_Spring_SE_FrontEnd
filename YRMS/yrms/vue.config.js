const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //代理跨域
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       //后端服务器地址
  //       target:'',
  //     }
  //   }
  // }
})
