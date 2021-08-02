import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import Register from './Register';

export class Loginscript extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="loginform">
                    <Card.Title className="cardtitletext">Login</Card.Title>
                    <form className="formlogin" >
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-outline-success" id="loginsubmit">Submit</button>

                    </form>
                    <br />
                    <Card.Footer>
                        <small className="register" style={{ display: 'flex', justifyContent: 'center' }}>
                            Don't have Your Account?
                            <NavLink activeClassName="active" exact to="/Login" onClick={() => {
                                var login = document.getElementById('loginform')
                                var register = document.getElementById('registerform')
                                login.style.display = "none"
                                register.style.display = "block";
                            }}>Register-Here
                            </NavLink>
                        </small>
                    </Card.Footer>

                </div>
            </React.Fragment>
        )
    }
}

export default Loginscript
