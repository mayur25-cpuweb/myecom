import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink} from "react-router-dom";
import Navb from './components/navbar';


function App() {
  return (
  <div>
    <Router>
    <Navb></Navb>
    </Router>
  </div>
  
  );
}

export default App;
