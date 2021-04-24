import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Header from "./components/Site/Header";
import Footer from "./components/Site/Footer";

import Auth from "./components/Auth/Auth";

type AppVariables = {
  sessionToken: string
}

class App extends Component<{}, AppVariables> {
  constructor(props: {}) {
    super(props);
    this.state = {sessionToken: ""};
  }
   updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({sessionToken: newToken});
    //console.log(this.state.sessionToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({
      sessionToken: ''
    })
  }

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("token")? (
      ""
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };
  

  render() {

  
  return (
    <div>
      <Router>
        {/*<Header logout={this.clearToken} token={this.state.sessionToken} />*/}
      {this.protectedViews()}
    
     </Router>
    </div>
  );
}
}

export default App;
