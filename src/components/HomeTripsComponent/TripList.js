import React, { Component } from 'react';
import Trips from './Trips';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import Trip from './trip-data.json';
// import SingleTrip from './SingleTrip';

class TripList extends Component {
constructor(props){
  super(props);

  this.state = {
    singleTripId: this.props.productId,
  };

this.handleTripUpClick = this.handleTripUpClick.bind(this);
}

handleTripUpClick = (productId) => {
  this.setState({ singleTripId: productId});
  console.log("state: "+ this.state.singleTripId);
  console.log("props: "+ productId);
}

  componentDidMount() {
      this.handleTripUpClick();
  }

  render() {
    const tripComponent = Trip.intlTrips.map((trip) => (
    <Trips
      key={'trip-' + trip.id}
      id={trip.id}
      destination={trip.destination}
      departure={trip.departure_date}
      packagePrice={trip.package_price}
      image={'./img/'+trip.image_path_home_page}
      onTripClick={this.handleTripUpClick}
    />
  ));
    return (
        <div className="">
          <div className="col-md-3">
            {tripComponent}
            {/* <Link to="/singletrip">{tripComponent}</Link> */}
          </div>
            {/* <Route path="/singletrip" component={SingleTrip}/> */}
        </div>
    );
  }
}

export default TripList;
