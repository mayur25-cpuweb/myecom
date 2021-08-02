import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";

export class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="registerform">
          <Card.Title className="cardtitletext">Register</Card.Title>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button className="btn btn-outline-danger" id="loginsubmit">Sign in</button>
            </div>
          </form>
          <br/>
          <Card.Footer>
            <small className="register" style={{ display: 'flex', justifyContent: 'center' }}>
              Are You Registered already?
              <NavLink activeClassName="active" exact to="/Login" onClick={() => {
                var login = document.getElementById('loginform')
                var register = document.getElementById('registerform')
                login.style.display = "block"
                register.style.display = "none";
              }}>Login-Here
              </NavLink>
            </small>
          </Card.Footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Register
