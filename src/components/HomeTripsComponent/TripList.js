import React, { Component } from 'react';
import Trips from './Trips';
import Trip from './trip-data.json';
// import SingleTrip from './SingleTrip';

class TripList extends Component {

  render() {
    const tripComponent = Trip.intlTrips.map((trip) => (
    <Trips
      key={'trip-' + trip.id}
      id={trip.id}
      destination={trip.destination}
      departure={trip.departure_date}
      packagePrice={trip.package_price}
      image={'./img/'+trip.image_path_home_page}
    //  onTripClick={this.handleTripUpClick}
    />
  ));
    return (
        <div className="">
          <div className="col-md-3">
            {tripComponent}
          </div>
        </div>
    );
  }
}

export default TripList;
