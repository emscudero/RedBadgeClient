import React, {Component} from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AboutUs from "./Main/AboutUs";
import Home from "./Main/Home";
import BabyTable from "./Main/BabyBear/BabyTable";
import MamaTable  from "./Main/MamaBear/MamaTable";
import Auth from "../Auth/Auth";
import BabyAdd from "./Main/BabyBear/BabyAdd";
import MamaAdd from "./Main/MamaBear/MamaAdd";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";



interface AuthProps  {
updateToken: (newToken: string ) => void
token: string 
logout: Function
}


class Header extends Component <AuthProps, {} >{
    constructor(props: AuthProps) {
        super(props);
        this.state = {}
        }
render() {

    return (
         <header>
      <Navbar className="header">
        <NavbarBrand href="/" className="brand">
          Mama Bear's Den
        </NavbarBrand>
        <NavLink>
          <Link to="/BabyAdd" className="inactive">
           Add a Baby Item
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/MamaAdd" className="inactive">
          Add a Mama Item
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/BabyTable" className="inactive">
           Baby Bear
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/MamaTable" className="inactive">
            Mama Bear
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/aboutus" className="inactive">
            About Us
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/aboutus" className="inactive">
            Login
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/aboutus" className="inactive">
           Register
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/aboutus" className="inactive">
           LogOut
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
          <Route exact path="/babyadd">
             {this.props.token ? <Auth updateToken={this.props.updateToken}/> : <Redirect to = "/babyadd" />}
            <BabyAdd token={this.props.token}/>
          </Route>
          <Route exact path="/mamaadd">
             {this.props.token  ? <Auth updateToken={this.props.updateToken} /> : <Redirect to="/mamaadd"/> }
            <MamaAdd token={this.props.token}/>
          </Route>
          <Route exact path="/babytable">
          {this.props.token  ? <Auth updateToken={this.props.updateToken}/> : <Redirect to="/babytable" /> }
            <BabyTable token={this.props.token} />
          </Route>
          <Route exact path="/mamatable">
          {this.props.token  ? <Auth updateToken={this.props.updateToken} /> : <Redirect to="/mamatable"/> }
            <MamaTable token={this.props.token}/>
          </Route>
          <Route exact path="/login">
            {/*<Login token={this.props.token}/>*/}
            
          </Route>
        </Switch>
      </div>
    </header>

    );
};
}

export default Header;