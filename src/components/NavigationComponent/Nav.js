import React, { Component } from 'react';
import img_icon from './img/icon.png';
import {  Link, Redirect } from 'react-router-dom';
import './Nav.css';
import img_login from './img/login-icon.png';

class Nav extends Component {
  constructor(props){
    super(props);

    this.state={
      isSignedIn:false
    }
    this.signOut = this.signOut.bind(this);
    console.log(this);
  }

componentWillMount() {
  if(sessionStorage.getItem('userData')){
    this.setState({ isSignedIn: true })
    console.log('this')
    console.log(this)
  }
}


signOut(){
  sessionStorage.setItem('userData', '');
  sessionStorage.clear();
  this.setState({ isSignedIn: false });
  return(<Redirect to='/' />)
}

  render () {
    const isSignedIn = this.state.isSignedIn;
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
                      {isSignedIn ? (
                        <span className="nav-item nav-link nav-link-toggle">
                          <span><Link className="nav-item nav-link" to='/signin'><img src={img_login} width="25" height="25"/></Link></span>
                          <Link to='/' className="nav-item nav-link" onClick={this.signOut}>SIGN OUT</Link>
                        </span>
                        ) : (
                          <span className="nav-item nav-link nav-link-toggle">
                            <Link className="nav-item nav-link" to='/signin'><span> SIGN IN</span></Link>
                            <Link to="/signup" className="nav-item nav-link">SIGN UP</Link>
                          </span>
                        )}
                  </div>
              </div>
          </nav>
      </div>

    );
  }

}

export default Nav;
