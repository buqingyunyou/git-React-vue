/* 
  类型推导前提:
    在声明时,进行赋值,否则变量类型会使any
  类型推导:
    在声明赋值时,根据赋值的数据类型,该变量设置同样的数据类型
*/
export let a:any;
a = 1;
console.log(a);

let b = 1; //变量的数据类型是  number  相当于let b:number = 1
console.log(b);
