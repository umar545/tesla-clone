import React from "react";

function Section() {
  const bgUrl = "/images/model-s.jpg";
  return (
    <div style={{ backgroundImage: `url(${bgUrl})` }} className="section">
      <div className="section-header">
        <h1>Order Now</h1>
        <p>Order Online for Touchless Experience</p>
      </div>
    </div>
  );
}

export default Section;
