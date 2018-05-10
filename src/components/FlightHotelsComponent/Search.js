import React, { Component } from 'react';
import axios from 'axios';
import { Async } from 'react-select';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const API_URL = 'http://rocky-tor-99302.herokuapp.com/api/flight/n_airports/search/';

class Search extends Component {
  state = {
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

  // getOptions = (input) => {
  //   axios.get(API_URL+input)
  //   .then(({ data }) => {
  //     return { options: data.search_api }
  //   })
  // }

  getOptions = (input) => {
  return fetch(`${API_URL}${input}`)
    .then((response) => {
      console.log(response);
      console.log(response.search_api)
      return response.search_api();
    }).then((search_api) => {
      console.log(search_api)
      return { options: search_api };
    });
}


    // handleInputChange = () => {
    //   this.setState({
    //     query: this.search.value
    //   }, () => {
    //     if (this.state.query && this.state.query.length > 1) {
    //       if (this.state.query.length > 0) {
    //         this.getInfo();
    //       }
    //     }
    //   })
    // }

    componentDidMount() {

    }

    render() {
      // const options = this.state.results.map(r => (
      //   <options key={r.name}
      //     value={`${r.cityName}, ${r.cityCode}`}>
      //   </options>
      // ), 5);
      return(
        <Async
          name="From"
          value="select"
          label="Travelling From"
          loadOptions={this.getOptions}
          autoLoad={false}
          loadingPlaceholder="Loading Airports"
        />
      );
    }
}

export default Search
