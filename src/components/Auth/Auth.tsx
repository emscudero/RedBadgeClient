import React, { Component } from "react";
import { Card, CardText, CardBody,  Button,
  CardTitle, CardSubtitle} from "reactstrap";
import SignUp from "./Signup";
import Login from "./Login";

type AuthVariables = {
  showLogin: boolean,
  buttonText: string
}

type AuthProps = {
updateToken: (newToken: string) => void
}



class Auth extends Component<AuthProps, AuthVariables> {
constructor(props: AuthProps) {
super(props)
this.state= {showLogin: true, buttonText: "Already a User?" };}


  handleClick= () => {
    if (this.state.showLogin === true) {
     this.setState({showLogin: false});
      this.setState({buttonText: "New User?"});
    } else {
      this.setState ({showLogin: true});
      this.setState({buttonText: "Sign In"});
    }
  }

  
  render() {

  return (
    <div> 
   
</div>
  )
};
}
export default Auth;