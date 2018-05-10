import React, { Component } from 'react';


class Settings extends Component {
  constructor(props){
    super(props);

    this.state = {
      isSignedIn: false
    }
  }

  componentWillMount () {
    if (sessionStorage.getItem('userData')) {
      this.setState({ isSignedIn: true });
    }
  }

  render() {
    return(
      <div class="row">
            <div class="col-md-3 left-account">
                <ul class="account-list">
                    <a href="#">
                        <li class="account-list-item">Personal Details</li>
                    </a>
                    <a href="#">
                        <li class="account-list-item">Booking</li>
                    </a>
                    <a href="#">
                        <li class="account-list-item">Reminder</li>
                    </a>
                    <a href="#">
                        <li class="account-list-item">My Cards</li>
                    </a>
                    <a href="#">
                        <li class="account-list-item">Quest Wallet</li>
                    </a>
                </ul>
            </div>
        </div>

    );
  }


}
