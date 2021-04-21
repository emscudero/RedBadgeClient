import { render } from '@testing-library/react';
import React, {Component} from 'react';
//import { Route } from "react-router-dom";
import './App.css';

import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";



class App extends Component {


  render() {

  
  return (
    <div>
      <Login />
      <SignUp />
      Hello !
    </div>
  );
}
}

export default App;
