import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import './css/singletrip.css';
import Trip from './trip-data.json';

import img_join_yellow from './img/join-icon-yellow.png';
import img_going from './img/going-avatar.png';
import img_share from './img/share-icon.png';
import img_save from './img/save-icon.png';
//import img_join_purple from './img/join-icon-purple.png';

class SingleTrip extends Component {
  constructor(props){
    super(props);



    //this.populateTripData = this.populateTripData.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    //populateTripData();
  }

//   populateTripData = () => {
//     const newTripId = this.state.selectedTrip;
//     if (newTripId !== "" && !newTripId) {
//       return(
//         <Redirect to={{ pathname: "/404" }} />
//       );
//     } else {
//       const getTrip = (destination) => {
//         const isTrip = t => t.destination === tripId
//         return Trip.intlTrips.find(isTrip)
//     }
//     const selectedTrip = getTrip(newTripId);
//   }
// }

  componentWillMount() {

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
                        <h3>{selectedTrip.destination}</h3>
                    </div>
                    <div className="col-md-6">
                        <span>
                  <div className="single-trip-save">
                  <span><img src={img_save} width="25" height="25" alt="Save trip"/></span>
                        <span className="single-save-text">SAVE TO MY TRIPS</span>
                    </div>
                    </span>
                    <span><a href="./">
                <div className="single-trip-share">
                  <span><img src={img_share} width="25" height="25" alt="Share trip"/></span>
                    <span className="single-save-text">SHARE</span>
                </div></a>
                </span>
            </div>
            </div>
            </div>

            <div className="single-trip-banner">
                <div className="single-banner-details">
                    <span className="details-hero">
                        "A Central and Stylish Place in Finland"
                    </span>
                    <p>
                        {selectedTrip.departure_date}
                    </p>
                    <p>
                        PRICE: <span>{selectedTrip.package_price}</span>
                    </p>
                    <div className="single-trip-join">
                        <span><img src={img_join_yellow} width="25" height="25" alt="join trip"/></span>
                      <span className="single-join-text"><Link to={`/questtrip/payment/${selectedTrip.destination}`}>JOIN TRIP</Link></span>
                    </div>
                    <span className="single-time">
                        Time Remaining: <br /> <span>21 days, 21:05:33</span>
                    </span>
                </div>
            </div>


            <div className="row">
                <div className="col-md-8 tabs">
                    <input type="radio" name="tabs" id="tabone" defaultChecked="checked"/>
                    <label htmlFor="tabone">Summary</label>
                    <div className="tab">
                        <h1>Summary</h1>
                        <p>
                            Now that ProductList is managing the products in state, we’re poised to make modifications to this data in response to user input. Specifically, we want to increment the votes property on a product when the user votes for it. We just discussed that we
                            can only make state modifications using this.setState(). So while a component can update its state, we should treat the this.state object as immutable. As touched on earlier, if we treat an array or object as immutable we never
                            make modifications to it. For example, let’s say we have an array of numbers in state: Now that ProductList is managing the products in state, we’re poised to make modifications to this data in response to user input. Specifically,
                            we want to increment the votes property on a product when the user votes for it. We just discussed that we can only make state modifications using this.setState(). So while a component can update its state, we should treat the
                            this.state object as immutable. As touched on earlier, if we treat an array or object as immutable we never make modifications to it. For example, let’s say we have an array of numbers in state:
                        </p>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo"/>
                    <label htmlFor="tabtwo">Travel Details</label>
                    <div className="tab">
                        <h1>Travel Details</h1>

                            <ul>
                                <li>Bag</li>
                                <li>Shoe</li>
                                <li>Clothe</li>
                                <li>Jacket</li>
                                <li>Hat</li>
                            </ul>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus inventore perferendis cumque recusandae modi quasi minus laborum, ab at quod aliquid veritatis mollitia similique eos totam quisquam reiciendis, placeat temporibus! So while a component can
                            update its state, we should treat the this.state object as immutable. As touched on earlier, if we treat an array or object as immutable we never make modifications to it. For example, let’s say we have an array of numbers in state:

                    </div>

                    <input type="radio" name="tabs" id="tabthree"/>
                    <label htmlFor="tabthree">Map</label>
                    <div className="tab">
                        <h1>Map</h1>
                        <p>Now that ProductList is managing the products in state, we’re poised to make modifications to this data in response to user input. Specifically, we want to increment the votes property on a product when the user votes for it. We just discussed that we
                        can only make state modifications using this.setState(). So while a component can update its state, we should treat the this.state object as immutable. As touched on earlier, if we treat an array or object as immutable we never
                        make modifications to it. For example, let’s say we have an array of numbers in state: Now that ProductList is managing the products in state, we’re poised to make modifications to this data in response to user input. Specifically,
                        we want to increment the votes property on a product when the user votes for it. We just discussed that we can only make state modifications using this.setState(). So while a component can update its state, we should treat the
                        this.state object as imm</p>
                    </div>

                </div>

                <div className="col-md-4 people-going">
                  <img src={img_going} alt="going-img"/>
                  <p className="going-text">
                    <a>27 People Going</a> <br />
                    <a>Find out who is going</a>
                  </p>
                  <div className="single-trip-join">
                      <span><img src={img_join_yellow} width="25" height="25" alt="Join img"/></span>
                      <span className="single-join-text">JOIN TRIP</span>
                  </div>
                </div>
            </div>
            </div>
        </section>
      );
    }

}
}

export default SingleTrip;
