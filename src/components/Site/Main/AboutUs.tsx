import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link } from "react-router-dom";
import { 
    Button, 
    Jumbotron
} from 'reactstrap'

class AboutUs extends Component {

}

render() {

}
        return (


            <div className="aboutus">
            <h1>About Us</h1>
            <br/>
            <Jumbotron>
              <h1 className="display-3">Mama Bear's Den is the place for a mom to find the help and resources she needs to keep her organized.</h1>
              <p className="lead"></p>
              <hr className="my-2" />
              <p></p>
              <p className="lead">
              <Button color="warning">
            <Link to="/OurStory" className="inactive">
             Our Story
            </Link>
          </Button>
              </p>
            </Jumbotron>
            <Jumbotron>
              <h1 className="display-3">Our Founder</h1>
              <p className="lead">In 2007, Hank Flowers founded Firelogger.</p>
              <hr className="my-2" />
              <p>A humble man from Illinois had a house fire while at work. Click below to read about his tramatic experience that led to a well-known application we know today.</p>
              <p className="lead">
              <Button color="warning">
              <Link to="/HanksStory" className="inactive">
             About Hank
            </Link>
          </Button>
               </p>
            </Jumbotron>






          </div>
        );
      };
      
 
export default AboutUs;