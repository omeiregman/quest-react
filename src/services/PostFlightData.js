
//import axios from 'axios';

export function PostFlightData(type, flightData) {

      let BaseUrl = "http://quest-test.herokuapp.com/api/flight/";

console.log(flightData);

      return new Promise((resolve, reject) => {

          fetch(BaseUrl+type,{
            method: 'POST',
            headers: {
               'Content-type' : 'application/json'
            },
            body: JSON.stringify(flightData)
          })
          .then((response) => response.json())
          .then((responseJson) => {
            resolve(responseJson);
          })
          .catch((error) => {
            reject(error);
          });
      });

    }
