import React, { Component } from 'react';
import Trips from './Trips';
import Trip from './trip-data.json';

class TripList extends Component {


  render() {
    const tripComponent = Trip.intlTrips.map((trip) => (
    <Trips
      id={trip.id}
      destination={trip.destination}
      departure={trip.departure_date}
      packagePrice={trip.package_price}
      image={'./img/'+trip.image_path_home_page}
    />
  ));
    return (
      <div className="row">
        <div className="col-md-3 test-float">
          {tripComponent}
        </div>
      </div>

    );
  }
}

export default TripList;
