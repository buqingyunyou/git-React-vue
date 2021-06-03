/* 
  类与接口的关系
    1.类实现接口 implement (类可以实现多个接口)  (类中必须重新写接口中的方法)
    2.类继承类 (子类只有一个父类,会继承父类非private的属性和方法)
    3.接口继承接口 (会将两个接口的方法进行合并)


  接口的诞生原因:
    不同类之间存在一些共有的特性时, 可以将这部分共有的特性抽取为一个接口interface
*/

/* 
  (1) 不同类,实现相同接口
*/
// 报警接口
export interface Alarm{
  alert():void;  //接口中,定义一个报警的方法 (没有具体实现)
}

class Door{}
// SecurityDoor继承了Door类,并实现了Alarm接口
class SecurityDoor extends Door implements Alarm{
  // 如果某类实现了某个接口,则必须重写该接口中定义的方法
  alert(){
    console.log("安全门报警了...");
  };
}
// Car类实现了Alarm接口
class Car implements Alarm{
  alert(){
    console.log("车报警了...");
  };
}

/* 
  (2) 类实现多个接口
*/
// 灯光接口
interface Light{
  lightOn():void; //开灯
  lightOff():void; //关灯
}

// SmallCar实现了多个接口 (Alarm和Light两个接口)
class SmallCar implements Alarm,Light{
  alert(){
    console.log("车报警...");
  };
  lightOn(){
    console.log("打开车灯");
  }
  lightOff(){
    console.log("关闭车灯");
  }
}

/* 
  (3) 接口继承接口
*/
interface LightableAlarm extends Alarm{
  lightOn():void;
  lightOff():void;
}