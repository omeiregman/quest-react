import React, { Component } from 'react';
import axios from 'axios';
import { Async } from 'react-select';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const API_URL = 'http://rocky-tor-99302.herokuapp.com/api/flight/n_airports/search/';

class Search extends Component {
  constructor(props){
    super(props);


  this.state = {
    query: '',
    results: [],
    from:'',
    to:'',
    tripType:0,
    ticketClass:0,
    travellerDetail: {
      adult: 0,
      children: 0,
      infant: 0
    },
    flightItenaryDetail: [
      {
        originAirportCoode:'',
        destinationAirportCode:'',
        departureDate:'',
        originAirportCoodeTwo:'',
        destinationAirportCodeTwo:'',
        departureDateTwo:''
      }
    ]
      }

      
  }

    render() {
        return(
          <div>

          </div>

      );
    }
}

export default Search
