import React, { Component } from 'react';
import TripList from './TripList';

class TripDashboard extends Component {
  render() {
    return(
      <div className='container'>
        <h2 className="section-tag">Quest Deals</h2>

        <h2 className="section-tag">Local trips</h2>
          <div className="">
            <TripList/>
          </div>
        <h2 className="section-tag">International trips</h2>
      </div>
    );
  }
}

export default TripDashboard;
