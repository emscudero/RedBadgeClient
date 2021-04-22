import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, InputGroup,  InputGroupAddon } from "reactstrap";


type babyVariables = {
    brand: string,
    title: string,
    price: number,
    store: string

}


class BabyAdd extends Component <{}, babyVariables> {
    constructor(props: {}) {
        super(props);
        this.state = {
            brand: "",
            title: "",
            price: [],
            store: ""
          }
        }

handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/babylist/create", {
      method: "POST",
      body: JSON.stringify({
        babylist: {
          brand:this.state.brand,
         title:this.state.title,
         price:this.state.price,
         store:this.state.store,
    
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((babyList) => {
       // toggle();
    this.setState({brand: ''});
      this.setState({title: ''});
     this.setState({price: []});
     this.setState({store: ''});
    
        console.log(babyList);
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

          <Label for="title">Title</Label>
        <Input type="textarea" name="title" id="title" placeholder="Title of Item" />
      </FormGroup>

      <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input
            placeholder="Price"
            min={0}
            max={1000000}
            type="number"
            step="1"
            value={this.state.price}
            onChange={(e) => this.setState{...price}(e.target.value)}
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
    

      {/*<FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
        </FormGroup>*/}
    
      <Button>Submit {this.handleSubmit}</Button>
    </Form>
            </div>





        );
    }
}
 
export default BabyAdd;