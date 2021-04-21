import React, { Component } from "react";
import { Button, Modal, ModalFooter, Form, ModalHeader } from "reactstrap";
import SignUp from "./Signup";
import Login from "./Login";

type AuthVariables = {
  modal: boolean,
  showLogin: boolean,
  buttonText: string
}

class Auth extends Component<{}, AuthVariables> {
constructor(props: {}) {
super(props)
this.state= { modal: true, showLogin: true, buttonText: "Already a User?" };}


  handleClick= () => {
    if (this.state.showLogin === true) {
     this.setState({showLogin: false});
      this.setState({buttonText: "New User?"});
    } else {
      this.setState ({showLogin: true});
      this.setState({buttonText: "Sign In"});
    }
  }

  onToggle () {
    this.state.modal
  }
 
  render() {

 

  return (
    <div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Modal isOpen={this.state.modal} >
          <ModalHeader = {ontoggle}>MamaBearsDen</ModalHeader>
          <div className="form-container">
            {showLogin == true ? (
              <Signup updateToken={this.props.updateToken} />
            ) : (
              <Login updateToken={this.props.updateToken} />
            )}

            <ModalFooter>
              <Button color="primary" onClick={handleClick}>
                {buttonText}
              </Button>{" "}
            </ModalFooter>
          </div>
        </Modal>
      </Form>
    </div>
  );
};
}

export default Auth;