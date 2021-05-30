// 设置默认值为0
export default function count(prevState = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return prevState + action.data;
    case "DECREMENT":
      return prevState - action.data;
    default:
      return prevState;
  }
}
