import React, { Component } from 'react';
import TripList from './TripList';
//import { Route, Link } from 'react-router-dom';

class TripDashboard extends Component {
  render() {
    return(
      <div className='container'>
        <h2 className="section-tag">Quest Deals</h2>

        <h2 className="section-tag">Local trips</h2>
          <div className="">
            <div className="">
              <TripList/>
            </div>
          </div>
        <h2 className="section-tag">International trips</h2>
      </div>
    );
  }
}

export default TripDashboard;
