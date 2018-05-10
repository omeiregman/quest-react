import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import './css/payment.css';
import Trip from './trip-data.json';

import img_share from './img/share-icon.png';
import img_save from './img/save-icon.png';
import img_pay from './img/pay-check.png';

class SingleTripPayment extends Component {
  constructor(props){
    super(props);

    this.state={
      isSignedIn:false
    }
  }

componentWillMount() {
  if(sessionStorage.getItem('userData')) {
    this.setState({ isSignedIn: true })
  }

}

  render() {
    if(this.state.isSignedIn === false) {
      return(<Redirect to='/'/> )
    }

    const tripId = this.props.match.params.name;
      if (tripId !== "" && !tripId) {
        return(
          <Redirect to={{ pathname: "/404" }} />
        );
      } else {
        const getTrip = (destination) => {
          const isTrip = t => t.destination === tripId
          return Trip.intlTrips.find(isTrip)

        }
        console.log(getTrip(tripId));
       const selectedTrip = getTrip(tripId);

    return(
    <section>
     <div className="container">
       <div className="single-trips-header">
         <div className="row">
             <div className="col-sm-6">
                 <h3>Destination: {selectedTrip.destination}</h3>
                 <h4>Total Sum: <span>N{selectedTrip.package_price}</span></h4>
             </div>
             <div className="col-sm-6">
             </div>
     </div>
     </div>

     {/* <!--CONFIRM AND PAY SECTION--> */}

     <div className="container">
       <div className="row">
         <div className="col-lg-6">
       <h3 className="section-tag">Confirm your Personal details</h3>
       <div className="row confirm-pay">
         <form className="confirm-pay-container">
             <p><span>First Name</span> <br /><input type="text" placeholder="" name="firstname"/></p>
             <p><span>Last Name</span> <br /><input type="text" placeholder="" name="lastname"/></p>
             <p><span>Passport Number</span> <br /><input type="text" placeholder="" name="passport-number"/></p>
             <p><span>Phone Number</span> <br /><input type="text" placeholder="" name="phone"/></p>
             <p><span>Email</span> <br /><input type="email" placeholder="" name="email"/></p>
             <div className="pay-btn">
               <span>PAY NOW</span><span><img src={img_pay} width="25" height="25"/></span>
             </div>
         </form>
       </div>
     </div>
     <br/>
     <div className="col-lg-6">
       <h3 className="section-tag">MANAGE CARDS</h3>
     <div className="payment-section">
       <p>You currently have no saved card</p>

       {/* <div className="payment-card">
         <div className="payment-card-top-master">
           <p>MASTERCARD</p>
         </div>
         <div className="payment-card-body">
           <span><img src="img/pay-img/mastercard-logo.png" width="40" height="30"/></span><span><span className="pay-confirm-hidden">XXXX XXXX XXXX </span>2345</span><span>08/17</span>
         </div>
       </div> */}
       {/* <div className="payment-card">
         <div className="payment-card-top-visa">
           <p>VISA</p>
         </div>
         <div className="payment-card-body-visa">
           <span><img src="img/pay-img/mastercard-logo.png" width="40" height="30"/></span><span><span className="pay-confirm-hidden">XXXX XXXX XXXX </span>2345</span><span>08/17</span>
         </div>
       </div> */}
     </div>
     </div>
   </div>
     </div>
   </div>
   </section>
    );
  }
}

}
export default SingleTripPayment;
