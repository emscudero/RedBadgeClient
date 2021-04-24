import React, { Component } from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import SignUp from "./Signup";
import Login from "./Login";

type AuthVariables = {
  showLogin: boolean,
  buttonText: string
}

type AuthProps = {
updateToken: (newToken: string) => void
}



 const toggle = () => this.setState ({modal: !modal})


class Auth extends Component<AuthProps, AuthVariables> {
constructor(props: AuthProps) {
super(props)
this.state= { showLogin: true, buttonText: "Already a User?" };}


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
 <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>SignUp</Button>
        </ModalFooter>
      </Modal>
    </div>
        
            {this.state.showLogin == true ? (
              <SignUp updateToken={this.props.updateToken} /*toggle= {this.toggle}*/ />
            ) : (
              <Login updateToken={this.props.updateToken} /*toggle= {this.toggle}*/ />
            )}


<Button onClick = {this.handleClick}>Click to Toggle 
</Button>
       </div>
  )
};
}
export default Auth;