import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

import '../resources/css/register.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            date:"",
            firstName:"",
            lastName:""

        }
    }

    registerUser = async () => {
        try {
            console.log(this.state);
            const response = await axios.get('/test');
            this.setState({ response: response.data });

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>

                <Form className="registerForm">
                    <h1>Register</h1>
                    <Form.Label>{this.props.info.register[0].name}</Form.Label>
                    <Form.Control
                        value={this.state.username}
                        onChange={event => this.setState({ username: event.target.value })}
                        type="username"
                        placeholder={this.props.info.register[0].placeholder} />
                    <Form.Label>{this.props.info.register[1].name}</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={event => this.setState({ password: event.target.value })}
                        placeholder={this.props.info.register[1].placeholder} />
                    <Form.Label>{this.props.info.register[2].name}</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={event => this.setState({ email: event.target.value })}
                        placeholder={this.props.info.register[2].placeholder} />
                    <Form.Label>{this.props.info.register[3].name}</Form.Label>
                    <Form.Control
                        type="date"
                        onChange={event => this.setState({ date: event.target.value })}
                        placeholder={this.props.info.register[3].placeholder} />
                    <Form.Label>{this.props.info.register[4].name}</Form.Label>
                    <Form.Control
                        type="name"
                        onChange={event => this.setState({ firstName: event.target.value })}
                        placeholder={this.props.info.register[4].placeholder} />
                    <Form.Label>{this.props.info.register[5].name}</Form.Label>
                    <Form.Control
                        type="name"
                        onChange={event => this.setState({ lastName: event.target.value })}
                        placeholder={this.props.info.register[5].placeholder} />
                    <Button onClick={() => this.registerUser()} variant="primary">Register</Button>
                </Form>
            </div >
        );
    };
}
export default Home