import React, { Component } from "react";

// import { Container } from './styles';

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
