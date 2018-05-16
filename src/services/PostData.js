//import axios from 'axios';

export function PostData(type, userData) {

 let BaseUrl = 'http://quest-test.herokuapp.com/api/auth/';

  return new Promise((resolve, reject) => {

      fetch(BaseUrl+type,{
        method: 'POST',
        headers: {
           'Content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
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
