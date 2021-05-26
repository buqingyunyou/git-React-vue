// webpack配置位置中, 需要暴露配置对象, 基于webpack运行在node平台下,则使用commonJS模块化进行暴露

// 引入node的内置模块path, 借助其方法resolve进行路径的拼接
const {
  resolve
} = require('path')

module.exports = {
  // 五大配置

  // 1.entry 入口
  entry: "./src/main.js",

  // 2.output 输出 
  output: {
    // 1)配置输出目录, 因为后期可能需要配置其他类型文件,如css,html等,所以只配置到build目录
    path: resolve(__dirname, 'build'),
    // 2)配置输出文件名 (此处输出的文件是入口文件打包后的出口文件名)
    filename: "./js/main.js"
  },
  
  // 3.loader (加载器,用于加载webpack无法识别的非js/json文件)
  module: {
    rules: [
      // (1) 配置语法检查的加载器 eslint-loader
      {
        // 1.test表示检查哪些文件
        test: /\.js$/,  //只检测.js文件
        // 2.排除哪些js文件
        exclude: /node_modules/,  //排除node_modules目录下的js文件
        // 3.提前加载使用
        enforce: "pre",  //语法检查,检查的是源代码,所以要最开始检查,避免因为编译语法回退,导致语法检查无法通过
        // 4.使用什么加载器进行语法检查 (市面上不知一种语法检查器)
        use:{
          // 使用eslint-loader加载器解析
          loader:"eslint-loader"
        },
      },

      // (2) 配置语法转换的加载器 babel-loader
      // 将es6及以上语法,转为es5或es5以下语法
      {
        test:/.\js$/,  //目标文件.js文件
        exclude:/node_modules/, //排除node_modules目录中的js文件
        use:{ //使用哪个语法转化加载器
          loader:"babel-loader",
          // 语法转化的babel规则,直接在这里设置,不需要额外再写个babel的配置文件
          options:{
            presets:["@babel/preset-env"],
          }
        },
      },

      // (3) 配置less-loader加载器
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      }
    ],
  },

  // 4.plugins (插件,用于增强webpack的各种功能插件,以完成特定的功能)
  // 5.mode (模式,development/production)
  mode: "development" //(注意: 值都是使用双引号包裹)
}