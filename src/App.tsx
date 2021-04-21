import { render } from '@testing-library/react';
import React, {Component} from 'react';
//import { Route } from "react-router-dom";
import './App.css';

import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";

type AppVariables = {
  sessionToken: string
}

class App extends Component<{}, AppVariables> {
  constructor(props: {}) {
    super(props);
    this.state = {sessionToken: ""};
  }
   updateToken(newToken: "") {
    localStorage.this.setState("token", newToken);
    this.setState({sessionToken: newToken});
    console.log(newToken);
  };
  }


  render() {

  
  return (
    <div>
      <Login />
      <SignUp />
      Hello !
    </div>
  );
}

export default App;
