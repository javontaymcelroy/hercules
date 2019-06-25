import React from 'react';
import { Route } from 'react-router-dom';

import './SCSS/LandingPage.scss';

import MarketingNav from './MarketingNav';
import LandingPage from './LandingPage';
import Footer from './Footer';
import AboutPage from './About';

const MarketingSite = () => {
  return (
    <div className='marketing-site'>
      <MarketingNav />
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' component={AboutPage} />
      <Footer />
    </div>
  );
};

export default MarketingSite;
