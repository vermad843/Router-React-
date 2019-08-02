import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home  from './components/Home';
import About from './components/About';
import Shop  from './components/Shop';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
     <Router>
      <div className ="App">
        <Nav/>
        <Route exact path ="/home" component = {Home} />
        <Route path ="/about" component = {About} />
        <Route path ="/shop" component = {Shop} />
      </div>
    </Router>
    
  );
}

export default App;
