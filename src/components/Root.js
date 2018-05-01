import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './AboutScreen';
import GetApp from './GetAppScreen';
import CreateTrip from './CreateTripsComponent/CreateTrip';
import Home from './HomeScreen';
import SingleTrip from './HomeTripsComponent/SingleTrip';

const Root = () => {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/questtrip' component={SingleTrip}/>
      <Route path="/about" component={About}/>
      <Route path="/createtrip" component={CreateTrip}/>
      <Route path="/getapp" component={GetApp}/>
      </Switch>
    </div>
  );
}

export default Root;
