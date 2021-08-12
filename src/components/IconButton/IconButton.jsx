import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.scss';

const IconButton = ({ icon, style, onClick }) => (
  <button className='icon-button' onClick={onClick} style={style}>
    <FontAwesomeIcon icon={icon} />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default IconButton;
