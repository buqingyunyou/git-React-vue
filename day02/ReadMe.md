# webpack 打包项目,构建项目

## webpack 是什么?

webpack 是一个打包工具,或者说是一个构建前端项目的工具
webpack 是一个用于现代 JS 应用程序的 `静态模块` 打包工具

## webpack 内部如何工作?

处理应用程序时,在内部构建一个依赖图,该依赖图映射到项目中的每个模块,并生成一个或多个 boudle

## webpack 配置文件

`webpack.config.js`
使用 module.exports 将配置对象暴露

## webpack 具体能做什么?

- webpack 只能识别 js/json 文件,无法识别 css/less/html 等文件
- webpack 五大配置

  - `entry` 打包入口文件,作为`依赖图的开始`
    - 入口 js 文件的相对路径,是相对于项目根目录
  - `output` 打包后的输出目录,和输出文件名

    - 输出目录`path`,必须是绝对路径
    - 文件名路径`filename`,可以是相对路径,相对的是当前配置所在的文件夹路径
    - `publicPath` 当该入口的输出文件,在浏览器中被引用时, 为它们指定一个`公共URL地址`

  - `loader`(module:{rules:[...]}) 加载器

    - wepack 只能识别和处理 js/json 文件
    - loader 可以打包任何类型的文件
    - 两大必须属性
      - `test`属性: 识别出那些文件需要被转换
      - `use`属性: 定义转换时,使用哪个 loader

  - `plugins` 插件,主要用于扩展 plugins 的功能

    - 主要包括: `代码优化, 资源管理, 注入环境变量`
    - 插件必须先引入 require('xxx')
    - plugins 属性值, 是一个`数组`
    - 如果需要对具体插件进行配置,可使用`option`定义

  - `mode` 模式

    - development 开发模式
    - production 生产模式
    - none

  - devServer 开发服务器,主要用于开发环境的测试使用

## 常见的 loader 和 plugins

- 处理 css 文件的:

  - `css-loader` 将 css->js
  - `ts-loader` 将 typescript -> javascript
  - `style-loader`
  - `postcss-loader`
  - `less-loader` (less 转 css)
  - `css-minimizer-webpack-plugin` (压缩 css 代码)
  - `mini-css-extract-plugin` (提取 css 代码)
  -

- 处理 js 文件的

  - `eslint-loader` (js 语法检查)
  - `babel-loader` (将 es6 语法转换为浏览器可识别的语法)

- 处理 html 文件
  - `html-webpack-plugin` (自动生成 html,并自动注入生成的输出文件,例如 css 文件和 js 文件)
  - `ProgressPlugin` (自定义编译过程的进度)

## loader

1. loader 用于对`不同语言模块的源代码`进行`转换为js代码`, 对 webpack 无法识别的模块代码进行预处理
2. loader 的配置方式,指定 loader
   - 在 webpack.config.js 配置文件的配置对象中配置
   - 在`module.rules数组`中进行配置 loader
3. loader 取值(执行)顺序, `从右到左,从下到上`
4. loader 通过`options对象配置`
5. loader 不需要 require 引入

## plugin

1. plugin 帮助 loader 实现无法解决的其他事
2. 配置 plugin 时,通过 new 调用,以便于向其中传递参数
3. plugins:[new html-webpack-plugin({template:"./src/index.html"}),...]

## webpack 配置

1. 配置文件 webpack.config.js
2. 配置文件中,暴露配置对象
3. `webpack遵循CommonJS模块规范`
   - require('模块路径/模块名') 引入
   - module.exports xxx 导出

## 常见的模块类型

- commonjs 模块
- AMD
- CMD
