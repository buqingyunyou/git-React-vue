/* 
  泛型:
    在定义函数, 接口或类时, 不预先指定具体的类型, 而是在使用时,再指定类型的一种特性
    通常写法:
      类<T>
      函数<T>
      接口<T>
*/

import { argv } from "process";

/* 
  需求:定义一个方法,用于创建一个指定长度的数组,同时将每个元素填充一个默认值
*/
export function createArray(length: number, value: any) {
  let res = [];
  for (var i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}
console.log(createArray(3, "x"));

/* 
  定义泛型用法:
    通常是因为定义时,参数可变,无法确定,此时使用泛型定义,在具体调用(使用)时再确定具体类型
*/

export function createArray1<T>(length: number, value: T) {
  let res: T[] = [];
  for (var i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}
// 具体使用时(也可以不指定,可自动推论),定义类型
console.log(createArray1<string>(3, "x"));

/* 
  多个类型参数
*/
function swap<U, T>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
swap([7, "sss"]); //['sss',7]

/* 
  泛型约束
*/
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  //error (因为泛型类型无法决定,则无法使用指定的方法或属性)
  return arg;
}

// 此时可以对泛型进行约束,要求只能传入具有length属性的变量
interface Lengthwise {
  length: number;
}
// 泛型T继承接口
function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

/* 
  泛型接口:
    通过接口定义函数的类型, 或者叫函数的形状
*/
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 声明函数类型
let mySearch: SearchFunc;
// 定义函数
mySearch = function (source, substring) {
  return source.search(substring) !== -1;
};

// 使用含有泛型的接口, 声明函数类型
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray2: CreateArrayFunc;
createArray2 = function (length, value) {
  let res = [];
  for (var i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
};
console.log(createArray2(3, "y")); //["y"."y","y"]
/* 
  在接口上使用泛型:
    数组类型(形状)定义有两种方式:
      1. number[]
      2. Array[number]
*/
interface CreateArrayFunc1<T> {
  (length: number, value: T): Array<T>;
}
let createArray3: CreateArrayFunc1<any> = function (length, value) {
  let res = [];
  for (var i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
};

/* 
  泛型类:
    泛型可用于类的类型定义
*/
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
