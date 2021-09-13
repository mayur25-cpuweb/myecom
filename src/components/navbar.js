import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import Login from './Login';
import Home1 from './home';
import ShoppingCart from './ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from './Dashboard/dashboard';
import  Productdetail from "./productdetail";
import Test from './test';
import NightWear from './NightWear';
import SareeWear from './SareeWear';
import WesternWear from './WesternWear';
import EthnicWear from './EthnicWear';


function Navb() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  function logout() {
    dispatch({ type: 'LOGOUT_USER' });
    alert('logged out');
  }

  return (
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Container>
          {/* <NavLink exact activeClassName="active" to="/"> home </NavLink> */}
          <Navbar.Brand>
            {/* <img
              src="https://image.freepik.com/free-vector/vector-vintage-camera_53876-36680.jpg"

              className="d-inline-block align-top logosnap"
              alt="Reactlogo"
            /> */}
            {/* <NavLink exact activeClassName="active" to="/" style={{ fontFamily: 'Yomogi' }} className="titlelogo">Snapped</NavLink> */}
          </Navbar.Brand>
            <Nav className="me-auto" id="navcenterlogoup" >
            <img
              src="https://cdn.shopify.com/s/files/1/2542/7564/files/Aachho_logo_tm_400x_e2f8afc1-9b63-4064-8e26-b4b89b3cea05_130x.png?v=1601715481"

              className="d-inline-block align-top logosnap1 "
              alt="Reactlogo"
            />
              </Nav>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Container>
          {/* <NavLink exact activeClassName="active" to="/"> home </NavLink> */}
          <Navbar.Brand>
            <img
              src="https://image.freepik.com/free-vector/vector-vintage-camera_53876-36680.jpg"

              className="d-inline-block align-top logosnap"
              alt="Reactlogo"
            />
            <NavLink exact activeClassName="active" to="/" style={{ fontFamily: 'Yomogi' }} className="titlelogo">Snapped</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="navcenter">
              <Nav.Link> <NavLink exact activeClassName="active" to="/Login">
                <i class="fas fa-magic"></i> JUST IN
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Ethnic-Wear">
                ETHNIC WEAR
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Western-Wear" >
                WESTERN WEAR
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Saree">
                SAREES
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Night-Wear">
                NIGHT WEAR
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/dashboard" >
                JEWELLERY
              </NavLink></Nav.Link>


              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>

              <Nav.Link>
                <NavLink exact activeClassName="active" to="/ShoppingCart" style={{ textDecoration: "none", color: "white" }}>
                  <i class="fas fa-shopping-cart"></i>
                </NavLink>
              </Nav.Link>

              {user && <Nav.Link><NavLink exact activeClassName="active" to="/dashboard" >
                Dashboard
              </NavLink></Nav.Link>}


              {user && <Nav.Link>{user.name}&nbsp;&nbsp;<NavLink exact activeClassName="active" to="/Login" onClick={logout} >
                <i class="fas fa-sign-out-alt"></i>
              </NavLink></Nav.Link>}

              {!user && <Nav.Link eventKey={2}>
                <NavLink exact activeClassName="active" to="/Login" style={{ textDecoration: "none", color: "white" }}>
                  <i class="far fa-user"></i>
                </NavLink>
              </Nav.Link>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home1} />
        <Route path="/Login" exact component={Login} />
        <Route path="/ShoppingCart" exact component={ShoppingCart} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/productdetail/:id" component={Productdetail} />
        <Route path="/Night-Wear" component={NightWear} />
        <Route path="/Saree" component={SareeWear} />
        <Route path="/Western-Wear" component={WesternWear} />
        <Route path="/Ethnic-Wear" component={EthnicWear} />



      </Switch>

    </>
  )
}

export default Navb
