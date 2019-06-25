import React from "react";
import { NavLink } from "react-router-dom";

import "./SCSS/LandingPage.scss";

import logo from "../assets/hercules_logo.svg";
import arrowRight from "../assets/arrow-right.svg";
import heroImg from "../assets/image.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="landing-nav">
          <img src={logo} className="logo" alt="logo" />
          <div className="link-container">
            <NavLink to="/" className="links">
              Home
            </NavLink>
            <NavLink to="/about" className="links">
              About Hercules
            </NavLink>
            <NavLink to="/sign in" className="links">
              Sign In
            </NavLink>
            <NavLink to="/sign up" className="links">
              Sign Up
            </NavLink>
          </div>
        </div>
        <h1 className="hero-title">HERCULES</h1>
        <h2 className="hero-caption">
          <div className="hero-btn">
            <h1>Get started</h1>
            <img src={arrowRight} className="arrow" alt="arrow" />
          </div>
          THE WEIGHTLIFTING APP TO RULE THEM ALL.
        </h2>
        <div className="hero-content">
          <div className="content-1">
            <div className="content1-container">
              <h6>Micah Gabriel</h6>
              <p>
                “Hercules is the dopest, easiest workout out to use and to track
                track your progress.”
              </p>
            </div>
          </div>
          <div className="content-2">
            <div className="content2-container">
              <h6>WORKOUT TRACKING</h6>
              <p>
                Track your workout progress with ease and convience. No other
                app can compete!
              </p>
              <p className="see-features">See more features</p>
            </div>
          </div>
          <div className="content-3">
            <p>Meet our team</p>
          </div>
        </div>
        <div className="borders-container">
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
        </div>
        <img src={heroImg} className="hero-image" alt="hero" />
      </div>
      <div className="features-section">
        <h1>What you get from hercules</h1>
        <p>“There’s nothing else like it.” - Ashley Garcia</p>
      </div>
    </div>
  );
};

export default LandingPage;
