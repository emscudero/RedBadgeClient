import * as React from 'react';
import { Component } from 'react';
import { 
    Button, 
    Form,
    FormText,
    FormGroup, 
    Label, 
    Input,
    InputGroup,
    InputGroupAddon,
    Modal, 
    ModalBody, 
    ModalHeader
} from 'reactstrap';

type MamaVariables = {
   brand: string,
    title: string,
    quantity: string,
    price: string,
    store: string, 
    photo: string,
    loading: boolean
}

interface MamaProps  {
token: string
}


class MamaEdit extends Component<MamaProps, MamaVariables> {
    constructor(props: MamaProps) {
        super(props);
        this.state = { 
           brand: "",
            title: "",
            quantity: "",
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
    fetch("http://localhost:3000/babylist/update/:id", {
      method: "PUT",
      body: JSON.stringify({
        mamalist: {
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
   this.setState({brand: '', title: '', quantity: '', price: '', store: '', photo: ''});
    
        console.log(mamaList);
      })
    };


    render() { 
        return (
            <div>

<Modal isOpen={true}>

            <ModalHeader>Update Item</ModalHeader>

            <ModalBody>
                <Form onSubmit={this.handleSubmit}>

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
        </Form>
            </ModalBody>
        </Modal>

           </div>
            
          );
    }
}
 
export default MamaEdit;