import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  type = 'text',
  placeholder,
  value,
  label,
  style,
  onChange,
  ...rest
}) => (
  <>
    {label && <h4 className='label'>{label}</h4>}
    {type === 'textarea' ? (
      <textarea
        className='textarea'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        {...rest}
      />
    ) : (
      <input
        type={type}
        className='input'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        {...rest}
      />
    )}
  </>
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

export default Input;
