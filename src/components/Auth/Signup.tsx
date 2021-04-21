import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/create", {
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.updateToken(data.sessionToken);
        props.toggle();
      });
  };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => this.setState(e.target.value)}
              type="email"
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
          <Button type="submit">Signup</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
