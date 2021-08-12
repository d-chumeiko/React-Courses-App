import {
  SET_USER_DATA,
  TOGGLE_USER_IS_AUTH,
  SET_USER_TOKEN,
} from './actionTypes';

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  userData,
});

export const toggleUserIsAuth = (isAuth) => ({
  type: TOGGLE_USER_IS_AUTH,
  isAuth,
});

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  token,
});
