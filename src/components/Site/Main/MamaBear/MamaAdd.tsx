import React, {Component} from 'react';
import { Form, FormGroup, FormText, Label, Input, Button, InputGroup,  Modal, 
    ModalBody, 
    ModalHeader, InputGroupAddon
 } from "reactstrap";
  import { Link } from "react-router-dom";


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
token: string,
mamalist: any,
fetchMamaList: Function

}



class MamaAdd extends Component <MamaProps, MamaVariables> {
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
            modal: true

          }
           this.handleSubmit = this.handleSubmit.bind(this);
        }


uploadImage = async (e:React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>)  => {
  const target = (e.target as HTMLInputElement);
    const files: File = (target.files as FileList) [0];
    const data = new FormData()
    data.append('file', files)
    data.append('upload_preset', 'productscloud')
    this.setState({loading: true})
    const res = await fetch(
    'https://api.cloudinary.com/v1_1/dqaf1fih0/image/upload',
    {
      method: 'POST',
      body: data
    }
  )
  
  const file = await res.json()
  
  this.setState({photo: file.secure_url})
  console.log(file.secure_url)
  this.setState({loading : false})
  
  }

//  reload = () => window.location.reload();
// toggle = () => {
//     if (this.state.modal) {
//       this.setState({brand: ''})
//     }
//     this.setState({modal: false})
//     }

toggle = () => {
  this.setState({modal: !this.state.modal})
}


handleSubmit = (e:React.FormEvent) => {
  let token = this.props.token ? this.props.token : localStorage.getItem("token");
    e.preventDefault();
    fetch("http://localhost:3000/mamalist/create", {
      method: "POST",
      body: JSON.stringify({
        mamalist: {
          brand:this.state.brand,
         title:this.state.title,
         quantity:this.state.quantity,
         price:this.state.price,
         store:this.state.store,
          photo:this.state.photo,
    
        },
        
      }),
    
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": token ? token : ""
      }),
    })
      .then((res) => res.json())
      .then((mamaListEntry) => {
    this.setState({brand: '', title: '', quantity: '', price: '', store: '', photo: ''});
    this.toggle();
    this.props.fetchMamaList();
        console.log(mamaListEntry);
        
      })
    };


    render() { 
        return ( 

<div>




<Button className="button" onClick={this.toggle}>Add Item</Button> 
<Modal isOpen={!this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
            <ModalBody>
    <Form onSubmit={this.handleSubmit} >
     
      <div className="label">
        <Label htmlFor="label">Brand</Label>
        <br></br>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple onChange={(e) => this.setState({brand: e.target.value})}>
         <option>Johnson & Johnson</option>
          <option>Burts Bees</option>
          <option>Medela</option>
          <option>Spectra</option>
          <option>Honest</option>
          <option>Evenflo</option>
           <option>Chicco</option>
            <option>Graco</option>
              <option>Costco</option>
              <option>Delta</option>
              <option>Ikea</option>
            <option>Destination Maternity</option>
          <option>A Pea in the Pod </option>
          <option>Amazon</option>
            <option>Other</option>
        </Input>
      </div>
     
      <div className="label">
        <Label htmlFor="label">Title</Label>
  
        <Input
          type="text"
          name="label"
          placeholder="Title of Item"
          onChange={(e) => this.setState({title: e.target.value})}
        />
      </div>
<br></br>
      <div className="label">
         <Label htmlFor="label">Store</Label>
        <Input type="select" name="select" id="store" multiple onChange={(e) => this.setState({store: e.target.value})}>
          <option >Target</option>
          <option >Walmart</option>
          <option >Amazon</option>
          <option >Buy Buy Baby</option>
          <option >Other</option>
        </Input>
      </div>
       <br></br>
      <div className="label">
        <Label  htmlFor="label">Quantity</Label>
        <br></br>
        <Input
          type="text"
          name="label"
          onChange={(e) => this.setState({quantity: e.target.value})}
        />
        </div>
        <br></br>
         <div className="label">
        <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input
            placeholder="Price"
            min={0}
            max={1000000}
            step="1"
            value={this.state.price}
            onChange={(e) => this.setState({price: e.target.value})}
          />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>
      </div>
      <br></br>
      
      <br></br>
       <div className="label">
        <Label htmlFor="about">Product Photo</Label>
        <br></br>
        <Input
          type="file"
          name="label"
          placeholder="image"
          onChange={this.uploadImage}
        />
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={this.state.photo} alt="" style={{width: "100px"}} />
        )}
      </div>
      <br></br>
   
        <Button className="button"> Create</Button>
      
    </Form>
    </ModalBody>
    </Modal>
 

    </div>


         );
    }

}

export default MamaAdd;