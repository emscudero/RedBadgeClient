import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button,Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from "reactstrap";
//import APIURL from "../../helpers/environment"



type UserVariables = {
  email: string,
  password:  string,
  role: string
}

type LoginProps = {
updateToken: (newToken: string) => void,
token: string
}

class Login extends Component<LoginProps, UserVariables> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { email: "", password: "", role: ""};
  }

  handleSubmit = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password, this.state.role)

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({ user: { email: this.state.email, password: this.state.password, role: this.state.role } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
          {/*this.props.toggle();*/}
      
      });
  };

  render() {
    return (
      <div>
      
         
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email" className="label">Email</Label>
            <Input
              onChange={(e) => this.setState({email: e.target.value})}
              name="email"
              value={this.state.email}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" className="label">Password</Label>
            <Input
              onChange={(e) => this.setState({password: e.target.value})}
              name="password"
              value={this.state.password}
              type="password"
              required
            />
          </FormGroup>
          {/*<FormGroup>
            <Label htmlFor="role">Role</Label>
            <Input
              onChange={(e) => this.setState({role: e.target.value})}
              name="role"
              value={this.state.role}
              required
            />
          </FormGroup>*/}
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
