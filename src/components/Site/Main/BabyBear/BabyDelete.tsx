import * as React from 'react';
import { Component } from 'react';


type babyVariables = {
  babyList: []

    
}


interface BabyProps  {
token: string
}


class BabyDelete extends Component <BabyProps, babyVariables> {
    constructor(props: BabyProps) {
        super(props);
        this.state = {
          babyList: []
          }
        }

    fetchBabyList = () => {
  let localToken = localStorage.getItem("token")
      localToken = localToken ? localToken: ""

        fetch("http://localhost:3000/babylist/delete"), {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token ? this.props.token : localToken
            })
        }
        .then((res) => res.json())
      .then((babyListEntry) => {
   this.setState({
       babyList: babyListEntry});
    
      })
    };

    render(){


        return(
            <div></div>
        )
    }
     };

     export default BabyDelete;
