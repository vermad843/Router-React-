import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {

  const Style = {
    color : 'white'
  };
  return (
    <nav>
        <h3>LOGO</h3>
        <ul className = "nav-links">
        <Link style ={Style} to ='/home'><li>Home</li></Link>
          <Link style ={Style} to ='/about'><li>About</li></Link>
          <Link style ={Style}to ='/shop'><li>Shop</li></Link>
         
        </ul>   
    </nav>
  );
}

export default Nav;
