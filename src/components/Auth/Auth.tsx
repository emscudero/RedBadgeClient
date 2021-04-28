import React, { Component } from "react";
import {Button, Modal, ModalHeader, ModalFooter, Form} from "reactstrap";
import SignUp from "./Signup";
import Login from "./Login";

type AuthVariables = {
  modal: boolean,
  showLogin: boolean,
  buttonText: string
}

type AuthProps = {
updateToken: (newToken: string) => void
}



class Auth extends Component<AuthProps, AuthVariables> {
constructor(props: AuthProps) {
super(props)
this.state= {modal: true, showLogin: true, buttonText: "Already a User?" };}


 handleToggle =() => {
   this.setState({ modal: !this.state.modal})
 }

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
           <Form onSubmit={(e) => e.preventDefault()}>
        <Modal isOpen={!this.state.modal} fade={false} toggle={this.handleToggle}>
          <ModalHeader toggle= {this.handleToggle}>Mama Bear's Den</ModalHeader>
          <div className="form-container">
           {this.state.showLogin == true ? (
              <SignUp updateToken={this.props.updateToken} toggle= {this.handleToggle}/>
            ) : (
              <Login updateToken={this.props.updateToken} toggle= {this.handleToggle}/>
 )}
            <ModalFooter>
              <Button color="info" onClick={this.handleClick}>
              </Button>{" "}
            </ModalFooter>
          </div>
        </Modal>
      </Form>
</div>
  )
};
}
export default Auth;