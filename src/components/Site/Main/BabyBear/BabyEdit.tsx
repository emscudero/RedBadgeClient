import * as React from 'react';
import { Component } from 'react';
import { 
    Button, 
    Form, 
    Label, 
    Input,
    InputGroup,
    InputGroupAddon, Modal, 
    ModalBody, 
    ModalHeader
} from 'reactstrap';

type BabyVariables = {
   brand: string,
    title: string,
    quantity: string,
    price: string,
    store: string, 
    photo: string,
    loading: boolean, 
    modal: boolean
}

interface BabyProps  {
token: string,
babylist: any,
fetchBabyList: Function
}


class BabyEdit extends Component<BabyProps, BabyVariables> {
    constructor(props: BabyProps) {
        super(props);
        this.state = { 
           brand: "",
            title: "",
            quantity: "",
            price: "", 
            store: "",
            photo: "",
            modal: true,
            loading: false
         }
          // this.handleSubmit = this.handleSubmit.bind(this);
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


  toggle = () => {
  this.setState({modal: !this.state.modal})
}

handleSubmit = (e:React.FormEvent) => {
  console.log(this.props.babylist);
  let token = this.props.token ? this.props.token : localStorage.getItem("token");
         e.preventDefault();
    fetch(`http://localhost:3000/babylist/update/${this.props.babylist.id}`, {
      
      method: "PUT",
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
        "Authorization": token ? token : ""
      }),
    })
    .then((res) => res.json())
      .then((babyListEntry) => {
   this.setState({brand: '', title: '', quantity: '', price: '', store: '', photo: ''});
    this.toggle();
    this.props.fetchBabyList();
        console.log(babyListEntry);
      })
    };


    render() { 
      console.log(this.props.babylist.id);
        return (
         <div>
  <Button className="inactive" onClick={this.toggle}>Edit Item</Button> 
<Modal isOpen={!this.state.modal} toggle={this.toggle}>
  
        <ModalHeader toggle={this.toggle}>Update Item</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit} > 

      <div className="label">
        <Label htmlFor="label">Brand</Label>
        <br></br>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple onChange={(e) => this.setState({brand: e.target.value})}>
          <option>Johnson & Johnson</option>
          <option>Delta</option>
          <option>Ikea</option>
          <option>Pottery Barn</option>
          <option>Crate & Barrel</option>
           <option>Chicco</option>
            <option>Graco</option>
             <option>Evenflo</option>
              <option>Costco</option>
            <option>Fisher Price</option>
          <option>Pampers</option>
          <option>Huggies</option>
           <option>Honest</option>
           <option>Burts Bees</option>
           <option>Tommy Tippee</option>
           <option>Dr.Brown</option>
           <option>Philips Avent</option>
           <option>Munchkin</option>
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
        <Input type="select" name="select" id="store" onChange={(e) => this.setState({store: e.target.value})}>
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
          onChange={this.uploadImage}
        />
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={this.state.photo} alt="" style={{width: "100px"}} />
        )}
      </div>
      
     
      <br />
      <br />
    
    
      <Button type="submit">Submit</Button>
      </Form> 
       
            </ModalBody>
        </Modal>

           </div>
            
          );
    }
}
 
export default BabyEdit;