/* 
  public 公开的,被修饰的属性或方法,可被任意访问
  private 私有的, 被修饰的属性或方法,只能在当前类中被访问
  protected 修饰的属性或方法,只能在当前类及其子类中被访问, 实例无法访问到



  访问修饰符的用处:
    1. 若希望某些属性,不能被其他类或对象访问,则是用private进行私有化
    2. 如果将constructor构造函数private修饰,则该类无法被继承和实例化
    3. 如果设置类只能被继承, 不能被实例化, 则将constructor用protected修饰


  修饰符使用的地方:
    1. 修饰类
    2. 修饰属性
    3. 修饰函数
    4. 修饰参数

  
  readonly关键字:
    只读属性, 只允许出现在[属性声明], [索引签名] 或[构造函数]中
    设置只读的属性,不能被重新赋值
*/

class Person {
  // 声明实例直接属性类型
  public name: string;
  public age: number;
  public sex: string;

  constructor(name: string, age: number, sex: string) {
    // 给实例直接属性赋值
    this.name = name;
    this.age = age;
    this.sex = sex;

    // 在当前类中,可以访问或调用所有属性和方法(包括public,private,protected)
    // 直接在类中进行了重新赋值
    this.setName("jack");
    this.setAge(19);
    this.setSex("女");
  }
  // 声明实例直接方法
  public setName(name: string): void {
    //public
    this.name = name;
  }
  private setAge(age: number): void {
    //private
    this.age = age;
  }
  protected setSex(sex: string): void {
    //protected
    this.sex = sex;
  }
}
const p = new Person("李思", 90, "男");
console.log(p);

p.setName("李三"); //ok
console.log(p);
// p.setAge(80); //error 私有方法,实例无法调用
// p.setSex("女") //error 只能在Person类及其子类中调用

// 定义一个子类继承Person
class Student extends Person {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex); //调用父类的constructor

    // super.setName("张伟"), //调用父类setName方法 (public)
    // super.setAge(20); //error  private子类无法访问
    super.setSex("男"); //protected子类可以访问
  }
}

export const s1 = new Student("张宇", 18, "女");
console.log(s1);
s1.setName("赵谦"); //ok  public可以访问
console.log(s1);
// s1.setSex('女'); //error  protected无法访问
// s1.setAge(10);  //error private无法访问

