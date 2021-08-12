import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import { checkLogin } from '../actions/userAction';


function Loginscript(props) {
   const [users, setUser] = useState([]);
   const [password, setpassword] = useState("");
   const [email, setemail] = useState("");
  const dispatch = useDispatch()
  const user = useSelector(state => state.user);

  function setValue(e) {
    e.target.name=="email" && setemail(e.target.value);
    e.target.name=="password" && setpassword(e.target.value);
  }
  function Auth() {
    alert("auth");
    alert(email);
    alert(password);
        dispatch(checkLogin({email,password}));
     
}

    return (
       
        <React.Fragment>
        <div id="loginform">
            <Card.Title className="cardtitletext">Login</Card.Title>
            <form className="formlogin" >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={email} onChange={(e)=>{setValue(e);}} className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={(e)=>{setValue(e);}} className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Link to="/dashboard" className="btn btn-outline-success" id="loginsubmit" onClick={Auth} >  Submit  </Link>

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

export default Loginscript

