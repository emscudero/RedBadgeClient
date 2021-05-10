import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link } from "react-router-dom";
import { 
    Button, 
    Jumbotron
} from 'reactstrap'


class AboutUs extends Component {



render() {


        return (


            <div className="aboutus">
            <h1>About Us</h1>

             
            <br/>
            <Jumbotron>
              <h1 className="display-2">Mama Bear's Den is the place for a mom to find the help she needs to remember the items her family needs.</h1>
              <p className="lead"></p>
              <hr className="my-2" />
              <img src ="https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,w_750/v1619574110/photos-RBP/babies_ahikax.jpg" />
              <p></p>
              
            </Jumbotron>
            






          </div>
        );
      };
    
    }
 
export default AboutUs;


