const {
  resolve
} = require('path')
// 打包html,需要引入包
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js", //相对于项目根目录
  output: {
    path: resolve(__dirname, '../build'), //相对于当前文件所在目录
    filename: './js/main.js',
    // 指定目录
    clean: true, //表示先清空输出目录,再将打包的文件输出到该目录
  },
  module: {
    rules: [
      // 处理js文件 (语法检查)
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: "pre", // 提前加载使用
        use: {
          // 使用eslint-loader解析
          loader: "eslint-loader",
        },
      },
      // 处理js文件 (语法转换)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // 处理less文件
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      // 处理引入字体图标
      {
        test: [/\.ttf$/, /\.woff2$/, /\.woff$/],
        type: "asset/resource",
        generator: {
          filename: 'fonts/[hash:10][ext][query]'
        }
      },
      // 处理css文件
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      // 处理引入的图片资源
      {
        test: [/\.jpe?g$/, /\.gif$/, /\.png$/],
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 图片大小小于8kb,转base64打包,否则原文件打包输出
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          filename: 'images/[hash:10][ext][query]'
        }
      },
    ]
  },

  // 打包html,需要配置plugin
  plugins: [
    new HtmlWebpackPlugin({
      // 在这里,将需要打包的html传入进去
      template: './src/index.html'
    })
  ],

  // 配置开发服务器
  devServer: {
    // 以哪个目录作为服务器项目根目录
    contentBase: resolve(__dirname, '../build'),
    host:"localhost",
    port:8080,
    // 进行压缩
    compress:true,
    // 自动打开浏览器
    open:true,
    // 显示打包进度
    progress:true,
  },

  // 解决开发环境不能自动刷新 (值为:web时,能自动刷新页面,但不能解决webpack的兼容性问题, web和browserslist只能存其一)
  // 开发环境,使用web
  // 生产环境,使用browserslist
  target:"web",

  mode: "development"
}