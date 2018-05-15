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
      tripTypeString:'',
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
      this.queryDate = this.queryDate.bind(this);
  }

  handleSearchClick = (e) => {
    e.preventDefault();
    console.log("Search Clicked");
    //console.log(this.queryDate());
    PostFlightData("process-flight-search", this.queryDate()).then((result) => {
      let responseJSON = result;
      console.log(responseJSON);
    });
  }

  onFormChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
  });
}

  queryDate = () => {
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

  render() {
    return (
      <div>
        <div className="tripType-btn">
          <span>One Way</span>
          <span>Round Trip</span>
          <span>Multiple Destination</span>
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
                  <div className="col-sm-4">
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

                  <div className="col-sm-4 inputWithIcon inputIconBg">
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

                  <div className="col-sm-4">
                    <br></br>
                    <div className="search-btn" onClick={this.handleSearchClick}>Search Flight</div>
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
