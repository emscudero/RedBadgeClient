import * as React from 'react';
import { Component } from 'react';

type MamaVariables = {
    brand: string,
    title: string,
    quantity: string,
    price: string,
    store: string,
    photo: string,
    loading: boolean,
     modal: boolean
}



interface MamaProps  {
token: string

}


class MamaDelete extends Component <MamaProps, MamaVariables> {
    constructor(props: MamaProps) {
        super(props);
        this.state = {
            brand: "",
            title: "",
            quantity: "",
            price: "", 
            store: "",
            photo: "",
            loading: false,
            modal: false
          }
        }
    /*deleteValuable = () => {
        fetch("http://localhost:3000/babylist/delete"), {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
        .then(() => this.props.fetchBabyList())  */
  


    render(){


        return(
            <div></div>
        )
    }
     };

     export default MamaDelete;