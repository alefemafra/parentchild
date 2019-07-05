import React, { Component } from "react";

// import { Container } from './styles';

export default class UserList extends Component {
  render() {
    return (
        <ul>

          {(this.props.listactive.hasOwnProperty('users')) ?
              (this.props.listactive.users.length !== 0) ? this.props.listactive.users.map((user, index) => (
                  <li key={index}>{user}</li>
              )) : ''
              : ''}
        </ul>
    );
  }
}
