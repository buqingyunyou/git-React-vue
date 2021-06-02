/* 
  JS中有很多内置对象, 在ts中当做对象的某个具体类型使用

  (1) ECMAScript 的内置对象
    Boolean, Error, Date, RegExp等
*/

export let a:Boolean = new Boolean(true);
console.log(a);
let b:Error = new Error('Error ocurred');
console.log(b);
let c:Date = new Date();
console.log(c);
let d:RegExp = /[A-Z]/i;
console.log(d);

/* 
  (2) DOM和BOM的内置对象
    例如: Document, HTMLElement,Event,NodeList等
*/

// let body:HTMLElement = document.body;
// let allDiv:NodeList = document.querySelector('div');
// document.addEventListener('click',function(e:MouseEvent){
//   // xxx
// })


