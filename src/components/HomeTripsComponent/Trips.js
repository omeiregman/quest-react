import React, { Component } from 'react';


class Trips extends Component {
  render() {
    return (

        <div>
          <div className="card small-trips">
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
