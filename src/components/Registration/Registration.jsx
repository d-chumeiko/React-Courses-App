import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Registration.scss';
import AuthForm from '../AuthForm/AuthForm';
import {
  EMAIL_AUTH_FIELD,
  NAME_AUTH_FIELD,
  PASSWORD_AUTH_FIELD,
  REGISTRATION_MESSAGE,
  REGISTRATION_TITLE,
  COURSES_PATH,
  LOGIN_PATH,
} from '../../constants';

const Registration = ({ isAuth, register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistrationBtnCLick = async (e) => {
    e.preventDefault();

    try {
      const response = await register({ name, email, password });

      if (response) {
        history.push(LOGIN_PATH);
      }
    } catch (e) {
      console.error(e.response.data.errors);
    }
  };

  const fields = [
    {
      ...NAME_AUTH_FIELD,
      value: name,
      onInputChange: handleNameInputChange,
    },

    {
      ...EMAIL_AUTH_FIELD,
      value: email,
      onInputChange: handleEmailInputChange,
    },

    {
      ...PASSWORD_AUTH_FIELD,
      value: password,
      onInputChange: handlePasswordInputChange,
    },
  ];

  if (isAuth) {
    return <Redirect to={COURSES_PATH} />;
  }

  return (
    <div className='registration'>
      <AuthForm
        fields={fields}
        title={REGISTRATION_TITLE}
        message={REGISTRATION_MESSAGE}
        onSubmit={handleRegistrationBtnCLick}
      />
    </div>
  );
};

Registration.propTypes = {
  isAuth: PropTypes.bool,
  register: PropTypes.func,
};

export default Registration;
