/* 
  类型断言:
    可以手动指定一个值的类型
    语法:
      值 as 类型
    用途:
      将联合类型, 断言为一个类型(即指定为其中某个类型)
*/

// 定义一个接口(对象的某个类型),接口中既有属性,又有方法(函数)
interface Cat {
  name: string;
  run(): string;
}
interface Fish {
  name: string;
  swim(): void;
}
/* 
  形状接口,可当做 对象的某个数据类型
*/
export function isFish(animal: Cat | Fish) {
  if (typeof (animal as Cat).run === "function") {
    // 如果要调用run方法,则必须先断言参数是哪个具体类型
    (animal as Cat).run();
  }
}

/* 
  将一个父类, 断言为其具体的某个子类
    (父类有很多子类,通过断言,可以指定为它的某个子类)
*/
// 子类继承父类
class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}
// 形参是Error父类 (相当于多个子类,联合类型)
export function isApiError(error:Error){
  // 指定子类 (断言)
  if(typeof (error as ApiError).code ==='number'){
    return true;
  }
  return false;
}
