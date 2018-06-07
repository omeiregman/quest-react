import React, { Component } from "react";
import Search from './Search';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import {PostFlightData} from '../../services/PostFlightData';

class Flight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: [],
      tripTypeSelected:'oneWay',
      from:'',
      to:'',
      tripType:1,
      ticketClass:1,
      adult: 1,
      children: 0,
      infants: 0,
      originAirportCode:'LOS',
      destinationAirportCode:'ABV',
      departureDate: moment().format('L'),
      originAirportCoodeTwo:'',
      destinationAirportCodeTwo:'',
      departureDateTwo: moment().format('L')
    }

      this.handleSearchClick = this.handleSearchClick.bind(this);
      this.queryOneWayData = this.queryOneWayData.bind(this);
      this.queryRoundTripData = this.queryRoundTripData.bind(this);
      this.onClickOneWay = this.onClickOneWay.bind(this);
      this.onClickRoundTrip = this.onClickRoundTrip.bind(this);
      this.onClickMultiple = this.onClickMultiple.bind(this);

  }

  handleSearchClick = (e) => {
    e.preventDefault();
    console.log("Search Clicked");
    //console.log(this.queryDate());

    if (this.state.tripTypeSelected === 'oneWay') {
      PostFlightData("process-flight-search", this.queryOneWayData()).then((result) => {
      let responseJSON = result;
      console.log(responseJSON);
    });
    }
    if (this.state.tripTypeSelected === 'roundTrip') {
      PostFlightData("process-flight-search", this.queryRoundTripData()).then((result) => {
        let responseJSON = result;
        console.log(result);
      });
    }
    const flightData = this.state.tripTypeSelected;
    this.props.history.push(`/process-flight-search/${flightData}`);
  }

  onFormChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
  });
}

  queryOneWayData = () => {
    let data = {
                    "tripType" : this.state.tripType,
                    "ticketClass" : Number(this.state.ticketClass),
                    "travellerDetail" : {
                      "adults" : this.state.adult,
                      "children" : this.state.children,
                      "infants" : this.state.infants
                    },
                    flightItineraryDetail: [
                      {
                        "originAirportCode": this.state.originAirportCode,
                        "destinationAirportCode": this.state.destinationAirportCode,
                        "departureDate":this.state.departureDate
                      }
                    ]
                  }
                  return data;
              }

      queryRoundTripData = () => {
          let data = {
                      "tripType" : this.state.tripType,
                      "ticketClass" : Number(this.state.ticketClass),
                      "travellerDetail" : {
                        "adults" : this.state.adult,
                        "children" : this.state.children,
                        "infants" : this.state.infants
                      },
                      flightItineraryDetail: [
                        {
                          "originAirportCode": this.state.originAirportCode,
                          "destinationAirportCode": this.state.destinationAirportCode,
                          "departureDate":this.state.departureDate
                        },
                        {
                          "originAirportCode": this.state.destinationAirportCode,
                          "destinationAirportCode": this.state.originAirportCode,
                          "departureDate":this.state.departureDateTwo
                        }
                      ]
                    }
                    return data;
                }

  onClickOneWay = () => {
    this.setState({
      tripTypeSelected: "oneWay"
    })
    console.log(this.state.tripTypeSelected);
  }

  onClickRoundTrip = () => {
    this.setState({
      tripTypeSelected: "roundTrip"
    })
    console.log(this.state.tripTypeSelected);
  }

  onClickMultiple = () => {
    this.setState({
      tripTypeSelected: "multiple"
    })
    console.log(this.state.tripTypeSelected);
  }

  render() {
    let tripTypeSelected = this.state.tripTypeSelected;

    return (
      <div>
        <div className="tripType-btn">
          <span onClick={this.onClickOneWay}>One Way</span>
          <span onClick={this.onClickRoundTrip}>Round Trip</span>
          <span onClick={this.onClickMultiple}>Multiple Destination</span>
        </div>
          <div className="container">
            <div className="flight-search">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <span>Flying From:</span>
                    <div className="input-icon-wrap">
                      {/* <span className="input-icon"><i className="fas fa-fighter-jet fa-lg fa-fw"></i></span> */}
                      <input name="from" type="text" placeholder="Enter name of city" value={this.state.from} onChange={this.onFormChange}/>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span>Flying To:</span>
                    <div className="input-icon-wrap">
                      {/* <span className="input-icon"><i className="fas fa-fighter-jet fa-lg fa-fw"></i></span> */}
                      <input name="to" type="text" placeholder="Enter name of city" value={this.state.to} onChange={this.onFormChange}/>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="row input-icon-wrap">
                        <div className="col-sm-4">
                          <span>Adult</span>
                          <input type="text" name="adult" placeholder="1" value={this.state.adult} onChange={this.onFormChange}/>
                        </div>
                        <div className="col-sm-4">
                          <span>Children</span>
                          <input type="text" name="children" placeholder="0" value={this.state.children} onChange={this.onFormChange}/>
                        </div>
                        <div className="col-sm-4">
                          <span>Infants</span>
                          <input type="text" name="infants" placeholder="0" value={this.state.infants} onChange={this.onFormChange}/>
                        </div>
                    </div>

                    <div className="input-icon-wrap">
                      {/* <span className="input-icon"><i className="fa fa-user fa-lg fa-fw"></i></span>
                       */}

                    </div>
                  </div>
                </div>
                <br></br>

                <div className="row">
                  <div className="col-md">
                    <span>Departure:</span>
                    <div className="input-icon-wrap">
                      {/* <span className="input-icon"><i className="fa fa-user fa-lg fa-fw"></i></span> */}
                      <input type="text" name="departureDate" value={this.state.departureDate} onChange={this.onFormChange}/>
                      {/* <DatePicker
                      selected={this.state.departureDate}
                      onChange={this.onFormChange}
                      /> */}
                    </div>
                  </div>

                  {(tripTypeSelected === "roundTrip") && (<div className="col-md">
                    <span>Return:</span>
                    <div className="input-icon-wrap">
                      {/* <span className="input-icon"><i className="fa fa-user fa-lg fa-fw"></i></span> */}
                      <input type="text" name="departureDateTwo" value={this.state.departureDateTwo} onChange={this.onFormChange}/>
                      {/* <DatePicker
                      selected={this.state.departureDate}
                      onChange={this.onFormChange}
                      /> */}
                    </div>
                  </div>)}

                  <div className="col-md inputWithIcon inputIconBg">
                    <span>Seat Class:</span>
                    <div className="input-icon-wrap">
                      {/* <span className="input-icon"><i className="fa fa-user fa-lg fa-fw"></i></span> */}
                      <select onChange={this.onFormChange} name="ticketClass" value={this.state.ticketClass}>
                        <option value="1">Economy</option>
                        <option value="2">Business</option>
                        <option value="3">First Class</option>
                        <option value="4">Premium</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md">
                    <br></br>
                    <div className="search-btn">Search Flight</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default Flight;
