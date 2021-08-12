import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, style, type, onClick }) => (
  <button className='button' onClick={onClick} type={type} style={style}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
