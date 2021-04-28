import React, {Component} from 'react';
import { Form, FormGroup, FormText, Label, Input, Button, InputGroup,  InputGroupAddon, Modal, ModalHeader,
  ModalBody,
  ModalFooter } from "reactstrap";
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
token: string

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
            modal: false

          }
        }


uploadImage = async (e:React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>)  => {
  const target = (e.target as HTMLInputElement);
    const files: File = (target.files as FileList) [0];
    const data = new FormData()
    data.append('file', files)
    data.append('upload_preset', 'thePicCloud')
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

reload = () => window.location.reload();
toggle = () => {
    if (this.state.modal) {
      this.setState({brand: ''})
    }
    this.setState({modal: false})
    }

/*componentDidMount(){*/
handleSubmit = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/mamalist/create", {
      method: "POST",
      body: JSON.stringify({
        babylist: {
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
        "Authorization": this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((mamaList) => {
    this.setState({brand: ''});
      this.setState({title: ''});
      this.setState({quantity: ''});
     this.setState({price: ''});
     this.setState({store: ''});
     this.setState({photo: ''});
    
        console.log(mamaList);
      })
    };






    render() { 
        return ( 

<div>

    <Form>

        <FormGroup>
        <Label for="exampleSelectMulti">Brand</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
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
      </FormGroup>

      <FormGroup>

          <Label for="title">Title</Label>
        <Input type="textarea" name="title" id="title" placeholder="Title of Item" />
      </FormGroup>

  <FormGroup>
        <Label for="exampleSelect">Quantity</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

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

<br/>
      <FormGroup>
        <Label for="store">Choose the Store</Label>
        <Input type="select" name="select" id="store">
          <option>Target</option>
          <option>Walmart</option>
          <option>Amazon</option>
          <option>Buy Buy Baby</option>
          <option>Other</option>
        </Input>
      </FormGroup>
    

         <FormGroup>
      <FormText color="secondary">
        <Label for="photoUrl">Photo of the Product</Label>
        <Input type="file" name="file" placeholder="upload an image" onChange={this.uploadImage} />
        <br />

        {this.state.loading ? (
          <h3> Loading...</h3>
        ) : (
        <img src={this.state.photo} style={{width: '300px'}} />
        )}
        </FormText>
      
        
      </FormGroup>
     
    
     <Button outline color="secondary">Submit</Button>
    </Form>



 <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Success!</ModalHeader>
        <ModalBody>
        {/* {'Your product has been logged'} */}

          {'The following product has been added:'}
          <br />
          <strong>
      {this.state.title}
          </strong>
          <br />
          {'What would you like to do next?'}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            <Link to="/mamatable" className="inactive">
              View my products
            </Link>
          </Button>
          <Button color="primary" onClick={this.reload}>
            Add Another
          </Button>
        </ModalFooter>
      </Modal>

    </div>


         );
    }

}

export default MamaAdd;