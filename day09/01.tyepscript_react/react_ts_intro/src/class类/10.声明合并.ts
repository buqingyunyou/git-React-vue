/* 
  声明合并:
    如果定义两个相同名字的函数,类或接口, 则会合并成一个类型
*/

// 1.函数合并 (函数合并, 也叫函数重载)
export function reverse(x:number):number;
export function reverse(x:string):string;
export function reverse(x: number | string): number | string {
  // 像这种联合类型,需要先指定类型,才能进行操作
  if(typeof x === "number"){
    return Number(x.toString().split("").reverse().join(""))
  }else if(typeof x === 'string'){
    return x.split('').reverse().join('')
  }
}

// 2.接口合并
interface Alarm{
  price:number;
}
interface Alarm{
  // price:string;  //error 合并的属性或方法类型,必须唯一,不能不同
  // price:number;  //重复,不会报错
  weight:number;
  
}
