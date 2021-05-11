import * as React from 'react';
import { Component } from 'react';
import {Button} from 'reactstrap';



type babyVariables = {
 

    
}


interface BabyProps  {
token: string,
babylist: any,
fetchBabyList: Function
}


class BabyDelete extends Component <BabyProps, babyVariables> {
    constructor(props: BabyProps) {
        super(props);
        this.state = {
          
          }
        }

        deleteItem = () => {

fetch(`http://localhost:3000/babylist/delete/${this.props.babylist.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.props.fetchBabyList()

      });
  }





        //     console.log("I'm being clicked");
        //      console.log(this.props.babylist.id);
        // let token = this.props.token ? this.props.token : localStorage.getItem("token");
        // fetch(`http://localhost:3000/mamalist/delete/${this.props.babylist.id}`, {
        //     method: "DELETE",
        //     headers: new Headers({
        //         "Content-Type": "application/json",
        //         "Authorization": token ? token : ""
                
        //     }
        //     )
       
    
    // }
    //     )
    //     .then((res) => res.json())
    //     .then(() => this.props.fetchBabyList());



    render(){


        return(
            <div>
                 <Button className="button" id= "delete-button" type="submit"  onClick={this.deleteItem}>Delete Item</Button>
            </div>
        )
    }   
  }

     export default BabyDelete;
