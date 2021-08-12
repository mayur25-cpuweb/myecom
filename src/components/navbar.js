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
              <Nav.Link><NavLink exact activeClassName="active" to="/ShoppingCart">
                ETHNIC WEAR
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Login" >
                WESTERN WEAR
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Login">
                SAREES
              </NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName="active" to="/Login">
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
      </Switch>

    </>
  )
}

export default Navb
