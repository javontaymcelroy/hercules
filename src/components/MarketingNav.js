import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/hercules_logo.svg';
import './SCSS/LandingPage.scss';

const MarketingNav = () => {
  return (
    <div className='landing-nav'>
      <img src={logo} className='logo' alt='logo' />
      <div className='link-container'>
        <NavLink to='/' className='links' activeClassName='active-links'>
          Home
        </NavLink>
        <NavLink to='/about' className='links' activeClassName='active-links'>
          About Hercules
        </NavLink>
        <NavLink to='/sign in' className='links' activeClassName='active-links'>
          Sign In
        </NavLink>
        <NavLink to='/sign up' className='links' activeClassName='active-links'>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default MarketingNav;
