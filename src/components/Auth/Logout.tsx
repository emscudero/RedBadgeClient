import * as React from 'react';
import { Component } from 'react';




type UserVariables = {
  email: string,
  password:  string,
  role: string
}

type LoginProps = {
updateToken: (newToken: string) => void,
token: string
}

class Logout extends Component<LoginProps, UserVariables> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { email: "", password: "", role: ""};
  }



render (){
    return(
        <div></div>
    )
}
}

export default Logout;