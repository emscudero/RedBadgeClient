import React, { Component} from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";
   import { Redirect } from "react-router-dom";
   import BabyEdit from "./BabyEdit";
   import BabyDelete from "./BabyDelete";
   import BabyAdd from "./BabyAdd";
 




interface BabyProps  {
token: string,

}

type babyVariables = {
  babylist: [],
  list: [], 
  role: string
    
}

class BabyTable extends Component<BabyProps, babyVariables > {
    constructor(props: BabyProps) {
        super(props);
        this.state = {
          babylist: [],
          list: [], 
          role: ''
        }
    }


     componentDidMount() {
        let role = localStorage.getItem("role")
      if(role){
        this.setState({role: role})
      }
      this.fetchBabyList();
    }

fetchBabyList = () => {
  let localToken = localStorage.getItem("token")
      localToken = localToken ? localToken: ""

  fetch("http://localhost:3000/babylist/", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": this.props.token ? this.props.token : localToken
            })
        })
        .then((res) => res.json())
        .then((babyListEntry) => {
          console.log(babyListEntry)
           this.setState({
             babylist: babyListEntry
            
           });
            
        })
    }

    render() { 
        return ( 
<div>

    <h1 id="table">Your Products </h1>
    {/* {((this.fetchBabyList === undefined) || this.fetchBabyList.length == 0 )? <Redirect to ="BabyAdd"/> : this.fetchBabyList} */}
         { this.state.babylist.map((babylist: any) => ( <Card  >
        <CardImg top width="100%" src={babylist.photo} alt="Picture of Product"  />
        <CardBody className= "card-body">
          <CardTitle tag="h5">Brand: {babylist.brand}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">Name of item: {babylist.title}</CardSubtitle>
          <CardText>Store: {babylist.store} </CardText>
            <CardText>Quantity: {babylist.quantity} </CardText>
              <CardText>${babylist.price}</CardText>
         
           
            {/*<Button onClick={this.fetchBabyList}>Fetch Results</Button>*/}
       <BabyAdd token={this.props.token} babylist={babylist} fetchBabyList={this.fetchBabyList} />
            
            <BabyEdit token={this.props.token} babylist={babylist} fetchBabyList={this.fetchBabyList} />

          {this.state.role == "admin" ?  <BabyDelete token={this.props.token} babylist={babylist} fetchBabyList={this.fetchBabyList} /> : null}

        </CardBody>
      </Card>
    ))}

    </div>
  );
}
}
    
 
export default BabyTable;