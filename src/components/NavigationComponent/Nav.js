import React, { Component } from 'react';
import img_icon from './img/icon.png';
import {  Link } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {
  render () {
    return(

      <div className="container">
          <nav className="main-nav navbar navbar-expand-lg navbar-light">
              <div>
                  <img src={img_icon} alt="nav-logo" className="nav-logo" />
                  <Link to='/'><span className="nav-quest">QUEST</span></Link>
              </div>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="nav-items navbar-nav">

                      <Link to="/about" className="nav-item nav-link">ABOUT</Link>
                      <Link to="/createtrip" className="nav-item nav-link">CREATE TRIPS</Link>
                      <Link to="/getapp" className="nav-item nav-link">GET APP</Link>
                      <a className="nav-item nav-link" href="#">LOGIN</a>
                      <a className="nav-item nav-link" href="#">SIGN UP</a>

                      {/* <!-- <span><img src="img/login-icon.png" alt="login"/></span>--> */}
                  </div>
              </div>


          </nav>
      </div>

    );
  }

}

export default Nav;
