import React, { Component } from 'react';
import TripList from './TripList';
import { Link, } from 'react-router-dom';

class TripDashboard extends Component {
  render() {
    return(
      <div className='container'>
        <h2 className="section-tag">Quest Deals</h2>

        <h2 className="section-tag">Local trips</h2>
          <div className="">
            <div className="">
              <Link to='/questtrip'><TripList/></Link>
            </div>
          </div>
        <h2 className="section-tag">International trips</h2>
      </div>
    );
  }
}

export default TripDashboard;
