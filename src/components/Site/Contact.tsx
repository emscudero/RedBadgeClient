import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link } from "react-router-dom";
import { 
    Button, Form, FormGroup, Label, Input, FormText, Col, Row
} from 'reactstrap'


class ContactUs extends Component {

style = {width: "700px", border: "solid", color: "#582B11"}


render() {


        return (
<div className="contact_us">


<img src="https://res.cloudinary.com/dqaf1fih0/image/upload/v1620574031/contactuspic1_prkeqi.jpg " className= "contact_img" style = {this.style} />
           <Form className="form">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label className="contact_items" for="first_name">First Name</Label>
            <Input name="first_name" id="first_name" placeholder="First Name" />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label className= "contact_items" for="examplePassword">Last Name</Label>
            <Input name="last_name" id="last_name" placeholder="Last Name" />
          </FormGroup>
        </Col>
      </Row>
     
      <FormGroup>
        <Label className= "contact_items" for="exampleText">Send Us a Message</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>


      
      <Button className= "button">Submit</Button>
    </Form>
</div>
        );
      };
    
    }
 
export default ContactUs;



