
// 引入module01
import sum,{name,age} from './js/module01';
console.log(sum(1,2,3,4));
console.log(name,age);

// 引入module02
/* 
  引入方式: 导入module02中所有数据,并将其命名为 module2
    import * as 模块名 from '模块路径'
*/
import * as module2 from './js/module02';
console.log(module2.add(1,2));
console.log(module2.sub(1,2));

// 引入module3
/* 
  重命名: import {原名 as 新名}
*/
import {name as uname} from './js/module03';
console.log(uname);

// 引入json
/* 
  引入json数据时, 直接使用data即可接受, 因为json数据其实一个js对象
  注意: xx.json文件中,不需要写export xxxx
*/
import data from './json/index.json'
console.log(data);

// 1. 打包成开发环境代码
// npx webpack ./src/main.js -o ./build/js --mode=development 
// 2. 打包成生产环境代码
// npx webpack ./src/main.js -o ./build/js --mode=production


/* 
  webpack: 只能识别js/json格式的文件
  webpack: 无法识别css/html/图片/音视频等文件, 需要借助loader处理后才能被webpack识别
*/

