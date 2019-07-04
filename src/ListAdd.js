import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";

export default class ListAdd extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data, { resetForm }) {
    this.props.childHandler(data);

    resetForm();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input name="name" />
        <button>Add</button>
      </Form>
    );
  }
}
