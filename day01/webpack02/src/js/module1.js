// 1.使用统一导出
const arr = [1, 2, 3];
const name = "赵飞燕";
const sum = (...args) => {
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
};

export {
  arr,
  name,
  sum
};