import React from 'react';

import arrowRight from '../assets/arrow-right.svg';
import heroImg from '../assets/image.jpg';
import feature1 from '../assets/Feature_1.png';
import feature2 from '../assets/Feature_2.png';
import feature3 from '../assets/Feature_3.png';
import tracking from '../assets/j87NY.png';
import home from '../assets/jZA3B.png';
import down from '../assets/chevrons-down.svg';

const LandingPage = () => {
  return (
    <>
      <div className='hero-section'>
        <h1 className='hero-title'>HERCULES</h1>
        <h2 className='hero-caption'>
          THE WEIGHTLIFTING APP TO RULE THEM ALL.
        </h2>
        <div className='hero-btn'>
          <h1>Get started</h1>
          <img src={arrowRight} className='arrow' alt='arrow' />
        </div>
        <img src={down} alt='down' className='down' />
        <div className='hero-content'>
          <div className='content-1'>
            <div className='content1-container'>
              <h6>Micah Gabriel</h6>
              <p>
                “Hercules is the dopest, easiest workout out to use and to track
                track your progress.”
              </p>
            </div>
          </div>
          <div className='content-2'>
            <div className='content2-container'>
              <h6>WORKOUT TRACKING</h6>
              <p>
                Track your workout progress with ease and convience. No other
                app can compete!
              </p>
              <p className='see-features'>See more features</p>
            </div>
          </div>
          <div className='content-3'>
            <p>Meet our team</p>
          </div>
        </div>
        <div className='borders-container'>
          <span className='border' />
          <span className='border' />
          <span className='border' />
          <span className='border' />
          <span className='border' />
          <span className='border' />
          <span className='border' />
        </div>
        <img src={heroImg} className='hero-image' alt='hero' />
      </div>
      <div className='features-section'>
        <h1>What you get from hercules</h1>
        <p>“There’s nothing else like it.” - Ashley Garcia</p>
        <div className='feature-images'>
          <img src={feature1} alt='personalized workout' />
          <img src={feature2} alt='featured' />
          <img src={feature3} alt='featured' />
        </div>
      </div>
      <div className='second_CTA'>
        <h1 className='cta-title'>
          JOIN HERCULES TODAY, AND START YOUR PERSONILIZED JOURNEY
        </h1>
        <div className='cta-btn'>
          <h1>Get started</h1>
          <img src={arrowRight} className='arrow' alt='arrow' />
        </div>
        <div className='phones'>
          <img src={home} alt='home' />
          <img src={tracking} alt='home' />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
