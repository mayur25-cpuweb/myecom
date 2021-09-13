import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink} from "react-router-dom";
import Navb from './components/navbar';
import Footer from './components/Footer';

function App() {
  return (
  <div>
    <Router>
    <Navb></Navb>
    <br/>
    <br/>
    <Footer></Footer>
    </Router>
  </div>
  
  );
}

export default App;
