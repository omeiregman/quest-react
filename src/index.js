import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import './css/normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reduxThunk from 'redux-thunk';

//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


ReactDOM.render( (

  <BrowserRouter>
    <App />
  </BrowserRouter>

), document.getElementById('root'));
registerServiceWorker();
