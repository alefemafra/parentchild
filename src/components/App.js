import React, { Component } from "react";

import ListAdd from "./Lista/ListAdd";
import List from "./Lista/List";
import UserList from "./user/UserList";
import UserAdd from "./user/UserAdd";
import Sorteador from "./sorteador";
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
      listactive: {},
      users: ''
    };

    this.childHandler = this.childHandler.bind(this);
    this.addUser = this.addUser.bind(this);
    this.activeList = this.activeList.bind(this);
  }

  componentDidMount() {
    const list = localStorage.getItem("list");
    if(list != null){
      this.setState({ list: JSON.parse(list) });
    }
  }

  childHandler(data) {
    this.setState(state => {
      const list = [...state.list, data];
      if (localStorage.getItem(data.lista) == null){
        localStorage.setItem("list", JSON.stringify(list));
        data.users = [];
        localStorage.setItem(data.lista, JSON.stringify(data));
        return { list };
      }
    });
  }

  addUser(data){
    if (localStorage.getItem(this.state.listactive.lista) != null){
      this.state.listactive.users.push(data.user);
      localStorage.setItem(this.state.listactive.lista, JSON.stringify(this.state.listactive));
      this.setState({listactive: this.state.listactive});

    }
  }

  activeList(data){
    if (localStorage.getItem(data) != null){
      const list = localStorage.getItem(data);
      this.setState({listactive: JSON.parse(list)});
    }
  }

  render() {
    return (
        <div className="general">
          <div>
            <h3>Adicionar e selecionar lista</h3>
            <ListAdd list={this.state.list} childHandler={this.childHandler} />
            <List list={this.state.list} activeList={this.activeList} />
          </div>
          <div>
            <h3>Adicionar Usuarios | Ver lista de usuarios</h3>
            <UserAdd listactive={this.state.listactive} addUser={this.addUser} />
            <UserList listactive={this.state.listactive} />
          </div>
          <div>
            <h3>Sortear</h3>
            <Sorteador listactive={this.state.listactive} />
          </div>
        </div>
    );
  }
}