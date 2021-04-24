import { Component } from 'react';
import {Jumbotron} from "reactstrap";
import image from "./assets/mamabear pic.jpg"


class Home extends Component {




render() {





    return (
        <div className="main">

            <Jumbotron className="home">
                <img src={image}/*style = {style}*/></img>
                <h1>Mama Bear's Den</h1>
                <p>We know mama life is hard. Why not connect with other mama bears and keep your life together with our tracking tables.</p>
               
            </Jumbotron>

        </div>
    )
    }
}

export default Home;