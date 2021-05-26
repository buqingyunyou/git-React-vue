const sum = (...args) => {
  return args.reduce((prev, item) => {
    return prev + item
  }, 0)
}

const name = "张三"
const age = 18

/* 
  同一个模块中,可以使用多种导出方式
*/
// 默认导出
export default sum;
export {
  name,
  age
}