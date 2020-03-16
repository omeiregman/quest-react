import React, { Component } from 'react';
import { Redirect, } from 'react-router-dom';
import PaystackButton from 'react-paystack';
import axios from 'axios';

import './css/payment.css';
import Trip from './trip-data.json';

// import img_share from './img/share-icon.png';
// import img_save from './img/save-icon.png';
// import img_pay from './img/pay-check.png';

const BASE_URL = 'http://quest-test.herokuapp.com/api/';

class SingleTripPayment extends Component {

  constructor(props){
    super(props);
    this.state = {
    		key: 'pk_test_8a48853663ac6b2c68f1e5cf9c346229c278d32d', //PAYSTACK PUBLIC KEY
    		email: '',  // customer email
    		amount: 0,//equals NGN100,
        firstName: '',
        lastName: '',
        passportNumber: '',
        phone: '',
        canPay: false,
        isSignedIn: false,
        getTrips: {}
    	};

      //Bind event to 'this'
      this.handleChange = this.handleChange.bind(this);
      this.enablePayment = this.enablePayment.bind(this);
      this.onClickPay = this.onClickPay.bind(this);
      this.getUserData = this.getUserData.bind(this);
  }

  callback = (response) => {
    console.log(response); // card charged successfully, get reference here
    //axios.get('http://quest-test.herokuapp.com/api/quest/verify-payment/'+response.reference)
    axios.get(`${BASE_URL}quest/verify-payment/${response.reference}`)
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    });
  }

  close = () => {
    console.log("Payment closed");
  }

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    this.enablePayment();
  }

  enablePayment = () => {
    if (this.state.firstname && this.state.lastname && this.state.passportNumber && this.state.phone) {
      this.setState({ canPay: true });
    }
    else {
      this.setState({ canPay: false });
    }
  }

  onClickPay = (e) => {
    e.preventDefault();
  }

  getUserData = (response) => {
    //Get Current User Data
        const currentUser = sessionStorage.getItem('userID');

        axios.get(`${BASE_URL}auth/${currentUser}/get-user`)
        .then((response) => {
          const userData = response.data.results[0];
        this.setState({ email: userData.email,
                        firstName: userData.first_name,
                        lastName: userData.last_name,
                        passportNumber: userData.passport_number,
                        phone: userData.phone_number });
       }).catch(function (error) {
        console.log(error);
      });
  }


  // const newState = Object.assign({}, this.state, { email: userData.email,
  //                                                 firstName: userData.first_name,
  //                                                 lastName: userData.last_name,
  //                                                 passportNumber: userData.passportNumber });
  // this.setState({
  //    email: userData.email,
  //    // firstName: userData.first_name,
  //    // lastName: userData.last_name,
  //    // phone: userData.phone_number,
  //    // passportNumber: userData.passport_number
  // })
  //this.setState(newState);

  componentDidMount () {


  }

  componentWillMount() {
    if(sessionStorage.getItem('userData')) {
      this.setState({ isSignedIn: true })
    }
    this.setState({ canPay: true });
    this.getUserData();
    this.enablePayment();

  // Get Current Trip Data
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
    this.setState ({
      getTrips: getTrip(tripId)
    });
  }
    this.setState({ amount: this.state.getTrips.package_price });
  }

  render() {
    if(this.state.isSignedIn === false) {
      return(<Redirect to='/'/> )
    }
    const canPay = this.state.canPay;
    const selectedTrip = this.state.getTrips;

    return(
    <section>
     <div className="container">
       <div className="single-trips-header">
         <div className="row">
            <div className="col-sm-6">
               <h3>Destination: {selectedTrip.destination}</h3>
               <h4>Total Sum to pay: <span>N{selectedTrip.package_price}</span></h4>
            </div>
          <div className="col-sm-6">
        </div>
      </div>
     </div>

     {/* <!--CONFIRM AND PAY SECTION--> */}
     <div className="container">
       <div className="row">
         <div className="col-lg-6">
           <h3 className="section-tag">Confirm your Personal details and pay</h3>
           <div className="row confirm-pay">
             <form className="confirm-pay-container">
                 <p><span>Email: </span><br/><input type="email" placeholder="" name="email" value={this.state.email} onChange={this.handleChange} /></p>
                 <p><span>First Name</span> <br /><input type="text" placeholder="" name="firstName" value={this.state.firstName} onChange={this.handleChange} /></p>
                 <p><span>Last Name</span> <br /><input type="text" placeholder="" name="lastName" value={this.state.lastName} onChange={this.handleChange} /></p>
                 <p><span>Passport Number</span> <br /><input type="text" placeholder="" name="passportNumber" value={this.state.passportNumber} onChange={this.handleChange} /></p>
                 <p><span>Phone Number</span> <br /><input type="text" placeholder="" name="phone" value={this.state.phone} onChange={this.handleChange} /></p>
                 {(this.state.canPay === false) && (<div className="field-warning">You must fill up all fields to proceed to payment</div>)}
                {this.state.canPay === true ? (<div className="" onClick={this.onClickPay}>
                  <PaystackButton
                     text="PAY NOW"
                     class="pay-btn"
                     callback={this.callback}
                     close={this.close}
                     disabled={false}
                     embed={false}
                     reference={this.getReference()}
                     email={this.state.email}
                     amount={this.state.amount}
                     paystackkey={this.state.key}/>
                   {/* <span><img src={img_pay} width="25" height="25"/></span> */}
               </div>) : (<div className="pay-btn-null" onClick={this.onClickPay}>
                   PAY NOW
                  {/* <span><img src={img_pay} width="25" height="25"/></span> */}
              </div>)}
             </form>
          </div>
        </div>
        <br/>
     <div className="col-lg-6">
       <h3 className="section-tag">Pay with an existing card</h3>
     <div className="payment-section">
       <p>You dont have any saved card</p>

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
export default SingleTripPayment;
