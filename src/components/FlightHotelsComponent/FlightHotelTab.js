import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Packages from "./Packages";
import FlightResults from './FlightResult';


class FlightHotelTab extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container flight-hotel-tab">
          <h1 className="section-tag">Book Flights and Hotels</h1>
          <ul className="header">
            <li><NavLink to="/">Flight</NavLink></li>
            <li><NavLink to="/booking/hotel">Hotel</NavLink></li>
            <li><NavLink to="/booking/package">Packages</NavLink></li>
          </ul>
          <div className="content">
            <Route  exact path="/" component={Flight}/>
            <Route path="/booking/hotel" component={Hotel}/>
            <Route path="/booking/package" component={Packages}/>
            {/* <Route path="/booking/flight-result" component={FlightResults}/> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default FlightHotelTab;
