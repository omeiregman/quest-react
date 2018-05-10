import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import './css/auth.css';

import {PostData} from '../../services/PostData';


class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      isSignedIn: false,
      loading: false
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
    if(this.state.email && this.state.password){
      this.setState({loading:true});
      PostData('login', this.state).then((result) => {
        let responseJSON = result;
        if(responseJSON.user_id){
          sessionStorage.setItem('userData', responseJSON);
          this.setState({isSignedIn: true});
          this.setState({loading: false});
        } else {
          this.setState({ loading: false });
          alert("Incorrect email or password");
        }
        console.log(responseJSON);
      });
    } else {
      alert("Please ensure all fields are filled correctly");
    }
  }



  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    const { info } = this.props.location.state || { info: ""}

    if(this.state.isSignedIn) {
      return(<Redirect to={from}/> )
    }

    if(sessionStorage.getItem('userData')) {
      return(<Redirect to={from}/> )
    }
    return (
      <section>
        <div className="container">
            <div className="row login-section">
                <div className="col-md-4 login-left">
                    <h3>Sign In</h3>
                    <p>
                        Welcome Back, <br /> Are you ready for the next Quest?
                    </p>
                    <p>{info}</p>
                </div>
                <div className="col-md-8 login-right">
                    <div className="login">
                        <form className="login-container">
                            <p><input type="email" name="email" placeholder="Email" onChange={this.onChange}/></p>
                            <p><input type="password" name="password" placeholder="Password" onChange={this.onChange}/></p>
                            <div className="loader"><PropagateLoader
                                color={'rgb( 168, 100, 230 )'}
                                loading={this.state.loading}
                                size={10}
                              /></div>
                            <p><input type="submit" value="SIGN IN" onClick={this.signin}/></p>
                            <p>New to Quest? <Link to="/signup">Create an Account</Link></p>

                          <button className="loginBtn loginBtn--facebook">
                            Sign in with Facebook
                          </button>
                          <br />
                          <button className="loginBtn loginBtn--google">
                            Sign in with Google
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

export default SignIn;
