import React, {Component} from "react";
import { Row } from "reactstrap";
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Header extends Component {
   
    Header = () => {
}

render() {

    return (
         <header>
      <Navbar className="header">
        <NavbarBrand href="/" className="brand">
          Mama Bear's Den{/*<img src={logo} width="25px"></img>*/}
        </NavbarBrand>
        <NavLink>
          <Link to="/yourvaluables" className="inactive">
            Your Valuables
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/account" className="inactive">
            Add Item
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/aboutus" className="inactive">
            About Us
          </Link>
        </NavLink>
   </Navbar>

   
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/yourvaluables">
          {props.token ==false ? <Auth updateToken={props.updateToken}/> : <Redirect to="/yourvaluables" /> }
            <ValuablesDisplay token={props.token} logout={props.logout}/>
          </Route>
          <Route exact path="/account">
          {props.token ==false ? <Auth updateToken={props.updateToken} /> : <Redirect to="/account"/> }
            <AddItem token={props.token} />
          </Route>
          <Route exact path="/ourstory">
          <OurStory />
          </Route>
          <Route exact path="/hanksstory">
            <HanksStory />
          </Route>
        </Switch>
      </div>
    </header>

    );
};
}

export default Header;