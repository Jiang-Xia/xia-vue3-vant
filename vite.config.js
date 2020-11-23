import path from 'path'
export default {
    port: 3330,
    // open: true,
    // 导入别名
    // 这些条目可以是精确的请求->请求映射*（精确，无通配符语法）
    // 也可以是请求路径-> fs目录映射。 *使用目录映射时
    // 键**必须以斜杠开头和结尾**
     /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'target',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {
    include: ["js-cookie", "echarts", "axios", "mockjs"]
  },
    alias: {
      '/./': path.resolve(__dirname, './src'),
    },
     /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
  // base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  // 反向代理
//   proxy: {
//     '/api': {
//       target: 'https://blog.csdn.net/weixin_45292658',
//       changeOrigin: true,
//       rewrite: path => path.replace(/^\/api/, '')
//     }
//   }
}
