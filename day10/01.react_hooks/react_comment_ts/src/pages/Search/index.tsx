import { useState, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setLoading, getUsers } from "../../store/action";

// 定义props的类型
interface Props {
  // 定义函数类型有两种方式 (普通函数类型和箭头函数类型)
  /* 
    此处的setLoading和getUsers是包装了dispatch的方法,和action模块中的setLoading和getUsers不一样
  */
  setLoading(loading: boolean): void;
  getUsers: (searchName: string) => void;
}

function Search(props: Props) {
  // 使用useState方法管理state数据 (使用时,指定泛型具体类型,指定初始值)
  const [searchName, setSearchName] = useState<string>("");

  // 接收两个更新数据的方法 (包含dispatch的action方法)
  const { setLoading, getUsers } = props;

  // react中的事件是合成事件,事件对象也是react重新封装的对象
  const handlerChange = (event: ChangeEvent) => {
    // 通过setSearchName将数据收集到state中
    // 若需要调用value方法,则需要先进行断言 xx as 类型
    setSearchName((event.target as HTMLInputElement).value.trim());
  };

  // 定义点击回调函数,发送请求
  const search: () => void = async () => {
    // (1) 判断当前state是否有数据,没有数据则return
    if (!searchName) {
      alert("请输入查询内容");
      return;
    }
    // 设置loading状态
    setLoading(true);
    // 发送请求
    await getUsers(searchName);
    // 设置loading状态
    setLoading(false);
  };

  return (
    <div>
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={handlerChange}
          />
          <button onClick={search}>Search</button>
        </div>
      </section>
    </div>
  );
}

// 不需要传入state数据
const mapStateToProps = null;
// 需要传入两个更新state数据的方法 (以对象形式传递)
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // 同步action,返回值是action对象, 传入dispatch函数中调用,触发更新
    setLoading: (loading: boolean) => dispatch(setLoading(loading)),
    // 异步action,返回是函数,并将dispatch作为参数传递进去,在内部进行dispatch调用
    getUsers: (searchName: string) => getUsers(searchName)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
