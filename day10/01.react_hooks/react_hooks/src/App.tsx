import { useState, useEffect } from "react"; //从react中引入useState和useEffect

// 工厂函数组件
export default function App() {
  // <number> 声明泛型参数的类型
  // const [状态数据,更新状态数据的方法] = useState(状态数据的初始值)
  let [count, setCount] = useState<number>(0); //固定写法

  // 给函数声明类型 :()=>void
  const add: () => void = () => {
    // 通过传入参数,更新state数据
    setCount(count + 1);
  };

  // useEffect中定义组件生命周期函数
  useEffect(() => {
    // 如果useEffect(函数,依赖项),依赖项是空数组[],则相当于componentDidMount(只在挂载组件时调用一次)
    // console.log("componentDidMount");
    
    // 如果useEffect(函数,依赖项),依赖项是数组元素是state数据[state],则相当于componentDidMount 和 componentDidUpdate (在挂载阶段调用,在更新阶段也调用)
    // console.log("componentDidMount & componentDidUpdate");
    return () => {
      // 相当于componentWillUnmount
      console.log("111");
    };
  }, [count]);

  // 整个工厂函数本身就是一个render方法
  console.log("render");
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={add}>按钮</button>
    </div>
  );
}
