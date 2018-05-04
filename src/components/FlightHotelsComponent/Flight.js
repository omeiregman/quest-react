import React, { Component } from "react";
import Search from './Search';

class Flight extends Component {
  render() {
    return (
      <div>
        <h2>Search for Flights</h2>
        <Search />
      </div>
    );
  }
}

export default Flight;
