import Search from "./pages/Search";
import UserList from "./pages/UserList";

/* 
  hooks: 
    用于让工厂函数组件, 使用上state和组件生命周期函数

  typescript:
    是一种强制类型的JS语言
    要求变量/常量/属性在使用时,必须声明类型,且声明类型后的变量,不能赋值其他类型的数据

  工厂函数组件:
    本身具备props属性,通过参数传递进来
    
*/
// 工厂函数组件模式
export default function App() {
  return (
    <div className="container">
      <Search />
      <UserList />
    </div>
  );
}
