const {
  resolve
} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 五大配置
  // 1.入口
  entry: './src/index.js',
  // 2.输出
  output: {
    filename: './js/[name].[contenthash:8].js',
    path: resolve(__dirname, '../build'),
    
    clean: true,
  },
  // 3.loader
  module: {
    rules: [
      // js语法检查
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce:"pre",
        loader: 'eslint-loader',
      },
      // js语法转换(编译)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
                "@babel/preset-env",
                {
                  // 按需加载
                  useBuiltIns: "usage",
                  // corejs指定版本
                  corejs: {
                    version: 3
                  },
                  // 需要兼容的浏览器
                  targets: {
                    chrome: '60',
                    firefox: '60',
                    ie: '9',
                    safari: '10',
                    edge: '17'
                  }
                },
              ],],
            // 缓存
          }
        },

      },
      // 转化less
      {
        test:/\.less$/,
        use:["style-loader","css-loader","postcss-loader","less-loader"]
      },
      // 转化css
      {
        test:/\.css$/,
        use:["style-loader","css-loader","postcss-loader"]
      },
      // 加载嵌入css文件的图片
      {
        test:/\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type:"assets",
      }
    ],
  },
  // 4.plugins
  plugins: [
    // 自动生成html文件,并引入其他css/js资源
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

  ],
  // 5.开发服务器
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    port: 8080,
    host: "localhost",
    compress: true,
    open: true,
  },
  // 6.打包模型
  mode: "development",

}