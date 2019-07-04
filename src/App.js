import React, { Component } from "react";

import ListAdd from "./ListAdd";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "ricardo" }, { name: "alefe" }]
    };

    this.childHandler = this.childHandler.bind(this);
  }

  componentDidMount() {
    const list = localStorage.getItem("list");

    this.setState({ list: JSON.parse(list) });
  }

  childHandler(data) {
    this.setState(state => {
      const list = [...state.list, data];

      localStorage.setItem("list", JSON.stringify(list));

      return { list };
    });
  }

  render() {
    return (
      <>
        <List list={this.state.list} />
        <ListAdd list={this.state.list} childHandler={this.childHandler} />
      </>
    );
  }
}

export default App;
