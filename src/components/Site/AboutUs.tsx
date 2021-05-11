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
              <h1 className="display-2">Mama Bear's Den</h1>
              <p className="lead">The place for a mom to find the help she needs to remember the items her family needs.</p>
              <hr className="my-2" />
              <img src ="https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,w_750/v1619574110/photos-RBP/babies_ahikax.jpg" />
              <p></p>
              
            </Jumbotron>
            
<Jumbotron>
              <h1 className="aboutus">The backstory: </h1>
              <p className="lead"> A mom of two with family out of state had to learn how to raise her first child on her own. After lots of trial and error and a lot of forgetfulness, she thought of what would make it easier to remember here family's product needs.... </p>
              <hr className="my-2" />
              <img src ="https://res.cloudinary.com/dqaf1fih0/image/upload/v1620685985/photos-RBP/baby_meme2_xfxx5t.jpg" />

<h1>Funny Mama Memes</h1>



              <img src ="https://res.cloudinary.com/dqaf1fih0/image/upload/v1620685560/photos-RBP/babymeme1_uncpsj.jpg" />
              <p></p>
              
            </Jumbotron>
            





          </div>
        );
      };
    
    }
 
export default AboutUs;


