import React, {Component} from 'react';
import { Form, FormGroup, FormText, Label, Input, Button, InputGroup,  InputGroupAddon } from "reactstrap";


type MamaVariables = {
    brand: string,
    title: string,
    price: string,
    store: string,
    photo: string,
    loading: boolean
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
            price: "",
            store: "",
            photo: "",
            loading: false

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




handleSubmit = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/mamalist/create", {
      method: "POST",
      body: JSON.stringify({
        babylist: {
          brand:this.state.brand,
         title:this.state.title,
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


      <FormGroup>
        <Label for="store">Store</Label>
        <Input type="select" name="select" id="store">
          <option>Target</option>
          <option>Walmart</option>
          <option>Amazon</option>
          <option>Buy Buy Baby</option>
          <option>Other</option>
        </Input>
      </FormGroup>
    

      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
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
        <br/>
        <br/>
        <Button outline color="warning">Submit</Button>
      </FormGroup>
      <br />
      <br />
    
     <Button>Submit {this.handleSubmit}</Button>
    </Form>


    </div>


         );
    }

}

export default MamaAdd;