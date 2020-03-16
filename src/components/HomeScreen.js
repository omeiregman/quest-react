import React, { Component } from "react";
import TripDashboard from "./HomeTripsComponent/TripDashboard";
import "./FlightHotelsComponent/css/flight-hotel.css";
import "../css/index-style.css";
import FlightHotelTab from "./FlightHotelsComponent/FlightHotelTab";
import Banner from "./HeaderBannerComponent/Banner";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Banner />
        <TripDashboard />
      </div>
    );
  }
}

export default HomeScreen;
