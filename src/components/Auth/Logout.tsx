import * as React from 'react';
import { Component } from 'react';
import {Redirect} from "react-router-dom";
import{Button} from "reactstrap";

type LogoutProps = {
token: string
}


class Logout extends Component<LogoutProps, {}> {
  state = {
    navigate: false
  
  }

logout = () => {
  //localStorage.clear("token");
  this.setState({ navigate: true});
}



render (){
  const { navigate } = this.state;

  if (navigate) {
    return <Redirect to ="/login" push={true} />;
  }

  return <Button onClick={this.logout}>Log Out</Button>
   
}
}

export default Logout;