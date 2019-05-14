import React, { Component } from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
      <div>
        
        <nav className="nav-wrapper green darkern-3">
          <div className="container">
            <NavLink to="/" className="brand-logo">Desktop Ninja</NavLink>
              <ul className="right">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/products">Products</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li> 
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li className='active'><NavLink to="/login">Log In</NavLink></li>
              </ul>
          </div>
        </nav>
      </div>
    )
}

export default Navbar
// export default withRouter(Navbar)