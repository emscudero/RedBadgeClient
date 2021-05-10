import React, { Component} from "react";

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ModalBody, Modal, ModalHeader, Container, Row, Col} from "reactstrap";
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
  role: string,
  modal: boolean
    
}

class BabyTable extends Component<BabyProps, babyVariables > {
    constructor(props: BabyProps) {
        super(props);
        this.state = {
          babylist: [],
          list: [], 
          role: '',
           modal: true
        }
    }


     componentDidMount() {
        let role = localStorage.getItem("role")
      if(role){
        this.setState({role: role})
      }
      this.fetchBabyList();
    }

      toggle = () => {
  this.setState({modal: !this.state.modal})
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
<div >

    <h1 id="table">Your Baby Products </h1>
<Card className="add-card"> 
  <CardBody>
          <CardTitle tag="h5">Add Item Here!</CardTitle>
          
<Button className="button" onClick={this.toggle}>Add Item</Button> 
</CardBody>

<Modal isOpen={!this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
            <ModalBody></ModalBody>
           
        <CardBody>
          <CardTitle tag="h5">Requirements</CardTitle>
          
          <CardText>You will need the brand, title, price, the name of the store you plan to buy it from, a picture of your item, and an idea of how many you plan to buy.</CardText>
       <BabyAdd token={this.props.token} babylist={this.state.babylist} fetchBabyList={this.fetchBabyList} />
        </CardBody>
        </Modal>
    
      </Card>


<Container fluid>
<Row xs="3">
    {/* {((this.fetchBabyList === undefined) || this.fetchBabyList.length == 0 )? <Redirect to ="BabyAdd"/> : this.fetchBabyList} */}
         { this.state.babylist.map((babylist: any) => ( 
          
           <Col>
         <Card  >
        <CardImg top width= "50%" height= "50%" src={babylist.photo} alt=""  />
        <CardBody className= "card-body">
          <CardTitle tag="h5">Name of item: {babylist.title} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> Brand: {babylist.brand}</CardSubtitle>
          <CardText>Store: {babylist.store} </CardText>
            <CardText>Quantity: {babylist.quantity} </CardText>
              <CardText>${babylist.price}</CardText>
         
           
            {/*<Button onClick={this.fetchBabyList}>Fetch Results</Button>*/}
       {/* <BabyAdd token={this.props.token} babylist={babylist} fetchBabyList={this.fetchBabyList} /> */}
            
            <BabyEdit token={this.props.token} babylist={babylist} fetchBabyList={this.fetchBabyList} />

          {this.state.role == "admin" ?  <BabyDelete token={this.props.token} babylist={babylist} fetchBabyList={this.fetchBabyList} /> : null}

        </CardBody>
      </Card>
     </Col>
    ))}
     </Row>
      </Container>

    </div>
  );
}
}
    
 
export default BabyTable;