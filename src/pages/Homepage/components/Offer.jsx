import React from "react";

function Offer() {
  return (
    <div className="offer-container">
      <div className="offer-content">
        <div className="offer-text">
          <h2>Build, Create & Enhance</h2>
          <h3>Limited-Time Offer!</h3>
          <p>
            Upgrade, Refine, And Perfect Your Tasks With Precision, Durable
            Performance, And Exceptional Quality—All In One Solution.
          </p>
          <div className="offer-tags">
            <span className="discount">Flat 25% Off</span>
            <span className="limited">Limited Time Offer</span>
          </div>
          <button className="explore-btn">Explore</button>
        </div>
        <div className="offer-image">
          <img src="/images/offer/offer.png" alt="Kitchen Cookware Set" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
