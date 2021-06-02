export let a:number = 1;
console.log(a);

/* 
  声明文件:
    使用第三方库时, 需要引用它的声明文件,才能获得对应的代码补全,接口提示等功能
  
  声明文件的后缀:
    xxx.d.ts
  
  第三方声明文件路径
    node_modules/@types

  自动生成声明文件
    在tsconfig.json中配置
    {
      "compilerOptions":{
        "module":"commonjs",
        "declaration":true //自动生成声明文件
      }
    }


  ///<reference /> 三斜线指令
    1.三斜线指令, 包含单个XML标签的单行注释
      注释的内容, 作为编译器指令使用
    2.三斜线引用, 告诉编译器, 在编译过程中, 自动引入需要的额外的文件
    
*/