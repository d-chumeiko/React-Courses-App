import React from 'react';
import PropTypes from 'prop-types';
import './AuthForm.scss';
import { NavLink } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';

const AuthForm = ({ title, fields, message, onSubmit }) => {
  const formFields = fields.map(
    ({ label, placeholder, value, onInputChange }) => {
      return (
        <Input
          key={label}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          type={label}
        />
      );
    }
  );

  return (
    <div className='auth'>
      <div className='auth__content'>
        <h1 className='auth__heading'>{title}</h1>
        <div className='auth__form'>
          <form onSubmit={onSubmit}>
            {formFields}
            <Button label={title} type='submit' />
          </form>
        </div>
        <p className='auth__message'>
          <span>{message.text}</span>
          <NavLink to={message.link}>{message.title}</NavLink>
        </p>
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string,
      onInputChange: PropTypes.func,
    })
  ),
  message: PropTypes.shape({
    text: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

export default AuthForm;
