import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

type UserVariables = {
  email: string,
  password:  string
}


class Login extends Component<{}, UserVariables> {
  constructor(props: {}) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({ user: { email: this.state.email, password: this.state.password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
        this.props.toggle();
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => this.setState(e.target.value)}
              name="email"
              value={email}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => this.setState(e.target.value)}
              name="password"
              value={password}
              type="password"
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
