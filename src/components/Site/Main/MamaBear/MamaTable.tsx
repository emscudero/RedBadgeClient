import React, { Component} from "react";
import { Link } from "react-router-dom";
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
ModalBody, Modal, ModalHeader, Row, Container, Col} from "reactstrap";
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
role: string,
 modal: boolean
}

class MamaTable extends Component <MamaProps, mamaVariables>{
    constructor(props: MamaProps) {
        super(props);
        this.state = { 
          mamalist: [],
          list: [],
          role: "",
            modal: true
         }
    }

    componentDidMount(){
      let role = localStorage.getItem("role")
      if(role){
        this.setState({role: role})
      }
      this.fetchMamaList();
    }


    toggle = () => {
  this.setState({modal: !this.state.modal})
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

   <h1 id="table">Your Mama Products </h1>

<Card className="add-card"> 
 
        <CardBody>
          <CardTitle tag="h5">Requirements</CardTitle>
          
          <CardText>You will need the brand, title, price, the name of the store you plan to buy it from, a picture of your item, and an idea of how many you plan to buy.</CardText>
       <MamaAdd token={this.props.token} mamalist={this.state.mamalist} fetchMamaList={this.fetchMamaList} />
        </CardBody>
        
      </Card>


<Container fluid>
<Row xs="3">

  {/*} {((this.fetchMamaList === undefined) || this.fetchMamaList.length == 0 )? <Redirect to ="MamaAdd"/> : (this.fetchMamaList) && <Redirect to ="/MamaTable"/>}*/}
    {this.state.mamalist.map((mamalist: any) => (
      <Col>
           <Card  >
             {/* {mamalist.id} */}
        <CardImg  top width="50%" src={mamalist.photo} alt=""  />
        <CardBody className= "card-body">
           <CardTitle tag="h5"> Name of item: {mamalist.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Brand: {mamalist.brand}</CardSubtitle>
          <CardText>Store: {mamalist.store} </CardText>
            <CardText >Quantity: {mamalist.quantity} </CardText>
              <CardText>${mamalist.price}</CardText>
         
            
           {/* <MamaAdd token={this.props.token} mamalist={mamalist} fetchMamaList={this.fetchMamaList} /> */}
           
    <MamaEdit token={this.props.token} mamalist={mamalist} fetchMamaList={this.fetchMamaList} />
        
          {this.state.role == "admin" ?  <MamaDelete token={this.props.token} mamalist={mamalist} fetchMamaList={this.fetchMamaList} /> : null}
        

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
 
export default MamaTable;