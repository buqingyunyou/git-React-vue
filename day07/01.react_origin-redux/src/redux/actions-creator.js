// 创建action对象的工厂函数 (根据数据有多少类操作,定义多少个action)

export const increment = (num) => {
  // 返回action对象
  return {
    type: "INCREMENT",
    data: num,
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    data: num,
  };
};
