import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

type SignUpVariables = {
  email: string,
  password:  string
}


class Signup extends Component<{}, SignUpVariables> {
  constructor(props: {}) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/create", {
      method: "POST",
      body: JSON.stringify({ user: { email: this.state.email, password: this.state.password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.props.updateToken(data.sessionToken);
        this.props.toggle();
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
              onChange={(e) => this.setState(e.target.value)}
              type="email"
              name="email"
              value={this.state.email}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => this.setState(e.target.value)}
              name="password"
              value={this.state.password}
              type="password"
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
