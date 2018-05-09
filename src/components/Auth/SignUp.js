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
      confirmPassword: '',
      validEmail: false,
      privacyChecked: false,
      matchPassword: false,
      isSignedIn: false
    }

    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkPasswords = this.checkPasswords.bind(this);
    this.emailCheck = this.emailCheck.bind(this);
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  checkPasswords = () => {
    if (this.state.password === this.state.confirmPassword){
      this.setState({ matchPassword: true });
    } else {
      alert("Passwords do not match");
    }
    if (this.state.privacyChecked === false) {
      alert("Please ensure you Accept our Terms and Conditions");
    }
  }

  emailCheck = () => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(this.state.email) == true) {
    this.setState({
      validEmail: true
    })
  } else {
    this.setState({
      validEmail:false
    })
    alert("incorrect email");
  }
  }


  handlePrivacyCheck = () => {
    if (this.state.privacyChecked === false) {
      this.setState({
        privacyChecked: true
      })
    } else {
      this.setState({
        privacyChecked: false
      })
    }
  }


  signUp = (e) => {
    e.preventDefault();
    this.emailCheck();
    this.checkPasswords();
    console.log(this.state.matchPassword);
    if(this.state.email && this.state.password && this.state.matchPassword===true && this.state.validEmail===true) {
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
    // let checkboxError;
    // let passwordError;
    // let emailError;
    //
    // if(this.state.matchPassword === false) {
    //   passwordError = "Passwords do not match!!!";
    // }
    //
    // if(this.state.privacyChecked === false) {
    //   checkboxError = "Please Acecpt privacy policy";
    // }



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

                            <p><input type="email" name="email" placeholder="Email" onChange={this.onChange} className="right wrong"/></p>
                            {/* <span>{}</span> */}
                            <p><input type="password" name="password" placeholder="Password" onChange={this.onChange}/></p>

                            <p><input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange}/></p>
                            {/* <span>{passwordError}</span> */}
                            <input type="checkbox" onChange={this.handlePrivacyCheck} defaultChecked={this.state.privacyChecked}/>
                            {/* <span>{checkboxError}</span> */}
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
