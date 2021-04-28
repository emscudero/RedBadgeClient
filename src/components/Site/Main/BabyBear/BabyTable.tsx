import React, { Component} from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";




interface BabyProps  {
token: string,


}

interface BabyState {

}




class BabyTable extends Component<BabyProps, BabyState > {
    constructor(props: BabyProps) {
        super(props);
        this.state = {  }
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
            this.setState({babyList: ""});
            console.log(this.props.token)
        })
    }



    render() { 
        return ( 
<div>
           <Card >
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Title of Product</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Brand</CardSubtitle>
          <CardText>Price Store</CardText>
          <Button>Add</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardBody>
      </Card>
        

    </div>
  );
}
}
    
 
export default BabyTable;