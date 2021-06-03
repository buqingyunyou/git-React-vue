/* 
  类之间的继承关系, 通过extends关键字连接
    子类如果写了constructor函数, 则必须调用super()方法
    super相当于父类
      1) super()相当于调用父类的构造函数
      2) super.xx 可以在子类中调用父类的protected/public修饰的成员

      子类中使用 super 关键字, 调用父类的构造函数和方法

*/
export class Animal {
  name: string;
  constructor(name: string) {
    // 实例直接属性
    this.name = name;
  }
  // 原型方法
  sayHi() {
    return `My name is ${this.name}`;
  }
}

export let a = new Animal("Jack");
console.log(a.sayHi()); // My name is Jack

class cat extends Animal {
  constructor(name: string) {
    super(name); //调用父类的constructor方法
  }
  sayHi() {
    return "meow," + super.sayHi(); //调用父类原型的sayHi方法
  }
}
let c = new cat("Tom");
console.log(c.sayHi()); //"meow,My name is Tom"
console.log(c);
// console.log(Animal.sayHi());



