import React, { Component} from "react";
import { Link } from "react-router-dom";
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";
  import MamaAdd from "./MamaAdd";



interface MamaProps  {
token: string


}

interface MamaState {

}

class MamaTable extends Component <MamaProps, MamaState>{
    constructor(props: MamaProps) {
        super(props);
        this.state = {  }
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
        .then((mamaList) => {
            this.setState({mamaList: ""});
            console.log(this.props.token)
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
          <Link to="/mamaadd" className="inactive" id="add-button">
             Add
            </Link>
            </Button>
            
             <Button>
            <Link to="/mamaedit" className="inactive" id="edit-button">
            Edit
            </Link>
            </Button>

          <Button>
            <Link to="/mamadelete" className="inactive" id="delete-button">
           Delete
            </Link>
            </Button>

        </CardBody>
      </Card>
    </div>

        );
    }
}
 
export default MamaTable;