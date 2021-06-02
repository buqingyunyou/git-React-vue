/* 
  (1) 定义类:
    class 类名{
      // 定义构造函数
      constructor(){
        this.name = name;
      }
    }
  (2) 创建实例
    const aa = new 类名()


*/
export class Animal{
  // (1) 在类中,使用static修饰的属性,是类的直接属性,实例无法访问
  static age:number = 18;
  name:string;
  constructor(name:string){
    // (2) constructor函数中的this表示实例化对象,this.name就是给实例对象扩展直接属性
    this.name = name;
  }

  // (3) 在类中,定义箭头函数,会自动添加到实例对象上
  do = ()=>{
    console.log("箭头函数添加到实例对象上");
  }

  // (4) 在类中,定义普通函数,会自动添加到原型对象上
  say(){
    return `hello ${this.name}`
  }
}
// new调用, 创建实例化对象
let a = new Animal("cat");
// 对象调用原型方法
console.log(a.say());
console.log(a);
console.dir(Animal);
console.log(Animal.age); //18


