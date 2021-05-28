import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    messages: [
      { id: 1, title: "message001", content: "message001的内容" },
      { id: 6, title: "message006", content: "message006的内容" },
      { id: 8, title: "message008", content: "message008的内容" },
    ],
  };

  render() {
    // 通过编程式导航,在push(路由路径,参数二),以参数二进行传递, 从location.state中获取数据
    console.log(this.props.location.state);
    // 通过在link路由路径加查询字符串,进行传参,从location.search中获取数据
    console.log(this.props.location.search);
    // 通过在link路由路径加路由参数,在Route组件path中使用:id方式定义,进行传参,从match.params中获取数据
    console.log(this.props.match.params);

    const { messages } = this.state;
    // 数组的find遍历查找,返回要查找的元素
    const mes = messages.find((message) => {
      // 路由组件都携带三个属性:history,location,match
      return message.id === +this.props.match.params.id;
    });
    return (
      <ul>
        <li>ID:{mes.id}</li>
        <li>TITLE:{mes.title}</li>
        <li>CONTENT:{mes.content}</li>
      </ul>
    );
  }
}
