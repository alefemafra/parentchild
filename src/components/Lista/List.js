import React, { Component } from "react";

// import { Container } from './styles';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, data) => {
    this.props.activeList(data);
  }

  render() {
    return (
      <ul>
        {(this.props.list.length !== 0) ? this.props.list.map((item, index) => (
          <li key={index}>
            <span onClick={((e) => this.handleClick(e, item.lista))} >{item.lista}</span>
          </li>
        )) : ''}
      </ul>
    );
  }
}
