import React from 'react';
import {NavLink , link } from 'react-router-dom';

class Navbar extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top ">
            <NavLink className="navbar-brand " to='/' >Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Media
                  </a>
                  <div className="dropdown-menu  bg-dark" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" to='/gallery'>Gallery</NavLink>
                    <NavLink className="dropdown-item" to="/videos">Videos</NavLink>
                  </div>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link active" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link active" to="/about">About <span className="sr-only">(current)</span></NavLink>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}



export default Navbar;