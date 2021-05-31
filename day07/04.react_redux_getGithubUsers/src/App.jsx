
import { Component } from "react";
import Search from "./pages/Search";
import UserList from "./pages/UserList";

export default class App extends Component {

  render() {
    return (
      <div id="app">
        <div className="container">
          <Search />
          <UserList />
        </div>
      </div>
    );
  }
}
