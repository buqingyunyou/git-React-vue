const sum = (...args) => {
  return args.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

const person = {
  name: "赵云",
  age: 18,
  gender: "男",
};

// 统一导出
export {
  sum,
  person
};
// 默认导出
// export default person;