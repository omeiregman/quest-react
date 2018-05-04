import React from 'react';
import img_join_white from './img/join-icon.png';

const QuestDeal = () => {

    return(
      <div className="container">
        <div className="row">
            <div className="col-lg">
                <div className="upcoming-trips">
                    <div className="row">
                        <div className="trip-item-1">
                            <div className="row trip-deatils">
                                <div className="col-md-3">
                                    <p className="upcoming-trips-price">
                                        N566,500
                                    </p>
                                </div>
                                <div className="col-md-9">
                                    <div className="upcoming-trips-text">
                                        <h3 className="upcoming-text-header"> Marzoma, Italy</h3>
                                        <p className="upcoming-text-desc">
                                            Exciting and diverse, the ancient feeling makes and breaks the touring rules. Scouring the globe for inspiration, our Italian based trips will bring out the purity in you Design Team is inspired by fashion’s most covetable trends; providing you with a
                                            cutting edge wardrobe season upon season.
                                        </p>
                                        <p className="upcoming-trip-date">
                                            15th December 2018
                                        </p>
                                    </div>

                                </div>
                                <div className="upcoming-trip-join">
                                  <span><img src={img_join_white} width="25" height="25" alt="Join"/></span>
                                  <span>JOIN TRIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg">
                <div className="upcoming-trips">
                    <div className="row">
                        <div className="trip-item-2">
                            <div className="row trip-deatils">
                                <div className="col-md-3">
                                    <p className="upcoming-trips-price">
                                        N566,500
                                    </p>
                                </div>
                                <div className="col-md-9">
                                    <div className="upcoming-trips-text">
                                        <h3 className="upcoming-text-header"> Kutuput, Florida Bay</h3>
                                        <p className="upcoming-text-desc">
                                            Exciting and diverse, the ancient feeling makes and breaks the touring rules. Scouring the globe for inspiration, our Italian based trips will bring out the purity in you Design Team is inspired by fashion’s most covetable trends; providing you with a
                                            cutting edge wardrobe season upon season.
                                        </p>
                                        <p className="upcoming-trip-date">
                                            15th December 2018
                                        </p>
                                    </div>

                                </div>
                                <div className="upcoming-trip-join">
                                  <span><img src={img_join_white} width="25" height="25" alt="Join"/></span>
                                  <span>JOIN TRIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );

}

export default QuestDeal;
