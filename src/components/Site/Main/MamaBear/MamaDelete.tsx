import * as React from 'react';
import { Component } from 'react';
import {Button} from 'reactstrap';

type MamaVariables = {
  
}



interface MamaProps  {
token: string,
mamalist: any,
fetchMamaList: Function


}


class MamaDelete extends Component <MamaProps, MamaVariables> {
    
    constructor(props: MamaProps) {
        super(props);
        this.state = {
    
          }
        }
    deleteItem = (e:React.FormEvent) => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
        fetch(`http://localhost:3000/mamalist/delete/${this.props.mamalist.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": token ? token : ""
                
            }
            )
       
    
    }
        )
        .then(() => this.props.fetchMamaList());
}

    
    render(){


        return(
            <div>
                <Button outline color="danger" onClick={this.deleteItem}>Delete</Button>
            </div>
        )
        }
    }


     export default MamaDelete;