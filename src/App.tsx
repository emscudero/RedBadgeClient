import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Header from "./components/Site/Header";
import Footer from "./components/Site/Footer";
import Auth from "./components/Auth/Auth";
import Home from "./components/Site/Main/Home";
import AboutUs from "./components/Site/Main/AboutUs";



type AppVariables = {
  sessionToken: string

}

interface AppProps{

  
}

class App extends Component<AppProps, AppVariables> {
  constructor(props: AppProps) {
    super(props);
    this.state = {sessionToken: ""};
  }
   updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({sessionToken: newToken});
    //console.log(this.state.sessionToken);
  };

  
  
  logout = () => {
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
        <Header updateToken = {this.updateToken} logout={this.logout} token={this.state.sessionToken} />

      {/*{this.protectedViews()}
      {/*<Route exact path='/'>
      {Admin = true ? <Redirect to="/home" /> : <home />
    ) : (
      <Redirect to ="/login" /> : <login />
    )} 


    </Route>*/}
     </Router>
    </div>
  );
}
}



{/*{!Auth ? (
  component home / about us
) : (
everything else
)
}  */}
export default App;
