import React, {Component} from "react";
import { Row } from "reactstrap";

class Footer extends Component {
   
    Footer = () => {
}

render() {

    return (
        <footer className="footer">
            <Row className="footer">
                <p className="footer-text">©2021 Mama Bear's Den. Created by Emily Scudero</p>
            </Row>
 <a className="social-list__link" href="https://github.com/emscudero"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="github-svg" viewBox="0 0 16 16"></svg></a>
            <Row>

            </Row>
        </footer>
    );
};
}

export default Footer;