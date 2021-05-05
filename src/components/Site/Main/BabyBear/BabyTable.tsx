import React, { Component} from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";
 

type babyVariables = {
    brand: string,
    title: string,
    quantity: string,
    price: string,
    store: string, 
    photo: string,
   
}



interface BabyProps  {
token: string,



}



class BabyTable extends Component<BabyProps, babyVariables > {
    constructor(props: BabyProps) {
        super(props);
        this.state = { 
          brand: "",
            title: "",
            quantity: "",
            price: "", 
            store: "",
            photo: "", }
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
        .then((babyList) => {
           this.setState({brand: ''});
      this.setState({title: ''});
      this.setState({quantity: ''});
     this.setState({price: ''});
     this.setState({store: ''});
     this.setState({photo: ''});
            console.log(babyList)
        })
    }

    render() { 
        return ( 
<div>

    <h1 id="table">Your Products </h1>
           <Card  >
        <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/81bfst2%2B2SL._SL1500_.jpg" alt="Card image cap"  />
        <CardBody className= "card-body">
          <CardTitle tag="h5">Title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Brand</CardSubtitle>
          <CardText>Price Store</CardText>
          <Button> 
          <Link to="/babyadd" className="inactive" id="add-button">
             Add
            </Link>
            </Button>
            
             <Button>
            <Link to="/babyedit" className="inactive" id="edit-button">
            Edit
            </Link>
            </Button>

          <Button>
            <Link to="/babydelete" className="inactive" id="delete-button">
           Delete
            </Link>
            </Button>

        </CardBody>
      </Card>
        

    </div>
  );
}
}
    
 
export default BabyTable;