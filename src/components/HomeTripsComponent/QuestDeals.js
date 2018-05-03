import React from 'react';
import img_join_white from './img/join-icon.png';

const QuestDeal = () => {

    return(
      <div class="container">
        <div class="row">
            <div class="col-lg">
                <div class="upcoming-trips">
                    <div class="row">
                        <div class="trip-item-1">
                            <div class="row trip-deatils">
                                <div class="col-md-3">
                                    <p class="upcoming-trips-price">
                                        N566,500
                                    </p>
                                </div>
                                <div class="col-md-9">
                                    <div class="upcoming-trips-text">
                                        <h3 class="upcoming-text-header"> Marzoma, Italy</h3>
                                        <p class="upcoming-text-desc">
                                            Exciting and diverse, the ancient feeling makes and breaks the touring rules. Scouring the globe for inspiration, our Italian based trips will bring out the purity in you Design Team is inspired by fashion’s most covetable trends; providing you with a
                                            cutting edge wardrobe season upon season.
                                        </p>
                                        <p class="upcoming-trip-date">
                                            15th December 2018
                                        </p>
                                    </div>

                                </div>
                                <div class="upcoming-trip-join">
                                  <span><img src={img_join_white} width="25" height="25" alt="Join"/></span>
                                  <span>JOIN TRIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg">
                <div class="upcoming-trips">
                    <div class="row">
                        <div class="trip-item-2">
                            <div class="row trip-deatils">
                                <div class="col-md-3">
                                    <p class="upcoming-trips-price">
                                        N566,500
                                    </p>
                                </div>
                                <div class="col-md-9">
                                    <div class="upcoming-trips-text">
                                        <h3 class="upcoming-text-header"> Kutuput, Florida Bay</h3>
                                        <p class="upcoming-text-desc">
                                            Exciting and diverse, the ancient feeling makes and breaks the touring rules. Scouring the globe for inspiration, our Italian based trips will bring out the purity in you Design Team is inspired by fashion’s most covetable trends; providing you with a
                                            cutting edge wardrobe season upon season.
                                        </p>
                                        <p class="upcoming-trip-date">
                                            15th December 2018
                                        </p>
                                    </div>

                                </div>
                                <div class="upcoming-trip-join">
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
