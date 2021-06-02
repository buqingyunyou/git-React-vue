// 数组的声明定义

/* 
  (1) 声明方式一:
    变量:元素类型[]
*/
export const a: number[] = [1, 1, 1, 2];
console.log(a);

/* 
  (2) 声明方式二: 
    变量:Array<元素类型>
*/
let b: Array<string> = ["1", "sdf"];
console.log(b);

/* 
  (3) 声明方式三: (接口声明)  一般不用, 演示出错
*/

// interface NumberArray {
//   [index: string]: number;
// }
// let arr1: NumberArray = [1, 2, 3, 90]; //error

/* 
  (4) any类型在数组中应用
    any类型,表示任意类型,表示数组的元素可以是任意类型
*/
let c: any[] = ["asdf", 1, { name: "sdf", age: 18 }];
console.log(c);

