import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import About from './AboutScreen';
import GetApp from './GetAppScreen';
import CreateTrip from './CreateTripsComponent/CreateTrip';
import Home from './HomeScreen';
import SingleTrip from './HomeTripsComponent/SingleTrip';
import PageNotFound from './pagenotfound';
import SingleTry from './singletry';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import SingleTripPayment from './HomeTripsComponent/SingleTripPayment';



class Root extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  // const PrivateRoute = ({ component: Component, ...rest }) => {
  //   <Route {...rest} render={(props) => (
  //     this.state.isSignedIn === true
  //     ? <Component {...props}/>
  //     : <Redirect to='/signin' />
  //   )}/>
  // }


  componentWillMount() {
    // if(sessionStorage.getItem('userData')) {
    //   console.log("call user feed");
    // } else {
    //   this.setState({ isSignedIn: true })
    // }
  }



  render() {
    // if (this.state.redirect){
    //   return(<Redirect to='/signin'/>)
    // }

    return(
      <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/questtrip/:name' render={ props => <SingleTrip {...props} />}/>
        <Route exact path='/questtrip/payment/:name' render={ props => <SingleTripPayment {...props} />} />
        <Route path="/about" component={About}/>
        <Route path="/createtrip" component={CreateTrip}/>
        <Route path="/getapp" component={GetApp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path="/404" component={PageNotFound}/>
        <Route path="/singletry/:id" render={props => <SingleTry {...props} />}/>
        </Switch>
      </div>
    );
  }


}

export default Root;
