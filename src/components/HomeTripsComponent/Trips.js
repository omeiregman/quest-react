import React, { Component } from 'react';
import { Link, } from 'react-router-dom';


class Trips extends Component {

  render() {
    return (

        <div className="col-md-3">
          <Link to={`/questtrip/${this.props.destination}`} key={this.props.destination}><div className="card small-trips">
            <img src={require(`${this.props.image}`)} alt="Trips Avatar" />
            <div className="container">
              <h4 className="small-trips-desc"><b>{this.props.destination}</b></h4>
              <p className="small-trips-date">{this.props.departure}</p>
            </div>
          </div>
          </Link>
        </div>
    );
  }
}

export default Trips;
