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
      this.getOptions = this.getOptions.bind(this);
  }

  getOptions = () => {
    axios.get(API_URL+this.state.query)
    .then(({ data }) => {
      this.setState ({ results: data});
      console.log(data.search_api);
    })

  }


componentWillMount() {

}


//   getOptions = (input) => {
//   return fetch(`${API_URL}${input}`)
//     .then((response) => {
//       console.log(response.search.api);
//       //console.log(response)
//       return response.search_api;
//     }).then((search_api) => {
//       console.log(search_api);
//       return { options: search_api };
//     });
// }


    handleInputChange = () => {
      this.setState({
        query: this.search.value
      }, () => {
        if (this.state.query && this.state.query.length > 0) {
          if (this.state.query.length > 0) {
            this.getOptions();
          }
        }
      });
    }

    componentDidMount() {

    }

    render() {

      // const options = this.state.results.map(r => (
      //   <options key={r.name}
      //     value={`${r.cityName}, ${r.cityCode}`}>
      //   </options>
      // ), 5);

  // const options = this.state.results.map(r => (
  //   <li key={r.cityCode}>
  //     {r.cityName}
  //   </li>
  // ));
        return(
        <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        {/* <ul>{options}</ul> */}
      </form>
        // <Async
        //   name="From"
        //   value="select"
        //   label="Travelling From"
        //   loadOptions={this.state.results.cityName}
        //   autoLoad={false}
        //   loadingPlaceholder="Airports"
        // />
      );
    }
}

export default Search
