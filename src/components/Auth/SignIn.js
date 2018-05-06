import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './css/auth.css';

import {PostData} from '../../services/PostData';


class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      redirect: false
    }

    this.signin = this.signin.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  signin = (e) => {
    e.preventDefault();
    console.log("clicked signin");
    if(this.state.username && this.state.password){
      PostData('login', this.state);
      PostData('login', this.state).then((result) => {
        let responseJSON = result;
        if(responseJSON.userData){
          sessionStorage.setItem('userData', responseJSON);
          this.setState({redirect: true});
          console.log("Home Page");
        } else {
          console.log("login error");
        }
        console.log(responseJSON);
      });
    }
  }



  render() {

    // if(this.state.redirect) {
    //   return(<Redirect to='/'/> )
    // }
    return (
      <section>
        <div className="container">
            <div className="row login-section">
                <div className="col-md-4 login-left">
                    <h3>Sign In</h3>
                    <p>
                        Welcome Back, <br /> Are you ready for the next Quest?
                    </p>
                </div>
                <div className="col-md-8 login-right">
                    <div className="login">
                        <form className="login-container">
                            <input type="email" name="username" placeholder="Email" onChange={this.onChange}/>
                            <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                            <input type="submit" value="SIGN IN" onClick={this.signin}/>
                            <p>New to Quest? <Link to="/signup">Create an Account</Link></p>

                          {/* <button className="loginBtn loginBtn--facebook">
                            Sign in with Facebook
                          </button>
                          <br />
                          <button className="loginBtn loginBtn--google">
                            Sign in with Google
                          </button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
  }

}

export default SignIn;
