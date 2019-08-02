import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Home  from './component/Home';
import About from './component/About';
import Shop  from './component/Shop';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
     <Router>
      <div className ="App">
        <Nav/>
        <Route exact path ="/" component = {Home} />
        <Route path ="/about" component = {About} />
        <Route path ="/shop" component = {Shop} />
      </div>
    </Router>
    
  );
}

export default App;
