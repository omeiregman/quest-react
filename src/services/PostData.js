//import axios from 'axios';

export function PostData(type, userData) {

 let BaseUrl = 'http://quest-test.herokuapp.com/api/auth/';

  return new Promise((resolve, reject) => {

      fetch(BaseUrl+type,{
        method: 'POST',
        headers: {
           'Content-type' : 'application/json'
        },
        body: 	{
      "tripType": 1,
      "ticketClass": 1,
      "travellerDetail":{
        "adults": 1,
        "children": 0,
        "infants": 0
      },
      "flightItineraryDetail": [
        {
          "originAirportCode": "LOS",
          "destinationAirportCode": "ABV",
          "departureDate":"14/05/2018"
        }
      ]
    }
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
