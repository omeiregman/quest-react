import React, { Component } from 'react';
import { Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import axios from 'axios';

import About from './AboutScreen';
import GetApp from './GetAppScreen';
import CreateTrip from './CreateTripsComponent/CreateTrip';
import Home from './HomeScreen';
import SingleTrip from './HomeTripsComponent/SingleTrip';
import PageNotFound from './pagenotfound';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import SingleTripPayment from './HomeTripsComponent/SingleTripPayment';
import Settings from './SettingsComponent/Settings';
import FlightResult from './FlightHotelsComponent/FlightResult';

const USER_API_URL = 'http://quest-test.herokuapp.com/api/auth/'

class Root extends Component {

  constructor(props){
    super(props);

    this.state = {
      isSignedIn: false,
      userID: '',
      userName: ''
    }
  }


  componentWillMount() {
    if(sessionStorage.getItem('userData')) {
      this.setState({
        isSignedIn:true
      })
    } else {
      this.setState({ isSignedIn: false })
    }
    if (sessionStorage.getItem('userID')) {
        const userID = sessionStorage.getItem('userID');
        this.setState({ userID: userID });
    }
  }

  componentDidMount() {
    axios.get(`${USER_API_URL}${this.state.userID}/get-user`)
    .then(function (response) {
      //this.setState({ userName: response.data.first_name})
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return(
      <div>
        <Switch history={HashRouter}>
        <Route exact path='/' component={Home}/>
        <Route exact path='/questtrip/:name' render={ props => <SingleTrip {...props} />}/>
        <Route exact path='/questtrip/payment/:name' render={ props => <SingleTripPayment {...props} />} />
        <Route path="/about" component={About}/>
        <Route path="/createtrip" component={CreateTrip}/>
        <Route path="/getapp" component={GetApp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path="/404" component={PageNotFound}/>
        <Route exact path="/process-flight-search/:flight-data" render={ props => <FlightResult {...props} /> }/>
        <Route path={`/settings/:${this.state.userID}`} render={props => <Settings {...props} /> }/>
        </Switch>
      </div>
    );
  }
}

export default Root;
