import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';

import PersonlSettings from './PersonalSettings';
import Bookings from './Bookings';
import Reminders from './Reminders';
import Cards from './Cards';
import Wallet from './Wallet';


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
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-md-3 left-account">
              <ul className="account-list">
                <li><NavLink className="account-list-item" to="/">Personal Details</NavLink></li>
                <li><NavLink className="account-list-item" to="/settings/bookings">Bookings</NavLink></li>
                <li><NavLink className="account-list-item" to="/settings/reminders">Reminder</NavLink></li>
                <li><NavLink className="account-list-item" to="/settings/cards">My Cards</NavLink></li>
                <li><NavLink className="account-list-item" to="/settings/wallet">Quest Wallet</NavLink></li>
              </ul>
            </div>
            <div className="col-md-9">
              <Route  exact path="/" component={PersonlSettings}/>
              <Route path="/setting/bookings" component={Bookings}/>
              <Route path="/seetings/reminders" component={Reminders}/>
              <Route path="/seetings/cards" component={Cards}/>
              <Route path="/seetings/wallet" component={Wallet}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }


}

export default Settings;
