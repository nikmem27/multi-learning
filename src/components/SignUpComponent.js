import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class SignUp extends Component{
    constructor(props){
        super(props);
    }

    render() {
        
        return(
            <div className="col-sm-4 offset-4">
                <Form onSubmit={this.handleLogin} style={{ borderStyle: "ridge", marginTop: "50%" }}>
                    <FormGroup>
                        <Label htmlFor="username"><span className="fas fa-user"> Username</span></Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password"><span className="fas fa-key"> Password</span></Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input} />
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Sign Up</Button>
                </Form>
            </div>
        )
    }
}

export default SignUp;