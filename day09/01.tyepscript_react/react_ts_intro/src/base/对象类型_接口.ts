/* 
  在面向对象语言中:
    接口interface是对行为的抽象, 有类class去实现implement
  在typescript中:
    1. 接口可用于抽取为多个类的行为;      (接口 - 类)
    2. 接口可用于对 [对象形状] 进行描述;  (接口 - 对象)

  接口用于声明对象类型时:
    注意: 对对象进行赋值时, 属性不能多也不能少; 属性名必须保持和接口一致, 属性值必须是接口中声明的数据类型
  
*/

/* 
  (1) 属性个数不能多不能少
*/
// // 声明对象的类型
// interface Person {
//   name: string;
//   age: number;
// }
// // 对象赋值
// export const person: Person = {
//   name: "赵谦",
//   age: 18,
//   // sex:"男" //error
// };
// console.log(person);

/* 
  (2) 可选属性 ?
*/
// 声明对象的类型
// interface Person {
//   name: string;
//   age: number;
//   sex?: string;  //?  表示可选属性, 进行赋值时可写,可不写
// }
// // 对象赋值
// export const person: Person = {
//   name: "赵谦",
//   age: 18,
//   // sex:"男"  //赋值时,该属性可写,可不写
// };
// console.log(person);

/* 
  (3) 任意属性  (注意: 一个接口,只能定义一个任意属性)
      a) 属性个数不固定
      b) 属性名任意取
      c) 属性值可以是任意类型
*/
// interface Person {
//   name: string;
//   age?: number;
//   [xxx: string]: any; //xxx随意写, 表示属性名任意取名和任意个数, 属性值可以是任意类型
// }
// // 对象赋值
// export const tom: Person = {
//   name: "tom",
//   age: 18,
//   gender: "男", //是接口声明时的任意属性
//   address: "xxxxxxx", //也是接口声明时的任意属性
// };
// console.log(tom);

/* 
  (4) 任意属性,属性值类型确定场景
    如果任意属性的属性值类型确定, 则其他确定属性和可选属性的值类型,必须是任意属性的属性值类型的子集
    例如:
      定义任意属性, 属性值类型是string
      => 确定属性和可选属性的属性值类型, 也必须是string
*/
// interface Person {
//   name: string;
//   // isFat: boolean; //error   (boolean类型不是string类型的子集)
//   // age?: number; //error     (number类型不是string类型的子集)
//   [xxx: string]: string; //xxx随意写, 表示属性名任意取名和任意个数, 属性值可以是任意类型
// }
// // 对象赋值
// export const tom: Person = {
//   name: "tom",
//   // age: 18, //error
//   gender: "男", //是接口声明时的任意属性
//   address: "xxxxxxx", //也是接口声明时的任意属性
// };
// console.log(tom);

/* 
  (5) 只读属性, 属性不能修改
*/
interface Person {
  readonly name: string;  //只读readonly
  age?: number;
  [xxx: string]: any; //xxx随意写, 表示属性名任意取名和任意个数, 属性值可以是任意类型
}
// 对象赋值
export const tom: Person = {
  name: "tom",
  age: 18,
  gender: "男", //是接口声明时的任意属性
  address: "xxxxxxx", //也是接口声明时的任意属性
};
console.log(tom);

//对对象的name属性重新赋值
// tom.name = "jack";  //error  只读属性赋值后, 无法再次赋值
// console.log(tom);

