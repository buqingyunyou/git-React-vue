// 配置文件, 一般都保存在项目根目录下, 使用.开头
module.exports = {
  // eslint规则配置 (检查哪些语法规则)

  // 1.解析器选项 (告知语法检查工具,当前代码的ES版本,及是否模块化)
  parserOptions:{
    // ecmaVersion:"6"  //注意: 不能加引号
    // 指定可解析的ES版本,根据代码当前使用的ES版本决定
    // ecmaVersion:2017  //注意: 可以使用年份
    ecmaVersion: 8,
    // 告知检查语法的eslint,当前代码是模块化的代码, 还是非模块化代码
    sourceType: "module" //两种值: "module" / "script"
  },

  // 2.指定具体需要检查的规则
  rules:{
    /* 
      规则取值:
        "error" 或者 2  ==> 报错(红色, 不会打包)
        "warn"  或者 1  ==> 警告(黄色, 会打包)
        "off"   或者 0  ==> 关闭该规则
    */
    // 警告使用console语句
    "no-console": 'warn', //如果属性名包含非(数字,字母,下划线)时,使用引号包裹
    // 警告使用分号
    semi:'warn',
    // 禁止使用==  使用"error" 或者 数字 2
    eqeqeq:2,

  }
}