import React from "react";
import "./styles.css"; // Import the CSS file

export const Features = () => {
  return (
    <div id="features" className="section">
      <h1>Key Features</h1>
      <div className="grid">
        <img src={process.env.PUBLIC_URL + "/Group 12.svg"} alt="Feature 1" />
        <img src={process.env.PUBLIC_URL + "/Group 13.svg"} alt="Feature 2" />
        <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt="Feature 3" />
        <img src={process.env.PUBLIC_URL + "/Group 15.svg"} alt="Feature 4" />
        <img src={process.env.PUBLIC_URL + "/Group 16.svg"} alt="Feature 5" />
      </div>
      <div className="bottom-content">
        <h1>Designed for every traveller</h1>
        <p>
          “Whether you're a solo adventurer, business traveler, or planning a
          family vacation, our app is tailored to meet all your travel needs.”
        </p>
        <div className="buttons">
          <button className="button primary">Get started for free</button>
          <button className="button secondary">Schedule a call</button>
        </div>
      </div>
    </div>
  );
};

// export default FeaturesSection;
