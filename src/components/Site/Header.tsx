import React, {Component} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Modal, Button } from "reactstrap";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AboutUs from "./Main/AboutUs";
import Home from "./Main/Home";
import MamaAdd from "./Main/MamaBear/MamaAdd";
import MamaTable  from "./Main/MamaBear/MamaTable";
import BabyAdd from "./Main/BabyBear/BabyAdd";
import BabyTable from "./Main/BabyBear/BabyTable";
import Auth from "../Auth/Auth";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";



interface AuthProps  {

updateToken: (newToken: string ) => void
token: string 
logout: Function


}

type HeaderVariables= {
  collapsed: boolean,
  modal: boolean
}

class Header extends Component <AuthProps, HeaderVariables >{
    constructor(props: AuthProps) {
        super(props);
        this.state = {
          collapsed: true,
          modal: false
        }
        }

    toggleNavbar= () => {
          this.setState({collapsed: !this.state.collapsed})
        }
render() {

    return (
      <div>
         <header>
    <Navbar className="header" >
        <NavbarBrand href="/home" className="brand">
          Mama Bear's Den
        </NavbarBrand>

         <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar  >
          <Nav navbar>
            <NavItem>
              <NavLink href="Home" className="inactive">Home</NavLink>
            </NavItem>

<NavItem>
              <NavLink href="Profile" className="inactive">My Profile</NavLink>
            </NavItem>

             <NavItem>
              <NavLink href="BabyAdd" className="inactive">Add a Baby Product</NavLink>
            </NavItem>
            
             <NavItem>
              <NavLink href="BabyTable" className="inactive">See your Baby Products</NavLink>
            </NavItem>
    

      <NavItem>
              <NavLink href="MamaAdd" className="inactive">Add a Mama Product</NavLink>
            </NavItem>


            <NavItem>
              <NavLink href="MamaTable" className="inactive">See your Mama Products</NavLink>
            </NavItem>
          
               

                <NavItem>
              <NavLink href="AboutUs" className="inactive">About Us</NavLink>
            </NavItem>


            <NavItem>
             <Button onClick={() => this.props.logout()}>Logout</Button>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
   
        <Switch>
         <Route exact path="/home">
          {localStorage.getItem("token")  ? <Home token={this.props.token}/> :  <Auth updateToken={this.props.updateToken} token={this.props.token} />}
           
          </Route>

          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
  
  {/* <Route exact path="/mamaAdd">
          {localStorage.getItem("token")  ? <MamaAdd token={this.props.token}/> : <Auth updateToken={this.props.updateToken} token={this.props.token} />}
            
          </Route> */}


  <Route exact path="/mamatable">
          {localStorage.getItem("token")  ? <MamaTable token={this.props.token}/> : <Auth updateToken={this.props.updateToken} token={this.props.token} /> }
            
    </Route>

         {/* <Route exact path="/mamaedit">
          {localStorage.getItem("token")  ? <MamaEdit token={this.props.token} /> : <Auth updateToken={this.props.updateToken} />}
            
          </Route>

  <Route exact path="/mamadelete">
          {localStorage.getItem("token")  ? <MamaDelete token={this.props.token}/> : <Auth updateToken={this.props.updateToken} /> }
        
    </Route>*/}

          {/* <Route exact path="/babyadd">
          {localStorage.getItem("token")  ? <BabyAdd token={this.props.token} /> : <Auth updateToken={this.props.updateToken} token={this.props.token}/> }
          
          </Route> */}
          
          <Route exact path="/babytable">
          {localStorage.getItem("token")  ?  <BabyTable token={this.props.token}/> :  <Auth updateToken={this.props.updateToken} token={this.props.token} /> }
            
          </Route>

  {/*<Route exact path="/babydelete">
          {localStorage.getItem("token")  ? <BabyTable token={this.props.token}/>: <BabyTable token={this.props.token}/> }
            
  </Route>*/}


{/* <Route exact path="/">
          {localStorage.getItem("token")  ? <Auth updateToken={this.props.updateToken} /> : <Login token={this.props.token} updateToken={this.props.updateToken}/> }

          </Route> */}

    {/* <Route exact path="/signup">
          {localStorage.getItem("token")  ? <Auth updateToken={this.props.updateToken} /> : <Signup token={this.props.token} updateToken={this.props.updateToken}/>}
            
          </Route> */}

        </Switch>
    </header>
</div>
    );
};
}

export default Header;