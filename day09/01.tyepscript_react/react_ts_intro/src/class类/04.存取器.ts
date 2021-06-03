export class Animals {
  // 声明Animals类的实例,有一个属性name,值为string
  name: string;
  constructor(name: string) {
    // 定义实例直接的属性
    this.name = name;
  }
  // 定义实例直接属性,类型是number
  age: number = 18;
  // 定义原型方法
  setName(name: string): void {
    this.name = name;
  }
}

// 子类继承父类
class Dog extends Animals {
  // 给类添加属性,默认值为"男"  (static是给当前类添加静态属性,也就是类的直接属性)
  static sex: string = "男"; 
  // 实例的直接属性 (没有static的属性,则是实例对象的直接属性)
  _weight: number;
  // 如果需要给实例动态赋值,则需要在构造函数中定义
  constructor(name: string, weight: number) {
    super(name); //调用父类的constructor
    this._weight = weight; //构造函数中的this.xx, 也是实例的直接属性
  }

  // 属性的读取方法 (get方法,是通过.获取当前属性值时,自动调用)
  get weight() {
    return this._weight;
  }

  // 属性的设置方法 (set方法,是给当前属性重新赋值时,自动调用)
  set weight(value) {
    this._weight = value + 10;
  }
  // 类的原型定义方法 (普通函数定义,则是原型方法)
  setName(name: string) {
    super.setName(name);
  }
  // 实例直接方法 (箭头函数定义,则是实例的直接方法)
  setAge:(age:number)=>void = (age)=>{
    this.age = age;
  }
}

const d = new Dog("老狗", 18);
console.log(d);
console.log(d._weight); //调用weight属性的get方法
d.weight = 10; //调用weight的set方法
console.log(d);


