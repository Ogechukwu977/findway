import React from "react";
import "./styles.css"; // Import the CSS file

export const WhyFindWay = () => {
  return (
    <div id="whyfindway">
      <div className="text">
        <h2 style={{ fontFamily: "climate crisis", fontSize: "48px" }}>
          Why Findway?
        </h2>
      </div>
      <div className="image">
        <img
          src={process.env.PUBLIC_URL + "/whyfindway.png"}
          alt="Why FindWay"
        />
      </div>
    </div>
  );
};

// export default WhyFindWay;
