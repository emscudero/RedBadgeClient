import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import APIURL from "../../helpers/environment"

type SignUpVariables = {
  email: string,
  password:  string,
  role: string
}

type SignUpProps = {
updateToken: (newToken: string) => void
}

class Signup extends Component<SignUpProps, SignUpVariables> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = { email: "", password: "", role: "" };
  }

  handleSubmit = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/create", {
      method: "POST",
      body: JSON.stringify({ user: { email: this.state.email, password: this.state.password, role: this.state.role } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
    console.log(data);
        this.props.updateToken(data.sessionToken);
      
      });
  };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => this.setState({email: e.target.value})}
              type="email"
              name="email"
              value={this.state.email}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => this.setState({password: e.target.value})}
              name="password"
              value={this.state.password}
              type="password"
              required
            />
          </FormGroup>
           <FormGroup>
            <Label htmlFor="role">Role</Label>
            <Input
              onChange={(e) => this.setState({role: e.target.value})}
              name="role"
              value={this.state.role}
              required
            />
          </FormGroup>
          <Button type="submit">Signup</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
