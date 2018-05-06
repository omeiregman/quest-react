import React, { Component } from 'react';
import './css/auth.css';
import {Link} from 'react-router-dom';



class SignUp extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="row signup-section">
                <div className="col-md-4 login-left">
                    <h3>Sign Up</h3>
                    <p>
                        Join us and shae our passion for quest
                    </p>
                </div>
                <div className="col-md-8 login-right">
                    <div className="login">
                        <form className="login-container">
                            <p><input type="text" placeholder="Username" name="signup-username"/></p>
                            <p><input type="email" placeholder="Email" name="signup-email"/></p>
                            <p><input type="password" placeholder="Password" name="signup-password"/></p>
                            <p><input type="password" placeholder="Confirm Password" name="signup-password-confirm"/></p>
                            <p><input type="submit" value="GET STARTED"/></p>
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
