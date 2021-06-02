// 声明定义基础类型
export const a: number = 1;
let b: string = "str";
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
let f: symbol = Symbol();
let g: bigint = BigInt(11);

console.log(a, b, c, d, e, f, g);

// 声明定义引用类型

// 声明对象
// 接口声明对象,不要加=号
interface Person {
  name: string;
  age: number;
}
// 创建对象,要赋值加=号
const person: Person = {
  name: "水电费",
  age: 18,
};
console.log(person);

// 声明函数
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(1, 2));

// 声明数组
const arr1: number[] = [1, 2, 3];
// 使用数组泛型声明
const arr2: Array<string> = ["1", "2", "c"];
// const arr3:Array<string,number> = ["str",1]
console.log(arr1, arr2);

// 元组类型 (Tuple)
// 元组是一种特殊的数组, 已知元素的数据和类型(各类型可不必相同)
const tu1: [number, string] = [1, "str"];
console.log(tu1);

// 枚举 (Enum)
// 枚举类型,通常用于: 取值被限定在一定范围内的取值  (例如: 星期,月份,红绿灯等)
enum week { //声明枚举,不需要在前面加const/let
  周一,
  周二,
  周三,
  周四,
  周五,
  周六,
  周日,
}
console.log(week.周一);
console.log(week.周二);
console.log(week[0]);
console.log(week[6]);

// 任意值 Any
// 允许该变量或属性,可以赋值任何类型值
let x: any;
x = 1;
x = "str";
console.log(x);


// 空值 void
// 仅用于函数返回值为空的情况
interface Fn {
  (x: number, y: number): void;
}
const fn: Fn = (x, y) => x + y;
// console.log(fn("1","2")); //error
console.log(fn(1, 2));


// 表示该函数:没有参数,也没有返回值
function fn1(): void {}
fn1();
