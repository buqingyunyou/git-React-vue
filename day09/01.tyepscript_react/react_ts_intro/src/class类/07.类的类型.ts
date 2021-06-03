/* 
  class类, 也有类型(所谓类型,其实就是形状)
    通常是描述:
      1. 有什么属性,属性值类型
      2. 有什么参数,参数类型,返回值类型

*/

export class Animal{

  name:string; //定义类的属性的类型
  constructor(name:string){  //函数形参的类型
    this.name = name;
  }
  sayHi():string{ //定义函数返回值类型
    return `函数返回值${this.name}`
  }
}

let a = new Animal("小花");
console.log(a);
console.log(a.sayHi());


