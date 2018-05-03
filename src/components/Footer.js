import React from 'react';


const Footer =() => {
  return(
    <section id="footer">
      <div className="main-footer">
      <div className="container">
        <div className="footer-section">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="footer-heading">Quest World</h3>
                  <p className="footer-content">
                    &copy; 2018 Quest World Exploration Limited. <br /> All Rights Reserved
                  </p>
                </div>
                <div className="col-md-3 other-footer">
                  <h3 className="footer-heading">Locations</h3>
                  <div className="footer-location-list">
                    <ul className="footer-location-list">
                    <li>Alabama</li>
                    <li>Sambisa</li>
                    <li>Kutuput</li>
                    <li>Tokyo</li>
                    <li>Florida</li>
                  </ul>
                </div>
                </div>
                <div className="other-footer">
                  &nbsp; &nbsp; &nbsp;
                  <ul className="footer-location-list">

                    <li>Baga</li>
                    <li>Rome</li>
                    <li>Berlin</li>
                    <li>Vienna</li>
                    <li>Salasa</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 other-footer">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="footer-heading">BLOG</h3>
                  <div className="footer-location-list">
                    <ul className="footer-location-list">
                    <li>Most Recent</li>
                    <li>Popular Posts</li>
                    <li>Travel Photos</li>
                  </ul>
                </div>

                </div>
                <div className="col-md-6">
                  <h3 className="footer-heading">CONTACT</h3>
                  <p className="footer-content">
                    contact, contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Footer;
