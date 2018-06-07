import React, { Component } from 'react';


class PersonalSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      country: '',
      passport: ''
    }
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

export default PersonalSettings;
