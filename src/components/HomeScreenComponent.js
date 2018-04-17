import React, { Component } from 'react';
import TripDashboard from './HomeTripsComponent/TripDashboard';
import './FlightHotelsComponent/css/flight-hotel.css';
import '../css/index-style.css';
import FlightHotelTab from './FlightHotelsComponent/FlightHotelTab';


class HomeScreenComponent extends Component {
  render() {
    return (
      <div>
        <FlightHotelTab/>
        <TripDashboard/>
      </div>

    );
  }
}

export default HomeScreenComponent;
