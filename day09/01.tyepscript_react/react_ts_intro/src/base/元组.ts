/* 
  元组:
    元组是一种特殊的数组
    元组的元素, 可以是任意类型

  元组越界元素:
    通常元组会约束前几个元素的数据类型, 其他超出约束个数的元素,被称为越界元素
    对越界元素的约束:
      越界元素的数据类型,必须是前几个元素数据类型中的一种,不能是其他类型
  
*/

export const tom:[number,string] = [1,"str"]  //元素类型不一致
console.log(tom[0]);   //1
console.log(tom[1]);   //'str'

tom.push('bob'); //string   ok
tom.push(2);  //number  ok
// tom.push(true); //boolean  error