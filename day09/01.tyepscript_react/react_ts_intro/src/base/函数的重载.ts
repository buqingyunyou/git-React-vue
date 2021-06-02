/* 
   函数的参数和返回值,声明为联合类型时:
    (1) 如果函数体的操作,是联合类型的共有方法才行
    (2) 如果操作,并不是联合类型的共有方法,而是各自的私有方法,则报错
        - 此时,需要先进行类型判断(断言),将所有操作数的类型进行限定后,才可以进行操作
*/

// export function fn1(x:string|number,y:string|number):string|number{
//   if(typeof x === "number" && typeof y === "number"){
//     return x + y;
//   }else if(typeof x === "string" && typeof y === "string"){
//     return x + y;
//   }else{
//     return "参数传入有误";
//   }
// }
// console.log(fn1(1,1));
// console.log(fn1("1","1"));
// console.log(fn1(1,"1"));

/* 
  使用函数的重载,定义混合类型的各种搭配
*/
export function fn2(x: string, y: string): string;
export function fn2(x: number, y: number): number;
export function fn2(x: string | number, y: string | number): string | number {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x + y;
  } else {
    return "参数传入有误";
  }
}

console.log(fn2(1,1));  //2
console.log(fn2("1","1")); //"11"
// console.log(fn2(1,"1")); //error 没有与之匹配的重载

// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   if (typeof x === "number") {
//     return Number(x.toString().split("").reverse().join(""));
//   } else if (typeof x === "string") {
//     return x.split("").reverse().join("");
//   } else {
//     return "xxx";
//   }
// }
