import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link } from "react-router-dom";
import { 
    Button, Form, FormGroup, Label, Input, FormText, Col, Row
} from 'reactstrap';
import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
  const [state, handleSubmit] = useForm("xleajryk");
  if (state.succeeded) {
      return <h1>Thanks for staying in touch!</h1>;
  }


 let data = "";
    fetch("https://formspree.io/f/xleajryk", {
     method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    }).catch(error => {
        console.log('post error', error);
     });
 
       

  
// style = {width: "700px", border: "solid", color: "#582B11"}

        return (
<div className="contact_us">



        
        
 
         <form className= "contact-us" onSubmit={handleSubmit}>
      <label className="contact-header" htmlFor="email">
        Contact Us!
      </label>
      <br></br>
      <br></br>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your email here "
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
<br></br>
      <br></br>
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br></br>
      <br></br>
      <br></br>
      <button className="button" disabled={state.submitting}>
        Send to us
      </button>
    </form> 
        
        
</div>
        );
  
  
    
  
 }
 
export default ContactForm;



