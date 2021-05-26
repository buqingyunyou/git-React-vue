// 1.导入module1
import {arr,name,sum} from './js/module1';
console.log(arr);
console.log(name);
console.log(sum(1,3,6));
console.log("---------------------------");
// 2.导入module2
import {add,sub,name as uname} from './js/module2';
console.log(add(10,1));
console.log(sub(10,1));
console.log(add(1,2) === sub(1,2));
console.log(uname);
console.log("--------------------------");
// 3.导入module3
// import * as module3 from './js/module3'
// console.log(module3.obj.name);
// console.log(module3.obj.gender);
// console.log(module4.obj.age);
/* 
  特别注意:
    如果导入的是默认导出的模块, 则不能是使用 import * as xx from "xx"
*/
import * as module3 from './js/module3';
console.log(module3.aa);
// console.log(module3.author);

console.log("--------------------------");
// 4.导入module4 (导入json文件)
import data from './json/module4.json';
console.log(data);


// 5.引入less文件
import './css/less/test2.less';
import './css/less/test1.less';