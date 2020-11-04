import path from 'path'
export default {
    devServer: {
        open: true, // 启动项目后自动开启浏览器
        port: 3330
    },
    alias:{
        '/@/':path.resolve('/src')
    },
    proxy: {
      // string shorthand
      '/foo': 'http://localhost:4567/foo',
      // with options
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
