/* 
  (1) 函数式声明
*/
export function fn1(x: number, y: number): number {
  return x * y;
}
console.log(fn1(1, 12)); //12

/* 
  (2) 函数表达式
*/
// 1) fn2变量没有声明类型,是通过赋值后,类型推断确定的
let fn2 = function (x: number, y: number): number {
  return x - y;
};
console.log(fn2(10, 1)); //9

// 2) 手动给fn3变量添加函数类型 (箭头函数)
let fn3: (x: number, y: number) => number = (x: number, y: number): number =>
  x + y;
console.log(fn3(1, 3)); //4

/* 
  (3) 使用接口定义函数形状
*/
interface Fn4 {
  (a: number, b: number): number;
}
let fn4: Fn4 = function (aa: number, bb: number): number {
  return aa + bb;
};
console.log(fn4(1, 1)); //2

/* 
  (4) 函数形参 (可选参数,可传可不传)
    [可选参数] 必须在 [必选参数] 后面
*/
function fn5(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
console.log(fn5("jack", "ma")); //jack ma

// 报错: 可选参数 必须在 必选参数 后面
// function fn5(firstName?:string, lastName:string):string {
//   if(firstName){
//     return firstName + " "+lastName;
//   }else{
//     return lastName;
//   }
// }
// console.log(fn5('jack','ma'));  //jack ma

/* 
  (5) 参数默认值
    注意:
      (1) 设置默认值的参数放置在必选参数后面时,调用时, 默认参数可不必写
      (2) 设置默认值的参数,放在必选参数前面时,调用时要传入一个undefined进行占位,否则报错
*/
// function fn6(firstName: string, lastName: string = "tom") {
//   return firstName + lastName;
// }
// console.log(fn6("jack", "cat")); //jackcat
// console.log(fn6("cat")); //cattom

function fn6(firstName: string = "tom", lastName: string) {
  return firstName + lastName;
}
console.log(fn6("jack", "cat")); //jackcat
console.log(fn6(undefined, "cat")); //tomcat  (必须要传入undefined占位)

/* 
  (6) 剩余参数  ...restArgs
      注意: 
        剩余参数写在参数的最后
*/
function fn7(a: string, ...args: string[]) {
  return args.reduce((prev, curr) => {
    return prev + a + curr;
  });
}
let res = fn7("-", "a", "b", "c", "d");
console.log(res); //"a-b-c-d"

