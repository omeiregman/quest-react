import React, { Component } from 'react';
import Nav from './components/NavigationComponent/Nav';
import Root from './components/Root';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Root/>
        <Footer/>
      </div>
    );
  }
}

export default App;
