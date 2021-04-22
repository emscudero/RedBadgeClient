import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import { Router } from "react-router-dom";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";

import Auth from "./components/Auth/Auth";

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

  clearToken = () => {
    localStorage.clear();
    this.setState({
      sessionToken: ''
    })
  }
  }

  render() {

  
  return (
    <div>
      <Router>
        <Header logout={clearToken} token={sessionToken} />
        {protectedViews()}
     <Auth updateToken={this.state.updateToken} />
     </Router>
    </div>
  );
}

export default App;
