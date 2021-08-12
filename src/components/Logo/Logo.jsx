import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';
import logo from '../../assets/images/logo.png';
import { SITE_NAME, LOGO_ALT_TEXT, COURSES_PATH } from '../../constants';

const Logo = () => (
  <div className='logo'>
    <NavLink to={COURSES_PATH}>
      <img className='logo__img' src={logo} alt={LOGO_ALT_TEXT} />
      <h1 className='logo__heading'>{SITE_NAME}</h1>
    </NavLink>
  </div>
);

export default Logo;
