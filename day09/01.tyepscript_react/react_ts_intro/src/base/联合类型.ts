/* 
  联合类型
    1. 表示变量可以是多个类型
    2. 只要是其中一个数据类型,都可以
*/

// 1.声明变量a 的类型是 联合类型(number|string)
export let a: number | string;
a = 1;
// a.toUpperCase(); //error (当前a变量是number类型,没有toUpperCase方法)
console.log(a);
a = "str";
console.log(a);
// a = true; //error

const b: string = a.toUpperCase();
console.log(b);

function getString(a: number | string): string {
  return a.toString(); //只能访问/调用两种类型共有的属性或方法
}
// function getString1(b:number|string):string{
//   return a.length; //error  联合类型不存在length属性
// }
