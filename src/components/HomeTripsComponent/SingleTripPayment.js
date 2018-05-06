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

  }


  render() {
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
             <div className="col-md-6">
                 <h3>Inapueto, Morata de grannes <br /> Helsinki, Finland</h3>
             </div>
             <div className="col-md-6">
                 <span>
           <div className="single-trip-save">
           <span><img src={img_save} width="25" height="25"/></span>
                 <span className="single-save-text">SAVE TO MY TRIPS</span>
             </div>
             </span>
             <span><a href="#">
         <div className="single-trip-share">
           <span><img src={img_share} width="25" height="25"/></span>
             <span className="single-save-text">SHARE</span>
         </div></a>
         </span>
     </div>
     </div>
     </div>

     <div className="single-trip-banner">

     </div>


     {/* <!--CONFIRM AND PAY SECTION--> */}

     <div className="container">
       <h3 className="section-tag">Confirm your details</h3>
       <div className="row confirm-pay">

         <form className="confirm-pay-container">
             <p><span>First Name</span> <br /><input type="text" placeholder="" name="confirm-firstname"/></p>
             <p><span>Last Name</span> <br /><input type="text" placeholder="" name="confirm-lastname"/></p>
             <p><span>Passport Number</span> <br /><input type="text" placeholder="" name="confirm-passport-number"/></p>
             <p><span>Phone Number</span> <br /><input type="text" placeholder="" name="confirm-phone"/></p>
             <p><span>email</span> <br /><input type="email" placeholder="" name="confirm-email"/></p>
         </form>
       </div>

     </div>
     <div className="col-md-10">
       <h3 className="section-tag">Confirm Billing Details</h3>
     <div className="payment-section">
     <h4 className="pay-hero">Total Sum: <span>N567,849</span></h4>
       <div className="payment-card">
         <div className="payment-card-top-master">
           <p>MASTERCARD</p>
         </div>
         <div className="payment-card-body">
           <span><img src="img/pay-img/mastercard-logo.png" width="40" height="30"/></span><span><span className="pay-confirm-hidden">XXXX XXXX XXXX </span>2345</span><span>08/17</span>
         </div>
       </div>
       <div className="payment-card">
         <div className="payment-card-top-visa">
           <p>VISA</p>
         </div>
         <div className="payment-card-body-visa">
           <span><img src="img/pay-img/mastercard-logo.png" width="40" height="30"/></span><span><span className="pay-confirm-hidden">XXXX XXXX XXXX </span>2345</span><span>08/17</span>
         </div>
       </div>
       <br />
       <a href="#" className="manage-cards"><span>Manage Cards</span></a>
       <div className="pay-btn">
         <a className="" href="#"><span> PAY</span><span><img src={img_pay} width="25" height="25"/></span></a>
       </div>
       &nbsp;

     </div>
     </div>

     </div>
   </section>


    );
  }
}

}
export default SingleTripPayment;
