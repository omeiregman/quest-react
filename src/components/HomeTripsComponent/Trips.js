import React, { Component } from 'react';


class Trips extends Component {
constructor (props) {
  super(props);


 this.handleTripClick = this.handleTripClick.bind(this);
}
  handleTripClick() {
    this.props.onTripClick(this.props.id);
  }

  render() {
    return (

        <div className="" onClick={this.handleTripClick}>
          <div className="card small-trips row">
            <img src={require(`${this.props.image}`)} alt="Trips Avatar" />
            <div className="container">
              <h4 className="small-trips-desc"><b>{this.props.destination}</b></h4>
              <p className="small-trips-date">{this.props.departure}</p>
            </div>
          </div>
        </div>

    );
  }
}

export default Trips;
