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
              <h1 className="display-2">Mama Bear's Den is the place for a mom to find the help and resources she needs to keep her organized.</h1>
              <p className="lead"></p>
              <hr className="my-2" />
              {/*<img src ="https://res.cloudinary.com/dqaf1fih0/image/upload/v1619574110/photos-RBP/babies_ahikax.jpg" />*/}
              <p></p>
              
            </Jumbotron>
            <Jumbotron>
              <h1 className="display-2">Our Founder</h1>
              <p className="lead">In 2019, Emily became a mother to a health boy. Though she lived out of state from help and family, she managed by natures instinct to raise him and learn the ropes to motherhood. Now she wants to be able to give moms a source to help online.</p>
              <hr className="my-2" />
              <p></p>
              <p className="lead">
              <Button color="warning">
              <Link to="/Donate" className="inactive">
             Donate here
            </Link>
          </Button>
               </p>
            </Jumbotron>






          </div>
        );
      };
    
    }
 
export default AboutUs;