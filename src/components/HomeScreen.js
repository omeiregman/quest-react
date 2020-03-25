import React from "react";
import TripDashboard from "./HomeTripsComponent/TripDashboard";
import "./FlightHotelsComponent/css/flight-hotel.css";
import "../css/index-style.css";
import Banner from "./HeaderBannerComponent/Banner";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <TripDashboard />
    </div>
  );
};

export default HomeScreen;
