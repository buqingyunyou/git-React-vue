/* 
  类型别名:
    即给某个具体类型, 重新命名
    type 新名 = 旧类型名

    使用场景:
      用于给联合类型, 起个名字
*/
export const a:number = 1;
console.log(a);

// 将string类型的名字,改为Name
type Name = string;
type NameResolve = () => string; //箭头函数的某个类型

// 给联合类型, 取个别名
type NameOrResolve = Name | NameResolve;
export function getName(n: NameOrResolve): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
