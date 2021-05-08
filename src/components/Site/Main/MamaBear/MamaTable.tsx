import React, { Component} from "react";
import { Link } from "react-router-dom";
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";
  import MamaDelete from "./MamaDelete";
  import { Redirect } from "react-router-dom";
  import MamaEdit from "./MamaEdit";
  import MamaAdd from "./MamaAdd";



interface MamaProps  {
token: string,




}

type mamaVariables = {
mamalist: [],
list: [],
role: string
}

class MamaTable extends Component <MamaProps, mamaVariables>{
    constructor(props: MamaProps) {
        super(props);
        this.state = { 
          mamalist: [],
          list: [],
          role: ""
         }
    }

    componentDidMount(){
      let role = localStorage.getItem("role")
      if(role){
        this.setState({role: role})
      }
      this.fetchMamaList();
    }

    fetchMamaList = () => {
      let localToken = localStorage.getItem("token")
      localToken = localToken ? localToken: ""
  fetch("http://localhost:3000/mamalist/", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": this.props.token ? this.props.token : localToken
            })
        })
        .then((res) => res.json())
        .then((mamaListEntry) => {
          console.log(mamaListEntry)
            this.setState({
              mamalist: mamaListEntry
            });
            
        })
    }




    render() { 
        return (  
<div>

   <h1 id="table">Your Products </h1>

  {/*} {((this.fetchMamaList === undefined) || this.fetchMamaList.length == 0 )? <Redirect to ="MamaAdd"/> : (this.fetchMamaList) && <Redirect to ="/MamaTable"/>}*/}
    {this.state.mamalist.map((mamalist: any) => (
      
           <Card  >
             {/* {mamalist.id} */}
        <CardImg top width="50%" src={mamalist.photo} alt="Picture of Product"  />
        <CardBody className= "card-body">
           <CardTitle tag="h5">Brand: {mamalist.brand}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">Name of item: {mamalist.title}</CardSubtitle>
          <CardText>Store: {mamalist.store} </CardText>
            <CardText>Quantity: {mamalist.quantity} </CardText>
              <CardText>${mamalist.price}</CardText>
         
            
           <MamaAdd token={this.props.token} mamalist={mamalist} fetchMamaList={this.fetchMamaList} />
           
    <MamaEdit token={this.props.token} mamalist={mamalist} fetchMamaList={this.fetchMamaList} />
        
          {this.state.role == "admin" ?  <MamaDelete token={this.props.token} mamalist={mamalist} fetchMamaList={this.fetchMamaList} /> : null}
        

        </CardBody>
      </Card>
      ))  }
    </div>


        );
    }
}
 
export default MamaTable;