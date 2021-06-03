/* 
  抽象类: 
    无法被实例化的类
    只能被子类继承

    使用abstract修饰类名

  继承:
    子类继承父类,会将父类中的非private属性和方法,全部继承下来,在子类中可以直接使用
*/

export abstract class Person{  //抽象类
  public name;
  public constructor(name:string){
    this.name = name;
  }
  public abstract sayHi():void;  //抽象方法
}
// const p = new Person();  //error 无法创建抽象类的实例

class Student extends Person{
  public sayHi(){
    console.log(`子类继承抽象类时, 要重写抽象类的抽象方法${this.name}`);
  }
}
const s = new Student('小明');
console.log(s);
s.sayHi();   //调用子类的sayhi方法

