import React from "react";

function Section() {
  const bgUrl = "/images/model-s.jpg";
  return (
    <div style={{ backgroundImage: `url(${bgUrl})` }} className="section">
      <div className="section-header">
        <h1>Order Now</h1>
        <p>Order Online for Touchless Experience</p>
      </div>
      <div className="d-flex-center flex-coloumn py-1">
      <div className="btn-container">
        <button className="btn-left">
          Custom Order
        </button>
        <button className="btn-right">
          Existing Inventery
        </button>
      </div>

        <img src="/images/down-arrow.svg" alt="" />
      </div>
     
    </div>
  );
}

export default Section;
