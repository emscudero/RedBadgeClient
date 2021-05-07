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

        deleteItem = (e:React.FormEvent) => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
        fetch(`http://localhost:3000/mamalist/delete/${this.props.babylist.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": token ? token : ""
                
            }
            )
       
    
    }
        )
        .then(() => this.props.fetchBabyList());
}


    render(){


        return(
            <div>
                 <Button outline color="danger" onClick={this.deleteItem}>Delete</Button>
            </div>
        )
    }
     };

     export default BabyDelete;
