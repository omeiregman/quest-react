import React, { Component } from 'react';
import './css/auth.css';
import {Link, Redirect} from 'react-router-dom';

import {PostData} from '../../services/PostData';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      isSignedIn: false
    }

    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.checkPasswords = this.checkPasswords.bind(this);
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // checkPasswords(){
  //   if (this.state.password === this.state.confirmPassword){
  //     this.setState({ matchPassword: true });
  //   }
  // }


  signUp = (e) => {
    e.preventDefault();
    console.log("clicked signup");
    console.log(this.state);
    if(this.state.email && this.state.password) {
      console.log(this.state.email);
      console.log(this.state.password);
      PostData('registration', this.state).then((result) => {
        let responseJSON = result;
        if(responseJSON){
          sessionStorage.setItem('userData', responseJSON);
          this.setState({isSignedIn: true});
          console.log("Registered");
        } else {
          console.log("login error");
        }
        console.log(responseJSON);
      });
    }
  }

  render() {
    if(this.state.isSignedIn){
      return (<Redirect to='/'/>);
    }

    if(sessionStorage.getItem('userData')) {
      return(<Redirect to='/'/> )
    }

    return (
      <section>
        <div className="container">
            <div className="row signup-section">
                <div className="col-md-4 login-left">
                    <h3>Sign Up</h3>
                    <p>
                        Join us and share our passion for Quest
                    </p>
                </div>
                <div className="col-md-8 login-right">
                    <div className="login">
                        <form className="login-container">

                            <p><input type="email" name="email" placeholder="Email" onChange={this.onChange}/></p>
                            <p><input type="password" name="password" placeholder="Password" onChange={this.onChange}/></p>
                            <p><input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange}/></p>
                            <p><input type="submit" value="GET STARTED" onClick={this.signUp}/></p>
                            <p>Already have a Quest Account? <Link to="/signin">Sign in</Link></p>

                          <button className="loginBtn loginBtn--facebook">
                          Sign up with Facebook
                          </button>
                          <br />
                          <button className="loginBtn loginBtn--google">
                          Sign up with Google
                          </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
  }
}

export default SignUp;
