import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform/dist/index";

export default class Sorteador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sorteados: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data, { resetForm }) {
        const list = this.props.listactive.users;
        if(data.qty <= list.length){
            this.setState({sorteados: list.sort(function() {return Math.random() - 0.5}).slice(0,data.qty)})
        }
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Input name="qty" type="number"/>
                    <button>Add</button>
                </Form>
                <ul>
                    {(this.state.sorteados.length !== 0) ? this.state.sorteados.map((user, index) => (
                        <li key={index}>{user}</li>
                    )) : ''}
                </ul>
            </>
        );
    }
}
