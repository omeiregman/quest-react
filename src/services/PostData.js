import axios from 'axios';

export function PostData(type, userData) {

 //let BaseUrl = 'http://rocky-tor-99302.herokuapp.com/api/auth/';
 let BaseUrl = 'https://api.thewallscript.com/restful/';

  // axios.post(BaseUrl+type, userData
  //   , {
  //     headers:{
  //       // 'Content-type': "application/json"
  //     }
  // })
  // .then(function (response) {
  //   console.log(response);
  //
  //   return response;
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });




  return new Promise((resolve, reject) => {

      fetch(BaseUrl+type,{
        method: 'POST',
        headers: {
           // 'Content-type' : 'application/json'
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
