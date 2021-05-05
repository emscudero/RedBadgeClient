import React, {Component} from 'react';
import { Form, Label, Input, InputGroupAddon, Button, InputGroup} from "reactstrap";
  import { Link } from "react-router-dom";
import { isJSDocThisTag } from 'typescript';
import {  Redirect } from "react-router-dom";



type babyVariables = {
    brand: string,
    title: string,
    quantity: string,
    price: string,
    store: string, 
    photo: string,
    loading: boolean
}


interface BabyProps  {
token: string

}



class BabyAdd extends Component <BabyProps, babyVariables> {
    constructor(props: BabyProps) {
        super(props);
        this.state = {
            brand: "",
            title: "",
            quantity: "",
            price: "", 
            store: "",
            photo: "",
            loading: false,
          }
          this.handleSubmit = this.handleSubmit.bind(this);
        }

    uploadImage = async (e:React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>)  => {
    const target = (e.target as HTMLInputElement);
    const files: File = (target.files as FileList) [0];
    const data = new FormData()
    data.append('file', files)
    data.append('upload_preset', 'redbadge')
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



handleSubmit = (e:React.FormEvent) => {
  let token = this.props.token ? this.props.token : localStorage.getItem("token");
    e.preventDefault();
    fetch("http://localhost:3000/babylist/create", {
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
        "Authorization": token ? token : ""
      }),
    })
      .then((res) => res.json()) 
      .then((babyList) => {
    this.setState({brand: '', title: '', quantity: '', price: '', store: '', photo: ''});
      
        console.log(babyList);
      })
    };


   

    render() { 
      
        return (  

            <div>



<h1>Your Products</h1>
    <Form onSubmit={this.handleSubmit} className = "form">
     
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
      <br></br>
      <div className="submit">
        <Button type="submit">Create</Button>
      </div>
    </Form>




                
                 {/*<Form onSubmit={this.handleSubmit} className="form">
        <FormGroup>
        <Label className="label" for="exampleSelectMulti">Brand</Label>
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
      </FormGroup>

      <FormGroup>

          <Label className="label" for="title">Title of Product</Label>
        <Input type="textarea" name="title" id="title" placeholder="Title of Item" onChange={(e) => this.setState({title: e.target.value})}/>
      </FormGroup>

      <FormGroup>
        <Label className="label" for="exampleSelect">Quantity</Label>
        <Input type="select" name="select" id="exampleSelect" onChange={(e) => this.setState({quantity: e.target.value})}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>
      </FormGroup>

   {/*  <InputGroup>
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
   </InputGroup>*/}
<br/>
     {/*} <FormGroup>
        <Label className="label" for="store">Choose the Store </Label>
        <Input type="select" name="select" id="store" onChange={(e) => this.setState({store: e.target.value})}>
          <option value = "Target">Target</option>
          <option value = "Walmart">Walmart</option>
          <option value = "Amazon">Amazon</option>
          <option value = "Buy Buy Baby">Buy Buy Baby</option>
          <option value = "Other">Other</option>
        </Input>
      </FormGroup>

      <FormGroup>
      <FormText color="secondary">
        <Label className="label" for="photoUrl">Photo of the Product</Label>
        <Input type="file" name="file" placeholder="upload an image" onChange={this.uploadImage} />
        <br />

        {this.state.loading ? (
          <h3> Loading...</h3>
        ) : (
        <img src={this.state.photo} style={{width: '300px'}} />
        )}
        </FormText>
      
        
      </FormGroup>
    
    
    
     <Button type="submit" outline color="secondary">Submit</Button>
    </Form>
        */}
    </div>
           




        );
    }
}
 
export default BabyAdd;