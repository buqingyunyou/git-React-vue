export const a:number = 1;
console.log(a);

/* 
  数据类型:
    本质上, 是对数据进行一定范围的限制, 即限制取值范围
  
  字符串string本身是一种基本数据类型
    需求:
      如果需要对取值进一步限制,
    解决:
      可以使用type xx = "值1","值2"
      进行限制为: 只能取值 "值1"或"值2"
  
  JS中的引用数据类型: object,array,function等
    本身是一种数据类型,但在ts中需要使用,则需要进一步对其形状进行限定
  
  (1) 对象类型
    通过interface接口对以下几个方面进行限制:
      1) 对象的属性名
      2) 对象的属性个数
      3) 对象的属性值类型
      4) 对象的属性是否可选
      5) 对象的属性是否只读
      6) 对象的属性是否有默认值

  (2) 函数类型
    不管是函数声明,函数表达式, 在使用时, 需要对以下几个方面进行限制:
      1) 函数的形参的个数
      2) 函数的形参的数据类型
      3) 函数的返回值的数据类型
      4) 函数的形参是否可选
      5) 函数的形参是否有默认值

  (3) 数组类型
    因为数组包含多个组成部分(元素), 可以对其元素进行以下几个方面的限制:
      1) 元素的个数
      2) 元素的数据类型
      3) 元素是否可选, 元素是否只读, 元素是否有默认值等

*/

/* 
  字符串字面量类型
    约束取值: 只能是某几个字符串中的一个
*/

// export type EventNames = "click" | "scroll" | "mousemove";
// function handlerEvent(ele:Element,event:EventNames){
//   //do ....
// }
// handlerEvent(document.getElementById("box1"),"scroll");
// handlerEvent(document.getElementById("box2"),"dbclick"); //报错
