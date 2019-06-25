import React from 'react';
import { NavLink } from 'react-router-dom';

import './SCSS/LandingPage.scss';

const Footer = () => {
  return (
    <div className='footer'>
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
  );
};

export default Footer;
