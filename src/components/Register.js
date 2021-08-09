import React, { Component, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from "react-router-dom";
import axios from 'axios';

function Register() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");

  function setvalue(e) {
    e.target.name=="Name" && setName(e.target.value);
    e.target.name=="email" && setemail(e.target.value);
    e.target.name=="password" && setpassword(e.target.value);
    e.target.name=="address" && setaddress(e.target.value);
    e.target.name=="age" && setage(e.target.value);
    e.target.name=="city" && setcity(e.target.value);
    e.target.name=="state" && setstate(e.target.value);
    e.target.name=="zip" && setzip(e.target.value);

  }  
  function senddata() {
    // alert(name);
    // alert(email);
    // alert(password);
    // alert(address);
    // alert(age);
    // alert(city);
    // alert(state);
    // alert(zip);
    var s={name,email,password,address,age,city,state,zip}
    axios.post('http://localhost:4000/Register',s).then((res)=>{
      console.log(res.data);
      alert( `${name} you are Registered successfully`);
    })

  }
  return (
    <React.Fragment>
        <div id="registerform">
          <Card.Title className="cardtitletext">Register</Card.Title>
          <form className="row g-3">
          <div className="col-md-6">
              <label for="inputName" className="form-label">Name</label>
              <input name="Name" value={name} onChange={(e)=>{setvalue(e);}} type="text" className="form-control" id="inputName" />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Email</label>
              <input name="email" value={email} onChange={(e)=>{setvalue(e);}}   type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Password</label>
              <input name="password" value={password} onChange={(e)=>{setvalue(e);}}   type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">Address</label>
              <input name="address"  value={address} onChange={(e)=>{setvalue(e);}}  type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label for="age" className="form-label">Age</label>
              <input name="age"  value={age} onChange={(e)=>{setvalue(e);}}  type="number" className="form-control" id="age" placeholder="age" />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">city</label>
              <input name="city" value={city} onChange={(e)=>{setvalue(e);}}   type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <select name="state" value={state} onChange={(e)=>{setvalue(e);}}   id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option value="rajasthan">rajasthan</option>
                <option value="gujrat">gujrat</option>

              </select>
            </div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">Zip</label>
              <input Name="zip"  value={zip} onChange={(e)=>{setvalue(e)}}  type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <button onClick={senddata} className="btn btn-outline-danger" id="loginsubmit">Sign in</button>
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

export default Register
