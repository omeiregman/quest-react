import React, { Component } from 'react';
import Flight from './Flight'

class FlightResult extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    console.log(this.props);
  }


  render() {
    return(
      <div>
        <Flight />
      </div>
    );
  }
}

export default FlightResult;
