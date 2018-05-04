import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import About from './AboutScreen';
import GetApp from './GetAppScreen';
import CreateTrip from './CreateTripsComponent/CreateTrip';
import Home from './HomeScreen';
import SingleTrip from './HomeTripsComponent/SingleTrip';
import PageNotFound from './pagenotfound';
import SingleTry from './singletry';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

const Root = () => {

  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/questtrip/:name' render={ props => <SingleTrip {...props} />}/>
      <Route path="/about" component={About}/>
      <Route path="/createtrip" component={CreateTrip}/>
      <Route path="/getapp" component={GetApp}/>
      <Route path="/login" component={Login}/>
      <Route path='/register' component={SignUp}/>
      <Route path="/404" component={PageNotFound}/>
      <Route path="/singletry/:id" render={props => <SingleTry {...props} />}/>
      </Switch>
    </div>
  );
}

export default Root;
