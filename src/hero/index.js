import React, { useState } from "react";
import "./styles.css";

export const HeroSection = () => {
  const [form, setForm] = useState({
    country: "",
    city: "",
    days: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="hero-section">
      <div className="container text-center text-md-left">
        <div className="row align-items-center">
          <div className="col-md-6" style={{ textAlign: "left" }}>
            <h1>Your Ultimate Travel Assistant</h1>
            <p>Discover, Plan, and Enjoy Your Journey with Ease</p>
            <button className="btn primarybtn">Sign up for free</button>
            <button className="btn btn-outline-secondary">
              Schedule a call
            </button>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="hero-form">
              <div className="form-group">
                <label style={{ marginBottom: "24px", fontWeight: "bold" }}>
                  Where are you visiting?
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select Country</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select City</option>
                  <option value="newyork">New York</option>
                  <option value="toronto">Toronto</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <select
                  name="days"
                  value={form.days}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">How many days will you spend there?</option>
                  <option value="1">1 day</option>
                  <option value="2">2 days</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select Budget</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default HeroSection;
