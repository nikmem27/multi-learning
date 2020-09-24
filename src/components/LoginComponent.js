import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        alert("Username: " + this.username.value + "Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <div className="col-sm-4 offset-4">
                <Form onSubmit={this.handleLogin} style={{ padding:50, borderStyle: "ridge", marginTop: "50%" }}>
                    <FormGroup>
                        <Label htmlFor="username"><span className="fa fa-user fa-lg"> Username</span></Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password"><span className="fa fa-key fa-lg"> Password</span></Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input} />
                  Remember me
                </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login;