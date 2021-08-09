// import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route, NavLink} from "react-router-dom";
import Home1 from './home';
import Register from './Register';
import Loginscript from './loginscript';

function Login() {

  return (
    <React.Fragment >
      <Router>
        <CardGroup className="cardgroup">
          <Card>
            <Card.Img variant="toplogin" src="https://cdn.onlinewebfonts.com/svg/img_568656.png" />
            <Card.Body>

            <Loginscript></Loginscript>
            <Register></Register>

            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <React.Fragment>
                <Carousel fade style={{ height: '65vh', backgroundColor: 'blue' }}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src=""
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </React.Fragment>
            </Card.Body>

          </Card>


        </CardGroup>
        <Switch>
                {/* <Route path="/Register" exact component={Register} /> */}
                {/* <Route path="/loginscript" exact component={Loginscript} /> */}

                
              </Switch>
      </Router>
    </React.Fragment>

  )
}

export default Login

