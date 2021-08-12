import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Header.scss';
import { LOGIN_PATH } from '../../constants';

const Header = ({ token, name, isAuth, logout }) => {
  const history = useHistory();

  const handleLogoutButtonClick = async () => {
    await logout(token);

    history.push(LOGIN_PATH);
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>

      <div className='header__user'>
        {isAuth && <span className='header__user__name'>{name}</span>}

        {isAuth && (
          <span className='header__user__auth'>
            <Button label='Logout' onClick={handleLogoutButtonClick} />
          </span>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  name: PropTypes.string,
  isAuth: PropTypes.bool,
  logout: PropTypes.func,
};

export default Header;
