import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const axios = require('axios');

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        //this.handleChange=this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

    }

    handleSignUp(event) {
        //alert("Username: " + this.username.value + "Password: " + this.password.value);
        fetch('https://localhost:3000/users', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                numbers: [1,2,3],
                user: 'nikos',

            }
        }).then(response => response.json()).then(data => {
            window.alert(data)
            //Do anything else like Toast etc.
        })

        event.preventDefault();
    }

    handleChange(params) {
        this.setState({
            [params.target.name]: params.target.value
        })
    }

    render() {
        return (
            <div className="col-sm-4 offset-4">
                <Form onSubmit={this.handleSignUp} style={{ borderStyle: "ridge", marginTop: "50%", padding: 50 }}>
                    <FormGroup>
                        <Label htmlFor="username"><span className="fa fa-user fa-lg"> Username</span></Label>
                        <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password"><span className="fa fa-key fa-lg"> Password</span></Label>
                        <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Sign Up</Button>
                </Form>
            </div>
        )
    }
}

export default SignUp;