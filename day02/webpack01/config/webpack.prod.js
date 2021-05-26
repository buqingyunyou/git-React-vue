const {
  resolve
} = require('path')
// 只有插件才需要引入,其他的包不需要引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // 1.入口
  entry: "./src/main.js", //入口文件路径相对于项目根目录
  // 2.输出
  output: {
    // filename是在输出目录下的路径(路径和文件名)
    filename: 'js/[name].[contenthash:8].js', //添加hash值,实现静态资源的长期缓存
    path: resolve(__dirname, '../dist'), //输出路径相对于当前文件所在目录
    // 解决html中使用script标签引入js文件时的相对路径,不能以./开头
    publicPath: "/", //指定所有输出资源的公共路径
    //表示先清空输出目录,再将打包的文件输出到该目录
    clean: true,
  },
  // 3.loader
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
            presets: [
              [
                // 默认的预设环境
                "@babel/preset-env",
                // 解决兼容promise等
                {
                  // 按需加载,即发现js中存在有promise,就加载兼容promise的包,其他的不加载
                  useBuiltIns: "usage",
                  // 指定corejs版本
                  corejs: {
                    version: 3
                  },
                  // 指定兼容到什么程度(哪些浏览器能够识别)
                  targets: {
                    ie: "10", //能够兼容ie10
                    chrome: "70", //能够兼容chrome70
                  },
                },
              ],
            ],
            // 开启缓存,提高性能
            cacheDirectory: true,
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      // 处理less文件
      {
        test: /\.less$/,
        use: [
          /* 
            style-loader拼接到js文件中,动态创建style标签添加到dom中,出现闪屏现象
            css-loader将多个css文件合并到一起,是css打包工具
            less-loader将less文件转为css文件
          */
          // 将style-loader,替换成MiniCssExtractPlugin.loader
          // 将css代码从js代码中抽取出来,形成单独的css文件,使用link标签添加到html,不会出现闪屏
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", //处理完css兼容性问题后再合并css
          "less-loader",
        ]
      },
      // 处理引入字体图标
      {
        test: [/\.ttf$/, /\.woff2?$/], //如果是匹配多种文件,使用数组
        type: "asset/resource", //输出原文件,并不会转base64
        // 指定字体图标打包后的输出目录,相对于dist目录
        generator: {
          // [contenthash:10] 表示输出的文件名是随机hash值,保留前10位
          // [ext] 表示带前缀/后缀
          // [query] 表示查询字符串 格式: ?key=value&key=value
          filename: 'fonts/[contenthash:10][ext][query]'
        }
      },
      // 处理css文件
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, //将css代码抽取成css文件,使用link标签添加到html中
          "css-loader", //再将css整合到js中
          "postcss-loader", //先做兼容处理
        ]
      },
      // 处理引入的图片资源
      {
        test: [/\.jpe?g$/, /\.gif$/, /\.png$/],
        type: "asset", //处理资源
        parser: {
          dataUrlCondition: {
            // 图片大小小于8kb,转base64打包,否则原文件打包输出
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          filename: 'images/[contenthash:10][ext][query]'
        }
      },
    ]
  },
  // 4.plugins
  plugins: [
    // 1.配置插件(将src下的html文件打包)
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 2.配置插件(将css代码,从js文件中抽取出形成css文件,以link引入html)
    new MiniCssExtractPlugin({
      // 抽取出来后的css文件,设置其文件路径(含文件名)
      filename: "css/[name].[contenthash:8].css",
    }),
    // 3.压缩css文件
    new CssMinimizerPlugin(),
  ],
  // 5.指定环境(让webpack兼容生效)
  target: "browserslist",
  // 6.指定打包模式(开发模型/生产模式)
  mode: "production",
}

// 生产环境的代码,需要部署到服务器上才能运行
// 1.下载serve全局包, 以用于部署生产环境代码  npm i serve -g
// 2.启动serve服务,运行生产代码 serve -s dist  
//    -s:表示指定静态资源static
//    dist:表示指定静态资源目录名

// 将合并到js中的css代码,再拆分出来,形成单独的css文件
// 原因: 因为css代码合并到了js中,会出现闪屏的现象, 而使用link标签引入css文件,因为在css文件没有加载完以前,页面并不会渲染出来
// 下载插件 npm i mini-css-extract-plugin

// js的兼容性问题, 由babel解决
// css的兼容性问题,由postcss解决 (配合另一个包添加厂商前缀autoprefixer)