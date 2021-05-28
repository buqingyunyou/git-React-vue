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
