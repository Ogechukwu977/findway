import React from "react";
import "./styles.css"; // Import the CSS file

export const CustomFooter = () => {
  return (
    <div className="section">
      <h1>© findway 2024</h1>
      <div className="buttons">
        <button className="button primary">Learn More</button>
        <button className="button secondary">Get Started</button>
      </div>
      <div className="icons">
        <img src={process.env.PUBLIC_URL + "/email.svg"} alt="Icon 1" />
        <img src={process.env.PUBLIC_URL + "/linkedin.svg"} alt="Icon 2" />
        <img src={process.env.PUBLIC_URL + "/instagram.svg"} alt="Icon 3" />
        <img src={process.env.PUBLIC_URL + "/twitter.svg"} alt="Icon 4" />
      </div>
    </div>
  );
};

// export default footer;
