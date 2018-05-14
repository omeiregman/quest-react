import React, { Component } from 'react';
import './css/auth.css';
import {Link, Redirect} from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

import {PostData} from '../../services/PostData';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      confirmPassword: '',
      flashMsg: '',
      flashMsgVisibility: 'hidden',
      validEmail: false,
      privacyChecked: false,
      matchPassword: false,
      isSignedIn: false,
      loading: false
    }

    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkPasswords = this.checkPasswords.bind(this);
    this.emailCheck = this.emailCheck.bind(this);
    this.setFlashMsg = this.setFlashMsg.bind(this);
    this.closeFlash = this.closeFlash.bind(this);
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

// this function sets the proper Flash Message and displays it,
// it also closes the flash Message after the setTimeout function within
  setFlashMsg(args) {
    this.setState({'flashMsg': args});
    this.setState({ loading: false })
    this.setState({ flashMsgVisibility: 'block' })
      setTimeout(() => {
        this.setState({ flashMsgVisibility: 'hidden' });
      }, 5000);
  }

//this function closes the flash message
  closeFlash() {
    this.setState({flashMsgVisibility: 'hidden'});
  }


  checkPasswords = () => {
    if (this.state.password === this.state.confirmPassword){
      this.setState({ matchPassword: true });
    } else {
      this.setState({ matchPassword: false });
      this.setFlashMsg("Passwords do not match");
    }
    if (this.state.privacyChecked === false) {
      this.setFlashMsg("Please ensure you Accept our Terms and Conditions");
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
    this.setFlashMsg("incorrect email");
  }
  }

  signUp = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(this.state.email) == true) {
      if (this.state.password && this.state.password === this.state.confirmPassword){
        if (this.state.privacyChecked === true) {
          PostData('registration', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
            if(responseJSON.access_token){
              this.setFlashMsg(responseJSON.message);
              sessionStorage.setItem('userData', responseJSON);
              setTimeout(() => {
                this.setState({isSignedIn: true});
              }, 1000);

            } else {
              this.setFlashMsg("login error");
            }
            this.setFlashMsg(responseJSON.message);
          });
        }
        else {
          this.setFlashMsg("Please ensure you Accept our Terms and Conditions");
        }
      }
      else {
        this.setFlashMsg("Password Cant be Empty and Passwords must match");
      }
    }
    else {
      this.setFlashMsg("incorrect email");
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



  render() {
    if(this.state.isSignedIn){
      return (<Redirect to='/'/>);
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
                            <div className="loader">
                              <PropagateLoader
                                color={'rgb( 168, 100, 230 )'}
                                loading={this.state.loading}
                                size={10}
                              />
                            </div>
                            <div className={'row alert alert-warning alert-dismissable text-center ' + this.state.flashMsgVisibility}>
                              <span>{this.state.flashMsg}</span>.
                            </div>
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
