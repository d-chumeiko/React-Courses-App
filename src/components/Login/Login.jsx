import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.scss';
import AuthForm from '../AuthForm/AuthForm';
import {
  EMAIL_AUTH_FIELD,
  LOGIN_MESSAGE,
  LOGIN_TITLE,
  PASSWORD_AUTH_FIELD,
  COURSES_PATH,
} from '../../constants';

const Login = ({ isAuth, token, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginBtnCLick = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  const fields = [
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
    <div className='login'>
      <AuthForm
        fields={fields}
        title={LOGIN_TITLE}
        message={LOGIN_MESSAGE}
        onSubmit={handleLoginBtnCLick}
      />
    </div>
  );
};

Login.propTypes = {
  isAuth: PropTypes.bool,
  token: PropTypes.string,
  login: PropTypes.func,
};

export default Login;
