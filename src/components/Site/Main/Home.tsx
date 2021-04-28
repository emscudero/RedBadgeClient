import { Component } from 'react';
import {Jumbotron} from "reactstrap";
import image from "./assets/mamabear pic.jpg"




class Home extends Component {


style = {width: "700px", border: "solid", color: "#582B11"}

render() {





    return (
        <div className="main">

            <Jumbotron className="home">
                <img src={image}style = {this.style}></img>
                <h1>Mama Bear's Den</h1>
                <p>We know mama life is hard. Why not connect with other mama bears and keep your life together with our tracking tables.</p>
               
            </Jumbotron>

        </div>
    )
    }
}

export default Home;