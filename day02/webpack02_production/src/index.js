// 入口文件

import {
  sum,
  person
} from './js/module1.js';
console.log(person);
console.log(sum(1, 2, 3, 4));

import arr, {
  name as uname
} from './js/module2.js';
console.log(arr);
console.log(uname);

import data from './json/module3.json';
console.log(data);

// 引入css/less文件
// import './css/index.less';
// import './css/index2.css';