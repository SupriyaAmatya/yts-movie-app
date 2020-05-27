import React, { Component } from 'react';
import logo from '../../assets/logo-YTS.svg';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header className='navbar-wrapper clearfix'>
        <div className="container">
          <div className="nav-logo">
            <Link to='/'><img src={logo} alt="yts-logo"></img></Link>
          </div>
          <div className="main-nav-links">
            <ul className='nav-links'>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink exact to="/browse-movies">Browse Movies</NavLink></li>
            </ul>
            <ul className='nav-links nav-links-guest'>
              <li>
                <NavLink exact to="/login">Login</NavLink>
                &nbsp;|&nbsp;
                <NavLink exact to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
