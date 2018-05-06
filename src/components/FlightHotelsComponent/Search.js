import React, { Component } from 'react';
import axios from 'axios';
import Flightresult from './result.js';


//const API_URL = 'http://139.162.210.123:8086/v1/flight/get-city-airports'
const API_URL = 'http://rocky-tor-99302.herokuapp.com/api/flight/get-cities';

class Search extends Component {
  state = {
    query: '',
    results: []
  }


  getCity = () => {
    let cityData = JSON.stringify({
          countryCode: "NG",
  })
    axios.post(API_URL, cityData, {headers: {'Content-type':"application/json"}}
      // cityData, {
      // headers:{
      //   'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NjE1MzA2IiwiaXNzIjoiMTk3LjIxMS42MC40NCIsImV4cCI6MTUyNTQ3OTA1NSwiaWF0IjoxNTI1NDU3NDU1fQ.h773_8Do8AZxblhTyopelRpzRRJPCqStSuntSKDOBR0",
      //   'Content-type': "application/json"
      // }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  // getInfo = () => {
  //   axios.get(`${API_URL}?code=${this.state.query}`)
  //   .then(({ data }) => {
  //     this.setState({
  //       results: data.data
  //     })
  //   })
  // }

  getData = () => {
    this.setState({
      results: Flightresult.data,
    })
  }

    handleInputChange = () => {
      this.setState({
        query: this.search.value
      }, () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            //this.getData();
            //this.getInfo()
          }
        }
      })
    }




    componentDidMount() {
      //this.getCity();
    }

    render() {
      const options = this.state.results.map(r => (
        <li key={r.id}>
          {r.displayValue}
        </li>
      ), 5);
      return(
        <form>
          <input
            placeholder="Going to"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{options}</p>
        </form>

      )
    }
}

export default Search
