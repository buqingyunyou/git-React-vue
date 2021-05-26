## 什么是webpack?
  -是一个模块打包器 (bundle)
  -所有[前端资源(js/json/css/img/less/...)都可以作为模块], 进行打包处理
  -webpack根据模块的依赖关系, 进行静态分析, 生成对应的 [静态资源]

## webpack五大配置
  1.entry
    -入口模块 (webpack从哪个模块开始构建依赖关系图并进行打包)
  2.output
    -输出出口 (打包后的文件,输出到哪个目录下,打包后的文件名叫什么)
  3.loader
    -加载器 (webpack本身只能识别和处理js/json模块,其他文件(模块)无法处理; 此时需要借助各种loader加载和处理对应的文件,以实现将其他文件也一起打包)
  4.plugins
    -插件 (webpack默认可以完成的功能比较少,通过各种插件,可以扩展webpack的功能,使其具备更多的功能. 常见的功能: 语法检查,语法转换,压缩,打包优化,混淆变量等)
  5.mode
    -模式 (webpack具备两种模式: a.development开发模式; b.production生产模型; 设置不同的模式,webpack完成的功能不一样,打包后的输出文件也不一样,这个根据具体需求而定)

# loader
  -loader本身就是, 运行在node.js平台中的js模块;
  -loader本身就是一个函数, 接收源文件(css/less/..等)作为参数,返回转换的结果;
  -loader一般以xxx-loader形式命名;
# plugins
  -插件可以完成一些loader不能完成的功能
  -插件的是使用, 一般在webpack的配置信息 plugins选项中指定;

### webpack的配置文件
  -`webpack.config.js`
  -是一个js模块
  -[内部要暴露webpack配置对象]  module.exports = {...}

### 使用webpack打包需要下载的包
  -webpack (webapck服务)
  -webpack-cli  (webpack命令行客户端)

### 项目准备工作
  1.初始化项目
    -npm init [-y] (npm是包管理工具,npm init执行后生成package.json配置文件,使用npm初始化当前的目录为一个项目,之后即可使用npm命令下载各种npm包)
  2.下载webpack相关的包
    -npm i webpack webpack-cli -D  [注意:是下载到开发环境,因为在生产环境下,不需要该包]

### 原始版webpack打包 (npx命令,表示将webpack.exe临时添加到环境变量,用完后移除,是一次性的)
  1.打包成开发包
    -npx webpack ./src/index.js -o ./build/js --mode=development
  2.打包成生产包
    -npx webpack ./src/index.js -o ./build/js --mode=production


### webpack原生功能
  1.编译打包js和json文件
  2.将es6的js模块化语法,转为浏览器可识别的语法
    [注意:打包后的输出文件中,会出现箭头函数,因此存在兼容性问题]
  3.可压缩代码

### webpack不足
  1.无法编译打包非js/json模块文件
  2.无法将es6语法,转为es5及以下语法


### 配置版webpack打包 (通过配置各种loader/plugins增强webpack的功能)
  要求: 在项目根目录下创建一个webpack配置文件 [webpack.config.js]模块
  
